import url from 'url';
import assign from 'object-assign';
import loaderUtils from 'loader-utils';
import Markdown from 'js-markdown';

import attrParse from './lib/attributesParser';

function randomIdent() {
    return 'xxxHTMLLINKxxx' + Math.random() + Math.random() + 'xxx';
}

function getLoaderConfig(context) {
    var query = loaderUtils.getOptions(context) || {};
    var configKey = query.config || 'jsMarkdownLoader';
    var config = context.options && context.options.hasOwnProperty(configKey) ? context.options[configKey] : {};
    delete query.config;
    return assign(query, config);
}

function loader(content) {

    this.cacheable && this.cacheable();

    const attributes = ['img:src'],
        config = getLoaderConfig(this),
        root = config.root,

        raw = content,
        markdownData = Markdown.parse(content, {fullInfo: true}),
        data = {};

    content = [markdownData.html];

    const links = attrParse(content, (tag, attr) => !!(attributes.find(a =>
        a.charAt(0) === ':' ? attr === a.slice(1) : (tag + ':' + attr) === a
    )));
    links.reverse();
    links.forEach(link => {

        if (!loaderUtils.isUrlRequest(link.value, root) || link.value.indexOf('mailto:') > -1) {
            return;
        }

        const uri = url.parse(link.value);

        if (uri.hash !== null && uri.hash !== undefined) {
            uri.hash = null;
            link.value = uri.format();
            link.length = link.value.length;
        }

        do {
            var ident = randomIdent();
        } while (data[ident]);

        data[ident] = link.value;

        const x = content.pop();
        content.push(x.substr(link.start + link.length));
        content.push(ident);
        content.push(x.substr(0, link.start));

    });

    content.reverse();
    content = content.join('');

    const html = content.replace(/xxxHTMLLINKxxx[0-9\.]+xxx/g, match => !data[match] ?
        match
        :
        '" + require(' + JSON.stringify(loaderUtils.urlToRequest(data[match], root)) + ') + "'
    );

    return 'module.exports = ' + (
        !!config.fullInfo ?
            JSON.stringify({...markdownData, html, raw})
            :
            html
    ) + ';';

};

export default loader;
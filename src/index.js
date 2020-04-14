import HtmlLoader from 'html-loader';
import Markdown from 'js-markdown';

module.exports = async function loader(content) {

    this && this.cacheable && this.cacheable();

    const markdownData = Markdown.parse(content, this.query),
        context = {
            ...this,
            query: {}
        };

    const result = this.query.fullInfo ?
        await HtmlLoader.call(context, markdownData.html)
        :
        await HtmlLoader.call(context, markdownData);

    if (!this.query.fullInfo) {
        return result;
    }

    return result.replace(/module\.exports = .*/, 'module.exports = ' + JSON.stringify({
        ...markdownData,
        html: 'code',
        raw: content
    }).replace(/\"html\"\:\"code\"/, '"html":code') + ';');

};

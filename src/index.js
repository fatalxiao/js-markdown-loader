import HtmlLoader from 'html-loader';
import Markdown from 'js-markdown';

module.exports = async function loader(content) {

    this && this.cacheable && this.cacheable();

    const markdownData = Markdown.parse(content, this.query),
        hasFullInfo = this.query.fullInfo;

    delete this.query.fullInfo;
    delete this.query.dialect;

    const result = hasFullInfo ?
        await HtmlLoader.call(this, markdownData.html)
        :
        await HtmlLoader.call(this, markdownData);

    if (!hasFullInfo) {
        return result;
    }

    return result.replace(/module\.exports = .*/, 'module.exports = ' + JSON.stringify({
        ...markdownData,
        html: 'code',
        raw: content
    }).replace(/\"html\"\:\"code\"/, '"html":code') + ';');

};

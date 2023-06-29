import { marked } from 'marked';

export default function Descbox({ children }) {
    const renderHTMLString = (htmlString) => {
        return { __html: marked(htmlString, { mangle: false, headerIds: false }) };
    };

    return (
        <div dangerouslySetInnerHTML={renderHTMLString(children)} className="descbox"></div>
    );
}
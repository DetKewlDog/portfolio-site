// import { marked } from 'marked';

function Descbox({ children }) {
    // const renderHTMLString = (htmlString) => {
    //     return { __html: marked(htmlString, { mangle: false, headerIds: false }) };
    // };

    // return (
    //     <div dangerouslySetInnerHTML={renderHTMLString(children)} className="descbox"></div>
    // );
    return (
        <div className="descbox">{children}</div>
    );
}

export default Descbox;

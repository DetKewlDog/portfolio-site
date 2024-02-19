import { marked } from 'marked';

export default function Descbox({ children, useMD = false }) {
  const renderHTMLString = (htmlString) => {
    return { __html: marked(htmlString, { mangle: false, headerIds: false }) };
  };

  if (useMD) {
    return (
      <div dangerouslySetInnerHTML={renderHTMLString(children)} className="descbox"></div>
    );
  }

  return (
    <div className="descbox">
      {children}
    </div>
  );
}
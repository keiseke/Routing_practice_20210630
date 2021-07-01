import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2 ページです</h1>
      <Link to="/page2/999">URL Paramenter</Link>
      <br />
      <Link to="/page2/999?name=hogehoge">Query Paramenter</Link>
    </div>
  );
};

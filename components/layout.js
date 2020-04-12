import Navbar from "./navbar";
import Head from "next/head";

const layoutStyle = {
  backgroundColor: "white",
  color: "black",
  border: "5px solid tomato",
};

const Layout = (props) => {
  return (
    <div style={layoutStyle}>
      <Head>
        <title>{process.env.name}</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
          integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
          crossOrigin="anonymous"
        />
      </Head>
      <Navbar />
      <center>
        <h1>{process.env.name}</h1>
      </center>
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;

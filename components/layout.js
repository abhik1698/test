import Navbar from "./navbar";
import Head from "next/head";

const layoutStyle = {
  backgroundColor: "white",
  color: "black",
  border: "5px solid tomato",
};

const withLayout = (Page) => {
  return () => (
    <div style={layoutStyle}>
      <Head>
        <title>StackOverflow</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
          integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
          crossorigin="anonymous"
        />
      </Head>
      <Navbar />
      <center>
        <h1>StackOverflow Clone</h1>
      </center>
      <Page />
    </div>
  );
};

export default withLayout;

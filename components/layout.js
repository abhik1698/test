import Header from "./header";

const layoutStyle = {
  backgroundColor: "white",
  color: "black",
  border: "5px solid tomato",
  borderRadius: 10,
};

const withLayout = (Page) => {
  return () => (
    <div style={layoutStyle}>
      <Header />
      <center>
        <h1>StackOverflow Clone</h1>
      </center>
      <Page />
    </div>
  );
};

export default withLayout;

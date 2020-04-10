import Link from "next/link";

const headerStyle = {
  marginBottom: 20,
  padding: 20,
  color: "white",
  backgroundColor: "tomato",
};
export default function Header() {
  return (
    <div style={headerStyle}>
      <div style={{ margin: 10, display: "inline" }}>
        <Link href="/">
          <b title="Home">StackOverflow</b>
        </Link>
      </div>

      <div style={{ margin: 10, display: "inline" }}>
        <Link href="/about">
          <a title="About us">About us</a>
        </Link>
      </div>

      <div style={{ margin: 10, display: "inline" }}>
        <Link href="/signin">
          <a title="Sign in">Sign in</a>
        </Link>
      </div>

      <div style={{ margin: 10, display: "inline" }}>
        <Link href="/signout">
          <a title="Sign out">Sign out</a>
        </Link>
      </div>
    </div>
  );
}

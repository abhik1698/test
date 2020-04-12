import Link from "next/link";

const headerStyle = {
  padding: 20,
  color: "white",
  backgroundColor: "tomato",
};
export default function Navbar() {
  return (
    <div style={headerStyle}>
      <ul>
        <li>
          <Link href="/">
            <b title="Home">{process.env.name}</b>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a title="About us">About us</a>
          </Link>
        </li>
        <li>
          <Link href="/signin">
            <a title="Sign in">Sign in</a>
          </Link>
        </li>
        <li>
          <Link href="/signout">
            <a title="Sign out">Sign out</a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        ul {
          list-style: none;
          display: flex;
        }

        ul li {
          margin-right: 20px;
        }
      `}</style>
    </div>
  );
}

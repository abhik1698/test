import Link from "next/link";
import withLayout from "../components/layout";

const Page = () => (
  <div>
    This is a static page goto{" "}
    <Link href="/">
      <a>dynamic</a>
    </Link>
    page.
  </div>
);

export default withLayout(Page);

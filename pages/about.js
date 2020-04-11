import Link from "next/link";
import Layout from "../components/layout";

const Page = () => (
  <Layout>
    This is a static page goto{" "}
    <Link href="/">
      <a>dynamic</a>
    </Link>
    page.
  </Layout>
);

export default Page;

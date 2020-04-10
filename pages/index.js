import { withApollo } from "../apollo/client";
import gql from "graphql-tag";
import Link from "next/link";
import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import withLayout from "../components/layout";

const ViewerQuery = gql`
  query ViewerQuery {
    viewer {
      id
      email
    }
  }
`;

// const Index = () => {
//   const router = useRouter();
//   var { data, loading } = useQuery(ViewerQuery);
// };

const QuestionLink = (props) => (
  <li>
    <Link href="/q/[id]" as={`/q/${props.id}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const Page = () => {
  return (
    <div>
      <h1>Recent Questions</h1>
      <ul>
        <QuestionLink id="Hello Next.js" title="Hello Next.js" />
        <QuestionLink
          id="Learn Next.js is awesome"
          title="Learn Next.js is awesome"
        />
        <QuestionLink
          id="Deploy apps with Zeit"
          title="Deploy apps with Zeit"
        />
      </ul>
    </div>
  );
};

export default withApollo(withLayout(Page));

// if (
//   loading === false &&
//   data.viewer === null &&
//   typeof window !== "undefined"
// ) {
//   router.push("/signin");
// }

// if (!data && !data.viewer) {  }

// return <p>Loading...</p>;  `

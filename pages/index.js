import { withApollo } from "../apollo/client";
import gql from "graphql-tag";
import Link from "next/link";
import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import fetch from "isomorphic-unfetch";
import Layout from "../components/layout";

const ViewerQuery = gql`
  query ViewerQuery {
    viewer {
      id
      email
    }
  }
`;

const QuestionLink = (props) => (
  <li>
    <Link href="/q/[id]" as={`/q/${props.id}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const Index = (props) => {
  return (
    <Layout>
      <h1>Recent Questions</h1>
      <ul>
        {props.shows.map((show) => (
          <li key={show.id}>
            <Link href="/q/[id]" as={`/q/${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>{`
        h1,
        a {
          font-family: "Arial";
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
    </Layout>
  );
};

Index.getInitialProps = async function () {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map((entry) => entry.show),
  };
};

export default withApollo(Index);

//AUTH
// const Index = () => {
//   const router = useRouter();
//   var { data, loading } = useQuery(ViewerQuery);
// };

// if (
//   loading === false &&
//   data.viewer === null &&
//   typeof window !== "undefined"
// ) {
//   router.push("/signin");
// }

// if (!data && !data.viewer) {  }

// return <p>Loading...</p>;  `

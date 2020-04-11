import { withApollo } from "../apollo/client";
import gql from "graphql-tag";
import Link from "next/link";
import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import withLayout from "../components/layout";
import fetch from "isomorphic-unfetch";
import { useEffect, useState } from "react";

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

const Index = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(props.shows);
  // async function fetchData() {
  //   const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  //   res
  //     .json()
  //     .then((res) => {
  //       setData(res);
  //       data && setLoading(false);
  //       console.log(data);
  //     })
  //     .catch((err) => setErrors(err));
  // }
  // useEffect(() => {
  //   fetchData();
  // });
  // setData({ shows: resData.map((entry) => entry.show) });

  return (
    <div>
      <h1>Recent Questions</h1>
      <ul>
        {/* {!loading &&
          data.shows.map((show) => (
            <li key={show.id}>
              <Link href="/p/[id]" as={`/p/${show.id}`}>
                <a>{show.name}</a>
              </Link>
            </li>
          ))} */}
      </ul>
    </div>
  );
};

Index.getInitialProps = async (ctx) => {
  const res = await fetch("http://api.tvmaze.com/search/shows?q=batman");
  const json = await res.json();
  console.log(json);
  return { shows: json.map((j) => j.show) };
};

export default withApollo(withLayout(Index));

// if (
//   loading === false &&
//   data.viewer === null &&
//   typeof window !== "undefined"
// ) {
//   router.push("/signin");
// }

// if (!data && !data.viewer) {  }

// return <p>Loading...</p>;  `

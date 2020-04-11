import React from "react";
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { useRouter } from "next/router";
import { withApollo } from "../apollo/client";
import Layout from "../components/layout";

const SignOutMutation = gql`
  mutation SignOutMutation {
    signOut
  }
`;

function SignOut() {
  const client = useApolloClient();
  const router = useRouter();
  const [signOut] = useMutation(SignOutMutation);

  React.useEffect(() => {
    signOut().then(() => {
      client.resetStore().then(() => {
        router.push("/signin");
      });
    });
  }, [signOut, router, client]);

  return <Layout>Signing out...</Layout>;
}

export default withApollo(SignOut);

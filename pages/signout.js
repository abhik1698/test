import React from "react";
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { useRouter } from "next/router";
import { withApollo } from "../apollo/client";
import withLayout from "../components/layout";

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

  return <div>Signing out...</div>;
}

export default withApollo(withLayout(SignOut));

import { useRouter } from "next/router";
import withLayout from "../../components/layout";

const Page = () => {
  const router = useRouter();

  return (
    <div>
      <h1>{router.query.id}</h1>
    </div>
  );
};

export default withLayout(Page);

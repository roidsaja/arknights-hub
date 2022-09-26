import { useRouter } from "next/router";

const getQueryUrl = () => {
  const router = useRouter();
  const { query } = router;
  let search = query.search || "";

  return {
    router,
    search,
  };
};

export default getQueryUrl;

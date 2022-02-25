import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  return <div>{router.asPath}</div>;
};

export default Home;

import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  return <div>{router.asPath}</div>;
};

export const getServerSideProps = async () => {
  return { props: {} };
};

export default Home;

import Head from "next/head";
import PageTemplate from "../templates/page.template";

const Home = () => {
  return (
    <div>
      <Head>
        <title>NextWind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">Home</div>
    </div>
  );
};

export default Home;

Home.Template = PageTemplate;

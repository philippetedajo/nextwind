import Head from "next/head";
import PageTemplate from "../templates/page.template";

const Home = () => {
  return (
    <div>
      <Head>
        <title>NextWind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">hello world</div>
      <div className="p-4 shadow rounded bg-white">
        <h1 className="text-purple-500 leading-normal">Next.js</h1>
        <p className="text-gray-500">with Tailwind CSS</p>
      </div>
    </div>
  );
};

export default Home;

Home.Template = PageTemplate;

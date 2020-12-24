import Head from "next/head";
import PageTemplate from "../templates/page.template";

const Home = () => {
  return (
    <div>
      <Head>
        <title>NextWind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center">
        <p className="mt-20 text-5xl text-center w-2/3">
          quo minus id quod maxime placeat facere possimus, omnis voluptas
          assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et
          aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
          voluptates repudiandae sint et molestiae non recusandae.
        </p>
      </div>
    </div>
  );
};

export default Home;

Home.Template = PageTemplate;

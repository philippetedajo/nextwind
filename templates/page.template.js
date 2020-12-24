import { Header, Footer } from "../components";

function PageTemplate({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default PageTemplate;

import { Header, Footer, Container } from "../components";

function PageTemplate({ children }) {
  return (
    <>
      <Header />
      <Container padding="px-10 py-5">{children}</Container>
      <Footer />
    </>
  );
}

export default PageTemplate;

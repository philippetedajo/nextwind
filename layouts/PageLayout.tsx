import { Header } from "../components";

export const PageLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="px-10 py-5">{children}</div>
    </>
  );
};

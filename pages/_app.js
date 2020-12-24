import "tailwindcss/tailwind.css";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  const Template = Component.Template || EmptyTemplate;
  return (
    <Template>
      <Component {...pageProps} />
    </Template>
  );
}

const EmptyTemplate = ({ children }) => <>{children}</>;

export default MyApp;

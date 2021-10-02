import { Progress } from "../components";
import { AuthProvider } from "../context";
import "../styles/globals.css";

import { AuthLayout, DashboardLayout, PageLayout } from "../layouts";

function MyApp({ Component, pageProps, router }) {
  Progress();

  return (
    <AuthProvider>
      {router.pathname.startsWith("/auth") ? (
        <AuthLayout>
          <Component {...pageProps} />
        </AuthLayout>
      ) : router.pathname.startsWith("/dashboard") ? (
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      ) : (
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      )}
    </AuthProvider>
  );
}

export default MyApp;

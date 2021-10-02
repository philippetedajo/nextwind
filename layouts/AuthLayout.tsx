import { useEffect } from "react";
import { useAuth } from "../context";
import { useRouter } from "next/router";

export const AuthLayout = ({ children }) => {
  const { push } = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (user && user?.isLoggedIn) {
      push("/dashboard");
    }
  }, [user?.isLoggedIn]);

  return (
    <>
      <div className="container flex justify-center mx-auto px-10">
        {children}
      </div>
    </>
  );
};

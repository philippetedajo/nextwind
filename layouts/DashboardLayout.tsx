import React from "react";
import Link from "next/link";

export const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col border fixed h-full w-52">
        <Link href="/dashboard">
          <a className="p-3"> Home </a>
        </Link>
        <Link href="/dashboard/users">
          <a className="p-3"> User </a>
        </Link>
      </div>
      <div className="w-full ml-52 p-5">{children}</div>
    </div>
  );
};

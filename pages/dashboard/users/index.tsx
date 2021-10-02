import React, { useState } from "react";
import Link from "next/link";
import withSession, { checkSession } from "../../../utils/session";
import { Response } from "../../../_types/interceptor_types";
import axios from "../../../utils/interceptors";

const Index = (props) => {
  const [users, setUsers] = useState(props.users);
  const [deleteId, setDeleteId] = useState(null);

  const onDelete = async (id) => {
    setDeleteId(id);
    const data = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/users/${id}`
    );
    setDeleteId(null);

    if (data.data.code === Response.SUCCESS) {
      let newUserList = users.filter((user) => user.id !== id);
      setUsers(newUserList);
    }
  };

  const userList = users.map((user) => (
    <div className="border rounded p-4" key={user.id}>
      <Link href={`users/${user.id}`}>
        <div className="cursor-pointer">
          <div className="">Nom: {user.firstname}</div>
          <div className="">Firstname: {user.lastname}</div>
          <div className="">Email: {user.email}</div>
          <div className="">Phone: {user.phone}</div>
          <div className="">Role: {user.role}</div>
        </div>
      </Link>
      <button
        onClick={() => onDelete(user.id)}
        className="border rounded m-2 px-2"
      >
        {deleteId === user.id ? "Loading..." : "DELETE"}
      </button>
    </div>
  ));

  return (
    <div className="dashboard-container">
      <div className="flex justify-between items-center">
        <h1> All fake users</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-10">
        {userList}
      </div>
    </div>
  );
};

export default Index;

export const getServerSideProps = withSession(async ({ req, res }) => {
  checkSession(req, res);

  const users = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);

  return {
    props: { users: users.data.data },
  };
});

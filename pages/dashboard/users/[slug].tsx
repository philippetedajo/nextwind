import React, { useState } from "react";
import withSession, { checkSession } from "../../../utils/session";
import axios from "../../../utils/interceptors";

const Slug = (props) => {
  const [singleUser] = useState(props.singleUser);

  return (
    <div className="p-5">
      <div className="">Firstname: {singleUser.firstname}</div>
      <div className="">Lastname: {singleUser.lastname}</div>
      <div className="">Email: {singleUser.email}</div>
      <div className="">Phone: {singleUser.phone}</div>
      <div className="">Role: {singleUser.role}</div>
    </div>
  );
};

export default Slug;

export const getServerSideProps = withSession(async ({ req, res, query }) => {
  const { user } = checkSession(req, res);

  const singleUser = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/users/${query.slug}`
  );

  return {
    props: { singleUser: singleUser.data.data },
  };
});

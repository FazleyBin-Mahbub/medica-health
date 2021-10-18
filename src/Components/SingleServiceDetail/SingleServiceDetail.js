import React from "react";
import { useParams } from "react-router";

const SingleServiceDetail = () => {
  const { id } = useParams();
  return (
    <div className="pt-5 mt-5">
      <p>Service: {id}</p>
    </div>
  );
};

export default SingleServiceDetail;

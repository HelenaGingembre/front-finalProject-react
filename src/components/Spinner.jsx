import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "100px auto",
};
const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      className="fill-indigo-500"
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};

export default Spinner;

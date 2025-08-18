// src/components/LoremContent.js
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchLoremData } from "../features/lorem/loremActions";

const LoremContent = ({ data, loading, error, fetchLoremData }) => {
  useEffect(() => {
    fetchLoremData();
  }, [fetchLoremData]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>{data?.title}</h2>
      <p>{data?.body}</p>
    </div>
  );
};

const mapState = (state) => ({
  data: state.lorem.data,
  loading: state.lorem.loading,
  error: state.lorem.error,
});

export default connect(mapState, { fetchLoremData })(LoremContent);

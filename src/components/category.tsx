import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

const Category = () => {
  const params = useParams();

  return <div>Welcome to the Category of {params.category}</div>;
};

export default Category;

import React, { useState, useEffect } from "react";
import axios from "axios";
import FunnelChart from "./FunnelChart"; // Import the FunnelChart component
import { FidgetSpinner } from "react-loader-spinner";
import { API_ENDPOINTS } from "../config/apiConfig";
import css from "./PopulationData.module.css";
function PopulationData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(API_ENDPOINTS.POPULATION)
      .then((response) => {
        setData(response.data); // Ensure data is formatted correctly
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      {/* Render the FunnelChart if data is loaded */}
      {data.length > 0 ? (
        <FunnelChart data={data} />
      ) : (
        <div className={css.custom_loading_css}>
          <FidgetSpinner />
          Loading..
        </div>
      )}
    </div>
  );
}

export default PopulationData;

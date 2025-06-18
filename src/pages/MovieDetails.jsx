import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dummyDateTimeData, dummyShowsData } from "../assets/assets";

const MovieDetails = () => {
  const { id } = useParams();
  const [show, setShows] = useState(null);

  const getShow = async () => {
    const show = dummyShowsData.find((show) => show._id === id);
    setShows({
      movie: show,
      dateTime: dummyDateTimeData,
    });
  };

  useEffect(() => {
    getShow();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return show ? (<div>MovieDetails</div>) :(<div>Loading...</div>) 
};

export default MovieDetails;

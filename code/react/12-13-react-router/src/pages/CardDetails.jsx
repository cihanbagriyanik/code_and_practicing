import React from "react";
import { useParams } from "react-router-dom";
import data from "../data";

const CardDetails = () => {
  //! navigate ile rotalandirilan parametlereler, rotanin gonderdigi sayfada useParam s ile karsilanir...!
  const { namE } = useParams();

  return (
    <div>
      {data.map(
        (i) =>
          i.name === namE && (
            <div className="text-center mt-4">
              <h3>{i.text}</h3>
              <img src={i.img} width={300} alt="" />
            </div>
          )
      )}
    </div>
  );
};

export default CardDetails;

import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from "../data";

const CardDetails = () => {
  //! navigate ile rotalandirilan parametlereler, rotanin gonderdigi sayfada useParam s ile karsilanir...!
  const { namE } = useParams();

  //! alttaki usaNavigate buttonlar icin useNavigate ekledim
  const navigate = useNavigate();
  return (
    <div className="container text-center mt-4">
      {data.map(
        (i) =>
          i.name === namE && (
            <div key={i.id}>
              <h3 className="text-danger">{i.name}</h3>
              <img src={i.img} width={300} alt="" />
              <h3>{i.text}</h3>
              <h4>{i.yorum}</h4>

              <div>
                <button
                  className="btn btn-primary me-4"
                  onClick={() => navigate(-1)}
                >
                  GO BACK
                </button>
                <button
                  className="btn btn-warning"
                  onClick={() => navigate("/")}
                >
                  GO HOME
                </button>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default CardDetails;

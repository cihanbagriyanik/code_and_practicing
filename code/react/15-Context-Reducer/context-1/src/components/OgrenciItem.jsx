import React from "react";
import { useContext } from "react";
import { OgrenciContext } from "../App";

const OgrenciItem = () => {
  //! Globaldan gerekli elemenlari buraya cagirdik
  const { ogrenci, changeRenk } = useContext(OgrenciContext);

  // console.log(OgrenciContext);
  return (
    <div>
      {ogrenci.map((i) => {
        return (
          <div style={{ background: i.color }} key={i.id}>
            <h3>NAME: {i.name}</h3>
            <h4>EMAIL: {i.email} </h4>
            <h4>AGE: {i.age} </h4>
            Color:{" "}
            <input
              type="text"
              value={i.color}
              onChange={(e) => changeRenk(i.id, e.target.value)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default OgrenciItem;

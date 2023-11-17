import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const TeacherDetails = () => {
  //!!!!2.YOL useLocation.//  navigate ile gonderilen state'i yakalamak icin useLocation Hook'u kullanilabilir.
  //! Bu durumda veri, state ile geldigi icin yeniden fetch yapilmasina gerek kalmaz
  let {
    state: { kisi },
  } = useLocation();

  /* -------------------------------------------------------------------------- */
  //? 1.YOL fetch ile buraya gonderilen id li veriyi tekrar cekmek
  // const { id } = useParams();

  // const [kisi, setKisi] = useState({});

  // useEffect(() => {
  //   fetch(`https://reqres.in/api/users/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setKisi(data.data));
  // }, [id]);

  // return (
  //   <div className="container text-center mt-4">
  //     <img src={kisi.avatar} alt="" width={300} />
  //     <h2 className="text-danger">
  //       {kisi.first_name} {kisi.last_name}{" "}
  //     </h2>
  //     <h3 className="text-primary"> Benim emil im :  {kisi.email} </h3>
  //   </div>
  // );
  //?????????????????????
  /* -------------------------------------------------------------------------- */

  return (
    <div className="container text-center mt-4">
      <img src={kisi.avatar} alt="" width={300} />
      <h2 className="text-danger">
        {kisi.first_name} {kisi.last_name}{" "}
      </h2>
      <h3 className="text-primary"> Benim emil im : {kisi.email} </h3>
    </div>
  );
};

export default TeacherDetails;

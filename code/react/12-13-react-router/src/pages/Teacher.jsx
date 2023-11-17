import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Teacher = () => {
  const [people, setPeople] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://reqres.in/api/users/")
      .then((res) => res.json())
      .then((data) => setPeople(data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container text-center mt-4 bg-secondary">
      <div className="row">
        {people.map((kisi) => (
          <div key={kisi.id} className="col-12 col-sm-6 col-md-4">
            <img
              width="200px"
              src={kisi.avatar}
              alt=""
              /* -------------------------------------------------------------------------- */
              //? 1.YOL TeacherDetails a gonderilen id li veriyi tekrar orda fetch ile cekiyoruz
              // onClick={() => navigate(`/teacher/ ${kisi.id}`)}
              /* -------------------------------------------------------------------------- */
              onClick={() => navigate(`${kisi.id}`, { state: { kisi } })}
            />
            <h3>{kisi.first_name} </h3>
            <h2>{kisi.last_name} </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teacher;

import React, { useEffect, useState } from "react";
const Teacher = () => {
  const [people, setPeople] = useState([]);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setPeople(data))
      .catch((err) => console.log(err));
  }, []);

 
  return (
    <div className="container text-center mt-4">
      <div className="row">
        {people.map(({ id, name, username, phone }) => (
          <div key={id} className="col-12 col-sm-6 col-md-4">
            {/* https://www.dicebear.com/styles/avataaars/ */}
            <img
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`}
              alt=""
            />
            <h5>{name} </h5>
            <h6>{username} </h6>
            <h6>{phone} </h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teacher;

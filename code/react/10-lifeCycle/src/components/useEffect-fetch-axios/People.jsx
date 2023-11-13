
import React, { useState, useEffect } from 'react'

import axios from "axios"



const People = () => {

  const [people, setPeople] = useState([])

  //! 1.YOL
  // useEffect(() => {

  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data) => setPeople(data))

  // }, [])

  //! 2.YOL
  //**************** */
  // const getir = async () => {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //   const data = await res.json();

  //   setPeople(data);
  // };
  // useEffect(() => {
  //   getir();
  // }, []);
  //**************** */

  //! 3.YOL AXIOS
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((veri) => setPeople(veri.data))

  }, [])




  // console.log(people);


  return (
    <div className='container text-center mt-4'>
      <div className='row'>

        {people.map(({ id, name, username, phone }) => (

          <div className='col-12 col-sm-6 col-md-4' key={id}>
            {/* https://www.dicebear.com/styles/avataaars/ */}
            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`} alt="" />

            <h5> {name} </h5>
            <h6> {username} </h6>
            <h6> {phone} </h6>

          </div>

        ))}

      </div>
    </div>
  )
}

export default People
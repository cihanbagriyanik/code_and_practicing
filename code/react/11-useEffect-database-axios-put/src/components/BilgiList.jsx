import axios from "axios";
import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import EditBilgi from "./EditBilgi";

const BilgiList = ({ tutorial, getTutorialS }) => {
  const [bilgiEdit, setBilgiEdit] = useState({});
  // console.log(bilgiEdit);
  // console.log(tutorial);
  const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

  //!backend kodunu yazan developer ların hangi endpointleri seçtiği önemli, burada id nin sonuna / getirmişler, ama sondaki / i eksik yazarsanız hata almazsanız, çünkü otomatik tamamlanır
  const deleteBilgi = async (id) => {
    await axios.delete(`${BASE_URL}  ${id}/`);

    getTutorialS();
  };

  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {tutorial.map(({ id, title, description }) => {
            return (
              <tr key={id}>
                <th> {id} </th>
                <td> {title} </td>
                <td> {description} </td>
                <td className="text-center ">
                  <AiFillDelete
                    type="button"
                    size={22}
                    className="text-danger cursor-pointer"
                    onClick={() => deleteBilgi(id)}
                  />

                  <FaEdit
                    data-bs-toggle="modal"
                    data-bs-target="#editModal"
                    size={20}
                    type="button"
                    className="me-2 text-warning cursor-pointer"
                    onClick={() => setBilgiEdit({ id, title, description })}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* edit modul */}
      <EditBilgi bilgiEdit={bilgiEdit} getTutorialS={getTutorialS} />
    </div>
  );
};

export default BilgiList;

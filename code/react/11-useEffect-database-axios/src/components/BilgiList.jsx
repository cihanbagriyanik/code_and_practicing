import React from 'react'
import { AiFillDelete } from "react-icons/ai"
import { FaEdit } from "react-icons/fa"



const BilgiList = ({ tutorial }) => {
  // console.log(tutorial);


  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">Edit</th>
          </tr>
        </thead>
        <tbody>

          <tr >
            <th></th>
            <td></td>
            <td> </td>
            <td className="text-center ">
              <AiFillDelete
                type="button"
                size={22}
                className="text-danger cursor-pointer"
              />

              <FaEdit
                data-bs-toggle="modal"
                data-bs-target="#editModal"
                size={20}
                type="button"
                className="me-2 text-warning cursor-pointer"
              />
            </td>
          </tr>


        </tbody>
      </table>
    </div>

  )
}

export default BilgiList
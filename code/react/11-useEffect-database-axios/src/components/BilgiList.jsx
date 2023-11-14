import React from 'react'
import { AiFillDelete } from "react-icons/ai"
import { FaEdit } from "react-icons/fa"



const BilgiList = ({ tutorial }) => {
  // console.log(tutorial);


  return (
    <div className='container mt-4'>
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
          {tutorial.map(({ id, title, description }) => {
            return (
              <tr >
                <th> {id} </th>
                <td> {title} </td>
                <td> {description} </td>
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
            )
          })}
        </tbody>
      </table>













      {/* -------------------------------------------------------------------------- */}
      {/* edit modul */}

      {/* <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div> */}

      {/* -------------------------------------------------------------------------- */}
    </div>

  )
}

export default BilgiList
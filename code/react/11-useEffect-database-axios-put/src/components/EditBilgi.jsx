import axios from "axios";
import React, { useEffect, useState } from "react";

const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

const EditBilgi = ({ bilgiEdit, getTutorialS }) => {
  const { id, title: eskiTitle, description: eskiDesc } = bilgiEdit;

  // console.log("bilgi", bilgiEdit);
  // console.log("eskiTitle", eskiTitle);
  //? https://react.dev/reference/react/useState#usestate
  //! State degiskeninin degeri, 1.render ile initialState
  //! parametresinin ilk degerini alir. Dolayisiyle bu durumda
  //! prop'tan gelen ilk deger state'e aktarilir.
  //! Sonradan degisen props degerleri useState'e aktarilmaz.
  //! Eger props'tan gelen degerleri her degisimde useState'e
  //! aktarmak istersek useEffect hook'unu componentDidUpdate
  //! gibi kullanabiriz.

  const [title, setTitle] = useState(eskiTitle);
  const [desc, setDesc] = useState(eskiDesc);
  // console.log("title", title);

  //! componentDidMount => dogum
  // useEffect(() => {}, []);

  //* componentDidUpdate => gelisim
  useEffect(() => {
    setTitle(eskiTitle);
    setDesc(eskiDesc);
  }, [eskiTitle, eskiDesc]);

  //todo componentDidUnmount => olum
  // useEffect(() => {
  //   return () => {};
  // }, []);

  const putBilgi = async (veri) => {
    try {
      await axios.put(`${BASE_URL}${id}/`, veri);
    } catch (error) {
      console.log(error);
    } finally {
      getTutorialS();
      //! Islem basarilida olsa hatayada dusse finally her turlu calisir
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    putBilgi({ title, description: desc });

    // getTutorialS();
  };

  return (
    <div>
      <div
        className="modal fade"
        id="editModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Tutorial
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    className="form-control"
                    id="title"
                    type="text"
                    value={title}
                    placeholder="Enter your title"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="desc" className="form-label">
                    Description
                  </label>
                  <input
                    className="form-control"
                    id="desc"
                    type="text"
                    placeholder="Enter your description"
                    required
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="submit"
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBilgi;

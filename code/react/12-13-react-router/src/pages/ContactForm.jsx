
import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmiT = () => {
    //normalde backend e yollama kodları yazılacak

    alert(`
           isim:${name}
           password:${pass}
           ülke:${country}`);
  };

  return (
    <div className="container text-center mt-4">
      <h1>***************************************</h1>
      <h1>FORMS (EVENTS)</h1>
      <form onSubmit={handleSubmiT}>
        <div className="mb-4">
          <label htmlFor="username" className="form-label">
            USERNAME: <span className="text-danger fw-bold">{name} </span>
          </label>
          <input
            type="text"
            id="username"
            className="form-control"
            onInput={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="form-label">
            PASSWORD
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            onChange={(e) => setPass(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="country" className="form-label">
            COUNTRY: <span className="text-danger fw-bold">{country} </span>
          </label>
          <select
            className="form-select"
            onChange={(e) => setCountry(e.target.value)}
          >
            <option selected> COUNTRIES</option>
            <option value="Turkey">Türkiye</option>
            <option value="Germany">Almanya</option>
            <option value="USA">Amerika</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary mt-4">
          SUBMIT (GÖNDER)
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

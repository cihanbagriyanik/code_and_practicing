import React, { useContext } from "react";
import { KullaniciContext } from "../App";
import AnaUser from "./AnaUser";

const Isimler = () => {
  const { users } = useContext(KullaniciContext);

  return (
    <div>
      {/* diziden 4 kisinin ismini bastir */}
      {users.slice(0, 4).map((i) => (
        <div style={{ textAlign: "center", background: "pink" }} key={i.id}>
          {" "}
          {i.login}{" "}
        </div>
      ))}
      <AnaUser users={users} />
    </div>
  );
};

export default Isimler;

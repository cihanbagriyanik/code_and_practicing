
import { useKullaniciContext } from "../context/KullaniciProvider";

const AnaUser = ({ users }) => {
  const { changeWidth } = useKullaniciContext();

  return (
    <div>
      {users.map((i) => {
        return (
          <div key={i.id}>
            <h3> {i.login} </h3>
            <img src={i.avatar_url} alt="" width={i.width} />
            <div>
              <label htmlFor="">Imgage Width(px)</label>
              <input
                type="number"
                onChange={(e) => changeWidth(i.id, e.target.value)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AnaUser;

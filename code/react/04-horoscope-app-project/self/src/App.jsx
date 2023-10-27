import Header from "./components/header/Header"
import Card from "./components/main/Card"
import Main from "./components/main/Main"
import MyNavbar from "./components/navbar/Navbar";

import "../src/App.scss"



//! Bootstrap in yolunu da import ediyoruz
import "bootstrap/dist/css/bootstrap.min.css";

import { data } from "../src/helper/data"

const App = () => {

  return (
    <div>

      <MyNavbar />
      <Header />
      {/* <Card /> */}
      <Main data={data} />


    </div>
  )
}


export default App
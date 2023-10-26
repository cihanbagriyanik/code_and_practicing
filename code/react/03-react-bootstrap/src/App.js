

import MyNavbar from "./components/MyNavbar"

//! Bootstrap in yolunu da import ediyoruz
import "bootstrap/dist/css/bootstrap.min.css";


import myData from "./data";
import CourseCard from "./components/CourseCard";



const App = () => {

  return (
    <div>

      <MyNavbar />
      <CourseCard data={myData}/>

    </div>
  )
}


export default App

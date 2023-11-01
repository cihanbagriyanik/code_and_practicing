//! Bootstrap in yolunu da import ediyoruz
import "bootstrap/dist/css/bootstrap.min.css";



// import Events from "./1-events-hookIntro/Events"
// import Hooks from "./2-hooks/Hooks"
import Counter from "./3-classComponents/Counter";



const App = () => {

  return (
    <div>

      {/* <Events />
      
      <Hooks /> */}

      <Counter />

      <Counter count={"osman"} />

    </div>
  )
}


export default App

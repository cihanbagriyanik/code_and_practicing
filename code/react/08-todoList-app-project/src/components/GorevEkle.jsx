import React, { useState } from 'react'

const GorevEkle = ({ gorevler, setGorevler }) => {

  const [text, setText] = useState("")
  const [day, setDay] = useState("")

  const handleSubmiT = (e) => {
    e.preventDefault()

    const id = gorevler.length + 1
    const newGorev = { id: id, text: text, day: day, isDone: false }
    setGorevler([...gorevler, newGorev])

    // input alanlarını boşaltmak için, altta inputlara value veriyoruz, burada da temizliyoruz
    setText("")
    setDay("")


    localStorage.setItem("todos", JSON.stringify([...gorevler, newGorev]))


  }

  const [button, setButton] = useState(true)


  return (
    <div>
      <header className='header'>
        <h1>TO DO APP</h1>
        <button
          className='btn'
          style={{ backgroundColor: button ? "red" : "purple" }}
          onClick={() => setButton(!button)}
        >
          {button ? "CLOSE" : "SHOW"} ADD TASK BAR
        </button>
      </header>
      {button && (
        <form onSubmit={handleSubmiT} >
          <div className="form-control">
            <label htmlFor="text">Task</label>
            <input
              id="text"
              type='text'
              onChange={(e) => setText(e.target.value)}
              name='text'
              value={text}
            />
          </div>
          <div className="form-control">
            <label htmlFor="day">Day & Time</label>
            <input
              id="day"
              type='datetime-local'
              onChange={(e) => setDay(e.target.value)}
              name='day'
              value={day}
            />
          </div>
          <div>
            <button className="btn btn-submit" type="submit" >
              SUBMİT
            </button>
          </div>
        </form>
      )}

    </div>
  );
}

export default GorevEkle
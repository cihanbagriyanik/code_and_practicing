import React from 'react'
import { FaTimesCircle } from "react-icons/fa";


const GorevleriGoster = ({ gorevler, setGorevler }) => {
  // console.log(gorevler);

  const deleteGorev = (sil) => {
    const yeniGorevler = gorevler.filter((i) => i.id !== sil)

    setGorevler(yeniGorevler)

    localStorage.setItem("todos", JSON.stringify(yeniGorevler))

  }

  return (
    <div>

      {gorevler.map((x) => {
        return (
          <div
            key={x.id}
            className={x.isDone ? "done" : "gorev"}
            onDoubleClick={() => setGorevler(gorevler.map((a) => a.id === x.id ? { ...a, isDone: !a.isDone } : a))}
          >

            <h3> {x.text} <FaTimesCircle onClick={() => deleteGorev(x.id)} /> </h3>
            <h6> {x.day}  </h6>

          </div>
        )
      })}

    </div>
  )
}

export default GorevleriGoster

import React from 'react'
import Header from './components/header/Header'
import Card from './components/card/Card'

//! scss dosyasindaki sayfalari burada yada App.scss de import edebiliriz
//* 1. import yolu /// 2. yol App.scss de 
// import "./scss/_button.scss"
// import "./scss/_reset.scss"
// import "./scss/_variable.scss"

import "./App.scss"

import data from "./data"

const App = () => {

  return (
    <div>
      <Header />
      <Card data={data} />
    </div>
  )
}

export default App
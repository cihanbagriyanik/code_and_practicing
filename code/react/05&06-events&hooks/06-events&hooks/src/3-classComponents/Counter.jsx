//* ====================== CLASS COMPONENTS AND STATE ======================
//* React taki Class-Components  ES6 class yapısını temel alır.
//* çok fazla boilerplate code a sahipler.
//* fakat, state lere sahip olabilirler
//*  state component hakkında data veya bilgi içermek için kullanılan yerleşik bir React object tidir. component in durumu zamanla değişebilir ;
//* ne zaman değişse component re-render olur.
//* this.state ile constructor da state için bir initial value atayabiliriz. constructor  dışında, state i setState() metoduyla değiştirebiliriz,
//* =========================================================================



import { Component } from 'react'



class Counter extends Component {

  constructor() {
    super()
    this.state = { sayac: 0 }
  }

  // Fonksiyonlar
  arttir() {
    this.setState({ sayac: this.state.sayac + 1 })
  }


  //! arrow kullaniyorsak asagida cagirirken bind(this) gerek yok sadece this.azalt yeterli
  azalt = () => {
    this.setState({ sayac: this.state.sayac - 1 })
  }


  render() {
    return (
      <div className='text-center m-5'>
        <h1>SAYAC: <span className='text-danger'>{this.state.sayac}</span> </h1>
        <button className='btn btn-danger  m-3' onClick={this.arttir.bind(this)}>ARTTIR</button>
        <button className='btn btn-primary m-3' onClick={this.azalt}>AZALT</button>
      </div>
    )
  }

}

export default Counter
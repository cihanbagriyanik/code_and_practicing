import React, { useEffect } from 'react'
import useStockCall from '../hooks/useStockCall'

const Brands = () => {
  // const {getBrands} = useStockCall()
  const {getStockData} = useStockCall()
  useEffect(()=>{
    getStockData("brands")
  },[])
  return (
    <div>Brands</div>
  )
}

export default Brands
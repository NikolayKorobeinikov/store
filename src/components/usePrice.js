import React, { useState } from 'react'

function usePrice(num) {
    const [price, setPrice] = useState(num);
    function plus() {
        setPrice(price + price)
    }

    function minus() {
        setPrice(price - price)
    }
  return [price, plus, minus]
}

export default usePrice
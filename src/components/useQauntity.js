import React, { useState } from 'react'

function useQauntity(num) {
    const [elem, setElem] = useState(num);

    function plus() {
        setElem(elem + 1);
    }

    function minus() {
        setElem(elem - 1);
    }
  return [elem, plus, minus]
}

export default useQauntity;
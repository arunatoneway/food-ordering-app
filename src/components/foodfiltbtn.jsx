import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { categoryclicked } from "../features/filtercategory/filtercategorySlice";




function Foodfiltbtn({ category }) {

    console.log(category)

    const [ishovered, setIshovered] = useState(false)

    const cartitems = useSelector(state => state.filtercategory.value)
    const dispatch = useDispatch()

    return <>

        <div onClick={() => {dispatch(categoryclicked(category.name)) }} onMouseEnter={() => { setIshovered(true) }} onMouseLeave={() => { setIshovered(false) }} style={{ transition: 'transform 0.3s ease', border: 'none', borderRadius: '60px', backgroundColor: '#FF6F61', width: '120px', height: '120px', padding: '10px', transform: ishovered ? "scale(1.2)" : "scale(1)" }}>
            <img style={{ width: '100%', borderRadius: '50px' }} src={category.image} />
        </div>


    </>
}

export default Foodfiltbtn
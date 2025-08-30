import { useDispatch, useSelector } from "react-redux";
import Foodfiltbtn from "./foodfiltbtn"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { categoryclicked } from "../features/filtercategory/filtercategorySlice";





function Catefiltr({ category }) {

    const navigate = useNavigate()

    const categoryfilt = useSelector(state => state.filtercategory.value)
    const dispatch = useDispatch()

    let b = category[2]
    console.log(b)

    useEffect(() => {
        if (categoryfilt) {

            
            navigate("/Menue", { state: { runFunc: true } })
            
            

        }
    }, [categoryfilt])






    return <>
        <div style={{ padding: '20px' }}>
            <div style={{ color: 'white', borderRadius: '30px', backgroundColor: '#FF6F61', padding: '20px', paddingBottom: '50px', width: '75%', textAlign: 'center', justifySelf: 'center' }}>

                <h2>Discover your favorite meals <br /> from different cuisines</h2>


                <div style={{ borderRadius: '30px', backgroundColor: 'white', display: 'flex', flexWrap: 'wrap', width: '75%', justifyContent: 'center', margin: 'auto', marginTop: '20px', padding: '20px', gap: '30px', alignItems: 'center' }}>

                    {
                        category.map((ct) => {
                            return <Foodfiltbtn category={ct} />
                        })
                    }

                </div>
            </div>
        </div>


    </>

}

export default Catefiltr
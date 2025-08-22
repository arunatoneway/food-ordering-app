import Foodfiltbtn from "./foodfiltbtn"


function Catefiltr({category}) {

    let b = category[2]
    console.log (b)


    return <>
        <div style={{display: 'flex',flexWrap:'wrap',width:'75%',justifyContent:'center', margin: 'auto',marginTop:'50px', padding: '10px',gap:'30px', alignItems: 'center' }}>

                {
                    category.map((ct)=>{
                        return <Foodfiltbtn category ={ct}/>
                    })
                }

        </div>


    </>

}

export default Catefiltr
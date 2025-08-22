import ItemCard from "./ItemCardcomp"





function FavorateFoodlist ({food}){

let ag = food
console.log(food)
console.log({ag})

    return(
        <><div style={{display:'flex',gap:'5px'}}>

            {
            food.map((pd)=>{return<ItemCard item ={pd}/>;

        })
        }

        </div>
        
        </>
    )
    
    
    
}

export default FavorateFoodlist
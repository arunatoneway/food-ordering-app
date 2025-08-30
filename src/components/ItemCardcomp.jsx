import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from "react";

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../features/counter/counterSlice';
import { additem, removeitem } from '../features/cart/cartSlice';



function ItemCard({ item }) {
  console.log(item)

  const [ishovered, setIshovered] = useState(false)


  const cartitems = useSelector(state => state.cart.value)
  const dispatch = useDispatch()

  
      
    




  



  return <>

    <Card onMouseEnter={() => { setIshovered(true) }} onMouseLeave={() => { setIshovered(false) }} style={{ width: '18rem', transition: "transform 0.4s ease", transform: ishovered ? "scale(.9)" : "scale(1)" }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          Price : {item.price}
        </Card.Text>
        <Card.Text>
          Ratting : {item.ratting}
        </Card.Text>
        <Button variant="primary" onClick={() => dispatch(additem(item))}>Add to Cart</Button>
        <Button variant="primary" onClick={() => dispatch(removeitem(item.id))}>Remove item</Button>
      </Card.Body>
    </Card>

  </>
}

export default ItemCard
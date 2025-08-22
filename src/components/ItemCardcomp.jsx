import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function ItemCard({item}){
    console.log(item)

    return<>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          Price : {item.price}
        </Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
    
    </>
}

export default ItemCard
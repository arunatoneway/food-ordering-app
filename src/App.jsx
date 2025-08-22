import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarland from './components/Navbar1';
import Catefiltr from './components/Fdfilltercomp';
import HeroComp from './components/Herocomp';
import FavorateFoodlist from './components/itemsbyamountratingcomp';
import { data } from 'react-router-dom';




function App() {

  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    
    fetch("http://localhost:5000/foods")
      .then((res) => res.json())
      .then((data) => setItems(data));
      
  }, []);

  useEffect(() => {
    
    fetch("http://localhost:5000/category")
      .then((res) => res.json())
      .then((data) => setCategory(data));
      
  }, []);

  let a=category
  console.log(a)
  

  

  return (
    <>
      <Navbarland />
      <HeroComp/>
      <Catefiltr category ={category}/>
      <FavorateFoodlist food={items}/>

    </>
  )
}

export default App

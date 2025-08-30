import { useEffect, useState } from "react";
import Foodfiltbtn from "./components/foodfiltbtn";
import FavorateFoodlist from "./components/itemsbyamountratingcomp";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { categoryclicked } from "./features/filtercategory/filtercategorySlice";
import { useNavigate } from "react-router-dom";





function Menue() {

    const [items, setItems] = useState([]);
    const [category, setCategory] = useState([]);

    const cartitems = useSelector(state => state.cart.value)

    let categoryfilt = useSelector(state => state.filtercategory.value)
    const dispatch = useDispatch()

    const navigate = useNavigate()
    let searchfield = document.getElementById('searchfield')


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

    const [fooditem, setFooditem] = useState([])

    useEffect(() => {
        setFooditem(items)
    }, [items]);

    const categoryarray = category.map(category => category.name)

    const [position, setPosition] = useState(0);
    const itemWidth = 140;
    const visibleItems = 10;

    const maxPosition = category.length - visibleItems;

    const move = (dir) => {
        if (dir === "left" && position > 0) {
            setPosition(position - 1);
        }
        if (dir === "right" && position < maxPosition) {
            setPosition(position + 1);
        }
    }

    useEffect(() => {
        if (categoryfilt === "LtoHPrice") {
            setFooditem([...items].sort(function (a, b) { return (a.price - b.price) }))
        }
        else if (categoryfilt === "HtoLPrice") {


            setFooditem([...items].sort(function (a, b) { return (b.price - a.price) }))

        }
        else if (categoryfilt === "LtoHRattings") {


            setFooditem([...items].sort(function (a, b) { return (a.ratting - b.ratting) }))

        }
        else if (categoryfilt === "HtoLRattings") {


            setFooditem([...items].sort(function (a, b) { return (b.ratting - a.ratting) }))



        }
        else if (categoryfilt === "Below Rs.50") {
            setFooditem(items.filter((value) => {
                return value.price <= 50
            }))
        }

        else if (categoryfilt === "Rs.50-Rs.100") {
            setFooditem(items.filter((value) => {
                return value.price >= 50 && value.price <= 100
            }))
        }
        else if (categoryfilt === "Rs.100-Rs.200") {
            setFooditem(items.filter((value) => {
                return value.price >= 100 && value.price <= 200
            }))
        }
        else if (categoryfilt === "Rs.200-Rs.400") {
            setFooditem(items.filter((value) => {
                return value.price >= 200 && value.price <= 400
            }))
        }
        else if (categoryfilt === "Rs.400+") {
            setFooditem(items.filter((value) => {
                return value.price >= 400
            }))
        }
        else if (categoryfilt === "Rattings 4.0+") {
            setFooditem(items.filter((value) => {
                return value.ratting >= 4
            }))
        }
        else if (categoryfilt.slice(0, 6) == "Search") {

            setFooditem(items.filter((value) => {
                return (value.name.toLowerCase().indexOf(categoryfilt.slice(6).toLowerCase()) != -1 || value.category.toLowerCase().indexOf(categoryfilt.slice(6).toLowerCase()) != -1)
            }))

        }
        else if (categoryarray.includes(categoryfilt)) {
            setFooditem(items.filter((value) => {
                return value.category == categoryfilt
            }))
        }


    }, [categoryfilt])




    const location = useLocation();

    useEffect(() => {
        if (location.state?.runFunc) {
            categoryfromhome();
        }
    }, [location.state]);

    function categoryfromhome() {
        setFooditem(items.filter((value) => {
            return value.category == categoryfilt
        }))
    }






    return <>
        <div style={{ height: '60px', backgroundColor: '#FF6F61' }}>
            navbar        MealWay                  Cart {cartitems.length} Signin
        </div><br />
        <h4 style={{ paddingLeft: '50px' }}>Whats on your mind</h4>
        <div style={{ height: '170px', display: "flex", justifyContent: 'center', alignItems: "center", overflow: "hidden", width: "100%" }}>
            <button onMouseMove={() => { move("left") }}>{'<'}</button>

            <div style={{ height: '170px', overflow: "hidden", alignItems: "center", width: `${visibleItems * itemWidth}px` }}>

                <div style={{ display: "flex" }}>
                    <div style={{ height: '170px', display: 'flex', alignItems: "center", padding: '10px', gap: '20px', transform: `translateX(-${position * itemWidth}px)`, transition: "transform 0.5s ease" }}>
                        {
                            category.map((ct) => {
                                return <Foodfiltbtn category={ct} />
                            })
                        }
                    </div>

                </div>
            </div>
            <button onMouseMove={() => { move("right") }}>{'>'}</button>
        </div>
        <div style={{ display: 'flex', gap: '50px', height: '60px', backgroundColor: '#FF6F61', justifyContent: 'center', alignItems: 'center' }}>
            <NavDropdown title="Sort" id="navbarScrollingDropdown2" style={{ backgroundColor: 'white', padding: '7px', borderRadius: '5px' }}>
                <NavDropdown.Item onClick={() => dispatch(categoryclicked("LtoHPrice"))}>Low to High Price</NavDropdown.Item>
                <NavDropdown.Item onClick={() => dispatch(categoryclicked("HtoLPrice"))}>High to Low Price</NavDropdown.Item>
                <NavDropdown.Item onClick={() => dispatch(categoryclicked("LtoHRattings"))}>Low to High Ratings</NavDropdown.Item>
                <NavDropdown.Item onClick={() => dispatch(categoryclicked("HtoLRattings"))}>High to Low Ratings</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Filter" id="navbarScrollingDropdown3" style={{ backgroundColor: 'white', padding: '7px', borderRadius: '5px' }}>
                <NavDropdown.Item onClick={() => dispatch(categoryclicked("Below Rs.50"))}>Below Rs.50</NavDropdown.Item>
                <NavDropdown.Item onClick={() => dispatch(categoryclicked("Rs.50-Rs.100"))}>Rs.50-Rs.100</NavDropdown.Item>
                <NavDropdown.Item onClick={() => dispatch(categoryclicked("Rs.100-Rs.200"))}>Rs.100-Rs.200</NavDropdown.Item>
                <NavDropdown.Item onClick={() => dispatch(categoryclicked("Rs.200-Rs.400"))}>Rs.200-Rs.400</NavDropdown.Item>
            </NavDropdown>

            <Button variant="light" onClick={() => dispatch(categoryclicked("Rattings 4.0+"))}>Rattings 4.0+</Button>
            <Button variant="light" onClick={() => dispatch(categoryclicked("Rs.400+"))}>Rs.400+</Button>
            <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    id="searchfield"
                />
                <Button variant="outline-success" onClick={() => { dispatch(categoryclicked(`Search${searchfield.value}`)); searchfield.value = "" }}>Search</Button>
            </Form>

        </div>
        <div style={{ marginTop: '50px', margin: '5px' }}>
            <FavorateFoodlist food={fooditem} />

        </div>





    </>
}

export default Menue
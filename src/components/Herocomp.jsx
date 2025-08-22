import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import { useState } from "react";

const categories = [

  "Pizza",
  "Burger",
  "Chinese",
  "Desserts",
  "Drinks",
  "South Indian",
  "North Indian",
  "Parotta",
  "Healthy",
  "Snacks",
];

export default function HeroComp() {
  const [ishovereddeli, setIshovereddeli] = useState(false)
  const [ishovereddine, setIshovereddine] = useState(false)
  return (
    <>

      <div style={{ display: 'flex', width: 'auto', backgroundColor: '#FF6F61' }}>
        <img style={{ width: '16%' }} src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="" />
        <div style={{ width: '68%' }}>

          <div><h1 style={{ textAlign: 'center', color: 'white', fontFamily: 'Baloo 2' }}>Discover delicious meals & exciting offers <br /> with Mealway</h1></div>
          <br /><br />
          <div style={{ display: 'flex', width: '100%', justifyContent: 'center', gap: '10px' }}>
            <Dropdown >
              <Dropdown.Toggle variant="light" id="dropdown-basic" style={{ height: '55px', borderRadius: '20px' }}>
                <i></i>
                <input style={{ border: 'none', backgroundColor: 'transparent' }} type="text" placeholder="Delivery Location" />
              </Dropdown.Toggle>

              <Dropdown.Menu className="w-100" >
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <InputGroup className="mb-3" style={{ width: '50%' }}>
              <Form.Control
                placeholder="Search your favorate Food here"
                aria-label="Search your favorate Food here"
                aria-describedby="basic-addon2"
                style={{ height: '55px', padding: '20px', border: 'none', borderStartStartRadius: '20px', borderEndStartRadius: '20px' }}
              />
              <Button variant="light" id="button-addon2" style={{ borderStartEndRadius: '20px', borderEndEndRadius: '20px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M782-82 523-341q-29 20-67.5 32T372-297q-118 0-200.5-82.5T89-580q0-118 82.5-200.5T372-863q118 0 200.5 82.5T655-580q0 46-12 83.5T611-431l260 261-89 88ZM372-423q66 0 111.5-45.5T529-580q0-66-45.5-111.5T372-737q-66 0-111.5 45.5T215-580q0 66 45.5 111.5T372-423Z" /></svg>
              </Button>
            </InputGroup>
          </div>
          <div style={{width:'100%', display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <div>
              <img onMouseEnter={()=>{setIshovereddeli(true)}} onMouseLeave={()=>{setIshovereddeli(false)}} style={{width:'100%',transition: "transform 0.3s ease",transform: ishovereddeli ? "scale(1.2)":"scale(1)"}} src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/faa6d07d-e43c-4aa1-90d8-eda6c14e467d_Food2BU.png" alt="" />
            </div>
            <div>
              <img onMouseEnter={()=>{setIshovereddine(true)}} onMouseLeave={()=>{setIshovereddine(false)}} style={{width:'100%',transition: "transform 0.3s ease",transform: ishovereddine ? "scale(1.2)":"scale(1)"}} src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/8fa21ee7-affd-43a4-b14d-978c9b372159_DO2BU.png" alt="" />
            </div>

          </div>


        </div>
        <img style={{ width: '16%' }} src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="" />
      </div>
      <div style={{backgroundColor:'#FF6F61',height:'80px'}}></div>




    </>
  );
}
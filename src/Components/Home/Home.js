import React, { useEffect, useState } from 'react';
import carData from '../../data/data.json';
import {Card} from "react-bootstrap";
import CSS from './Home.css';
import { useHistory } from 'react-router-dom';



const Home = () => {

    const [carId , setCarID] = useState([])
    const history = useHistory()

    const handleClick =(carId)=>{
       
        history.push(`/destination/${carId}`);
       
    }



    const [cars , setCar] = useState([])
    useEffect(()=>{
        setCar(carData);
        
    },[])
    return (

        <div className="homeArea">
            {
                <div>
                     <h1 className="intro">Xber Ride</h1>

                    {cars.map(car=> 

                       
                       <div className="center">
                           
                            <Card onClick={()=>handleClick(car.key)} className="cardArea" style={{ width: '12rem', hight:'8rem' }}>
                            <Card.Img variant="top" style={{width:'80%',  margin:'0 , auto'}} src={car.img} />
                            <Card.Body>
                            <Card.Title>{car.type}</Card.Title>
                            </Card.Body>
                            </Card>
                       </div>

                    


                    


                    )}

                </div>
            }
            
        </div>
    );
};

export default Home;
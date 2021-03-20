import React, { useState } from 'react';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import location from '../../data/location.json'
import css from './Destination.css';
import { GoogleMap, LoadScript } from '@react-google-maps/api';


// code for map

const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};





const Destination = () => {

    //const [car , setCar] = useState()


    //Use params doesn't work!!

    const { carId } = useParams();
    const [car, setCar] = useState();

    const [show , setShow] = useState(false)







    console.log(carId);


    const product = location.find(pd => pd.key === carId)
    console.log(product);

    const clickHandeler = () => {

        var isClicked = false;

    }


    







    return (
        <div>




            <div className='searchArea'>
                <div>
                    <h4>Pick From</h4>
                    <input name ="from" type="text" />
                    <h4>Pick to</h4>
                    <input name="to" type="text" />
                    <br />
                    
                </div>
                
                <button onClick={()=>setShow(true)} >Search</button>

            </div>







           {
               show ? 
               
               <div className='resultArea'>


               <div className="carCard">
                   <p>{product.name}</p>
                   <img src={product.img} alt="" />
                   <span>{product.rent}</span>

               </div>

               <div className="carCard">
                   <p>{product.name}</p>
                   <img src={product.img} alt="" />
                   <span>{product.rent}</span>

               </div>

               <div className="carCard">
                   <p>{product.name}</p>
                   <img src={product.img} alt="" />
                   <span>{product.rent}</span>

               </div>



           </div> : null



           }


            <LoadScript
                googleMapsApiKey="https://maps.googleapis.com/maps/api/js?key=&callback=initMap"
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                >
                    { /* Child components, such as markers, info windows, etc. */}
                    <></>
                </GoogleMap>
            </LoadScript>

        </div>


    );
};

export default Destination;
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

    const [show1 , setShow1]= useState(true)
    const [hide , setHide] = useState(false)







    console.log(carId);


    const product = location.find(pd => pd.key === carId)
    console.log(product);

    const clickHandeler = () => {

        var isClicked = false;

    }

    const [data , setData] = useState(null);
    const [data1 , setData1] = useState(null);

    
 const getData=(e)=>{
     setData(e.target.value)
     console.warn(e.target.value)
 }

 const getData1=(e)=>{
    setData1(e.target.value)
    console.warn(e.target.value)
}


    







    return (
        <div>




                <div className='searchArea'>
                        <div className="pickFromCard">
                            <h4>Pick From</h4> 

                             <input name ="from" type="text" onChange={getData} /> 
                            
                            

                            <h4>Pick to</h4>

                            <input name="to" type="text" onChange={getData1} />

                            <br />

                            <div> <h3>Form: {data}</h3> </div>
                            <div> <h3>To: {data1}</h3> </div>
                            
                       
                        
                        <button className="eventBtn" onClick={()=>setShow(true)} >Search</button>

                        </div>

                    







                {
                    show ? 
                    
                    <div className='resultArea'>


                    <div className="carCard">
                        <span>{product.name}</span>
                        <img src={product.img} alt="" />
                        <span>{product.rent}</span>

                    </div>

                    <div className="carCard">
                        <span>{product.name}</span>
                        <img src={product.img} alt="" />
                        <span>{product.rent}</span>

                    </div>

                    <div className="carCard">
                        <span>{product.name}</span>
                        <img src={product.img} alt="" />
                        <span>{product.rent}</span>

                    </div>



                </div> : null





                }

            </div>


        <div className="mapArea">
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


    </div>


    );
};

export default Destination;
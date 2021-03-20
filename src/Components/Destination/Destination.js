import React, { useState } from 'react';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import location from '../../data/location.json'
import css from './Destination.css';



const Destination = () => {

    //const [car , setCar] = useState()


    //Use params doesn't work!!

    const {carId} = useParams();
    const [car , setCar] = useState();

     



    

    console.log(carId);


    const product = location.find(pd => pd.key === carId)
    console.log(product);

    const clickHandeler=()=>{
        
        var isClicked = false ;

    }

    


    

    
    return (
        <div>

            


            <div className='searchArea'>
                <div>
                <h4>Pick From</h4>
                <input value="" type="text"/>
                <h4>Pick to</h4>
                <input value="" type="text"/>
                <br/>
                <button onClick={clickHandeler} >Search</button>
                </div>
            </div>



            

            
           
            <div className='resultArea'>

                    
            <div className="carCard">
                <p>{product.name}</p>
                <img src={product.img} alt=""/>
                <span>{product.rent}</span>

            </div>

            <div className="carCard">
                <p>{product.name}</p>
                <img src={product.img} alt=""/>
                <span>{product.rent}</span>

            </div>

            <div className="carCard">
                <p>{product.name}</p>
                <img src={product.img} alt=""/>
                <span>{product.rent}</span>

            </div>  
                        
                            
   
               
                

            </div>

        </div>

           
    );
};

export default Destination;
import React from "react"; 
import Link from "react-dom";
import ProductInfo from "./Product";


export default function ProductTemplate() { 
    return( 
      
        <div className="card" style={{width: 18 + 'rem'}}>
            <img src="/Images/cleo.jpg" className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">Cleo plant </h5>
                    <p className="card-text">Gracisös och lättskött planta</p>
                    <p className="card-text">Price: 100kr</p>
                    <button type="button" className="btn btn-secondary btn-sm">Läs mer</button>
                </div>
        </div>
            
    )
}
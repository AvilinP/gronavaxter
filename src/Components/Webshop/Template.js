import React from "react"; 
import {Link} from "react-router-dom";
import Footer from "../Partials/Footer";


function ProductTemplate() { 
    return( 
      <>
        <div className="d-flex flex-column align-items-center pb-5">
            <h3 className="p-3">Alla produkter</h3>
            <div className="container">
                <div className="row justify-content-center">

                <div className="col-6 m-3" style={{width: "18rem"}}>
                    <img src="/Images/produkt0.jpeg" className="card-img-top"/>
                        <div className="card-body border">
                            <h5 className="card-title">FICUS AUDREY</h5>
                            <p className="card-text">Graciös och lättskött planta</p>
                            <p className="card-text">Price: 100kr</p>
                            <div className=" d-flex flex-column align-items-center">
                                <Link to="/product">
                                    <button type="button" className="bg-menu border-0 p-2">Läs mer</button>
                                </Link>
                            </div>
                        </div>
                </div>

                <div className="col-6 m-3" style={{width: "18rem"}}>
                    <img src="/Images/produkt1.jpeg" className="card-img-top"/>
                        <div className="card-body border">
                            <h5 className="card-title">DIMORPHUM</h5>
                            <p className="card-text">Graciös och lättskött planta</p>
                            <p className="card-text">Price: 100kr</p>
                            <div className=" d-flex flex-column align-items-center">
                                <Link to="/product">
                                    <button type="button" className="bg-menu border-0 p-2">Läs mer</button>
                                </Link>
                            </div>
                        </div>
                </div>

                <div className="col-6 m-3" style={{width: "18rem"}}>
                    <img src="/Images/produkt2.jpeg" className="card-img-top"/>
                        <div className="card-body border">
                            <h5 className="card-title">ASPLENIUM</h5>
                            <p className="card-text">Graciös och lättskött planta</p>
                            <p className="card-text">Price: 100kr</p>
                              <div className=" d-flex flex-column align-items-center">
                                <Link to="/product">
                                    <button type="button" className="bg-menu border-0 p-2">Läs mer</button>
                                </Link>
                            </div>
                        </div>
                </div>

                <div className="col-6 m-3" style={{width: "18rem"}}>
                    <img src="/Images/produkt3.jpeg" className="card-img-top"/>
                        <div className="card-body border">
                            <h5 className="card-title">MONSTERA ADANSONII</h5>
                            <p className="card-text">Graciös och lättskött planta</p>
                            <p className="card-text">Price: 100kr</p>
                              <div className=" d-flex flex-column align-items-center">
                                <Link to="/product">
                                    <button type="button" className="bg-menu border-0 p-2">Läs mer</button>
                                </Link>
                            </div>
                        </div>
                </div>

                <div className="col-6 m-3" style={{width: "18rem"}}>
                    <img src="/Images/produkt4.jpeg" className="card-img-top"/>
                        <div className="card-body border">
                            <h5 className="card-title">FICUS ELASTICA</h5>
                            <p className="card-text">Graciös och lättskött planta</p>
                            <p className="card-text">Price: 100kr</p>
                              <div className=" d-flex flex-column align-items-center">
                                <Link to="/product">
                                    <button type="button" className="bg-menu border-0 p-2">Läs mer</button>
                                </Link>
                            </div>
                        </div>
                </div>

                <div className="col-6 m-3" style={{width: "18rem"}}>
                    <img src="/Images/produkt5.jpeg" className="card-img-top"/>
                        <div className="card-body border">
                            <h5 className="card-title">FORELLBEGONIA</h5>
                            <p className="card-text">Graciös och lättskött planta</p>
                            <p className="card-text">Price: 100kr</p>
                              <div className=" d-flex flex-column align-items-center">
                                <Link to="/product">
                                    <button type="button" className="bg-menu border-0 p-2">Läs mer</button>
                                </Link>
                            </div>
                        </div>
                </div>

                <div className="col-6 m-3" style={{width: "18rem"}}>
                    <img src="/Images/produkt6.jpeg" className="card-img-top"/>
                        <div className="card-body border">
                            <h5 className="card-title">ADANSONII</h5>
                            <p className="card-text">Graciös och lättskött planta</p>
                            <p className="card-text">Price: 100kr</p>
                              <div className=" d-flex flex-column align-items-center">
                                <Link to="/product">
                                    <button type="button" className="bg-menu border-0 p-2">Läs mer</button>
                                </Link>
                            </div>
                        </div>
                </div>

                <div className="col-6 m-3" style={{width: "18rem"}}>
                    <img src="/Images/produkt7.jpeg" className="card-img-top"/>
                        <div className="card-body border">
                            <h5 className="card-title">ELASTICA</h5>
                            <p className="card-text">Graciös och lättskött planta</p>
                            <p className="card-text">Price: 100kr</p>
                              <div className=" d-flex flex-column align-items-center">
                                <Link to="/product">
                                    <button type="button" className="bg-menu border-0 p-2">Läs mer</button>
                                </Link>
                            </div>
                        </div>
                </div>

                </div>
            </div>
        </div>

        <Footer /> 
    </>
            
    )
}
export default ProductTemplate
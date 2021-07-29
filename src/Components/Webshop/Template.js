import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Partials/Footer";
import Chatbot from "react-chatbot-kit";
import ActionProvider from "../../Chatbot/ActionProvider";
import MessageParser from "../../Chatbot/MessageParser";
import config from "../../Chatbot/config";



function ProductTemplate() {

    const [isOpen, setIsOpen] = useState(false)


    return (
        <>
            <div>
                <div className="sm-container fixed-bottom" style={{marginBottom: '3rem'}}>
                
                    <button className="fixed-bottom mb-3 rounded-circle btn btn-lg btn-primary m-3" style={{maxWidth: '3.2rem'}} type="button" onClick={() => setIsOpen(!isOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-quote" viewBox="0 0 16 16">
                        <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                        <path d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z"/>
                        </svg>
                    </button>

                    {isOpen &&
                        <Chatbot
                            config={config}
                            actionProvider={ActionProvider}
                            messageParser={MessageParser}/>
                    }

                </div>
            </div>

            <div className="d-flex flex-column align-items-center pb-5">
                <h3 className="p-3">Alla produkter</h3>
                <div className="container">
                    <div className="row justify-content-center">

                        <div className="col-6 m-3" style={{ width: "18rem" }}>
                            <img src="/Images/produkt0.jpeg" className="card-img-top" alt="Bild på en växt i kruka" />
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

                        <div className="col-6 m-3" style={{ width: "18rem" }}>
                            <img src="/Images/produkt1.jpeg" className="card-img-top" alt="Bild på en växt i kruka" />
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

                        <div className="col-6 m-3" style={{ width: "18rem" }}>
                            <img src="/Images/produkt2.jpeg" className="card-img-top" alt="Bild på en växt i kruka" />
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

                        <div className="col-6 m-3" style={{ width: "18rem" }}>
                            <img src="/Images/produkt3.jpeg" className="card-img-top" alt="Bild på en växt i kruka" />
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

                        <div className="col-6 m-3" style={{ width: "18rem" }}>
                            <img src="/Images/produkt4.jpeg" className="card-img-top" alt="Bild på en växt i kruka" />
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

                        <div className="col-6 m-3" style={{ width: "18rem" }}>
                            <img src="/Images/produkt5.jpeg" className="card-img-top" alt="Bild på en växt i kruka" />
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

                        <div className="col-6 m-3" style={{ width: "18rem" }}>
                            <img src="/Images/produkt6.jpeg" className="card-img-top" alt="Bild på en växt i kruka" />
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

                        <div className="col-6 m-3" style={{ width: "18rem" }}>
                            <img src="/Images/produkt7.jpeg" className="card-img-top" alt="Bild på en växt i kruka" />
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
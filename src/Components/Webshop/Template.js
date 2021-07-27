import React, {useState} from "react"; 
import {Link} from "react-router-dom";
import Footer from "../Partials/Footer";
import Chatbot from "react-chatbot-kit";
import ActionProvider from "../../Chatbot/ActionProvider";
import MessageParser from "../../Chatbot/MessageParser";
import config from "../../Chatbot/config"; 



function ProductTemplate() { 

    const [isOpen, setIsOpen] = useState(false)


    return( 
      <>
      <div>
          <div>
          
          <button className="app-chatbot-button" type="button" onClick={() => setIsOpen(!isOpen)}>
          <svg viewBox="0 0 640 512">
              <path d="M192,408h64V360H192ZM576,192H544a95.99975,95.99975,0,0,0-96-96H344V24a24,24,0,0,0-48,0V96H192a95.99975,95.99975,0,0,0-96,96H64a47.99987,47.99987,0,0,0-48,48V368a47.99987,47.99987,0,0,0,48,48H96a95.99975,95.99975,0,0,0,96,96H448a95.99975,95.99975,0,0,0,96-96h32a47.99987,47.99987,0,0,0,48-48V240A47.99987,47.99987,0,0,0,576,192ZM96,368H64V240H96Zm400,48a48.14061,48.14061,0,0,1-48,48H192a48.14061,48.14061,0,0,1-48-48V192a47.99987,47.99987,0,0,1,48-48H448a47.99987,47.99987,0,0,1,48,48Zm80-48H544V240h32ZM240,208a48,48,0,1,0,48,48A47.99612,47.99612,0,0,0,240,208Zm160,0a48,48,0,1,0,48,48A47.99612,47.99612,0,0,0,400,208ZM384,408h64V360H384Zm-96,0h64V360H288Z"></path></svg>
              
                Testa mig!</button>

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

                <div className="col-6 m-3" style={{width: "18rem"}}>
                    <img src="/Images/produkt0.jpeg" className="card-img-top" alt="Bild på en växt i kruka"/>
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
                    <img src="/Images/produkt1.jpeg" className="card-img-top" alt="Bild på en växt i kruka"/>
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
                    <img src="/Images/produkt2.jpeg" className="card-img-top" alt="Bild på en växt i kruka"/>
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
                    <img src="/Images/produkt3.jpeg" className="card-img-top" alt="Bild på en växt i kruka"/>
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
                    <img src="/Images/produkt4.jpeg" className="card-img-top" alt="Bild på en växt i kruka"/>
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
                    <img src="/Images/produkt5.jpeg" className="card-img-top" alt="Bild på en växt i kruka"/>
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
                    <img src="/Images/produkt6.jpeg" className="card-img-top" alt="Bild på en växt i kruka"/>
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
                    <img src="/Images/produkt7.jpeg" className="card-img-top" alt="Bild på en växt i kruka"/>
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
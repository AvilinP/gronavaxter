import React, {useState} from "react";
import Footer from "../Partials/Footer";
import Chatbot from "react-chatbot-kit";
import ActionProvider from "../../Chatbot/ActionProvider";
import MessageParser from "../../Chatbot/MessageParser";
import config from "../../Chatbot/config";
import { Link } from "react-router-dom"; 


 



function Homepage() {

    const [isOpenChat, setIsOpenChat] = useState(false);


    return (
        <>

            <div>
                <div className="sm-container fixed-bottom" style={{ marginBottom: '3rem' }}>

                    <button className="fixed-bottom mb-3 rounded-circle btn btn-lg btn-primary m-3" style={{maxWidth: '3.2rem'}} type="button" onClick={() => setIsOpenChat(!isOpenChat)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-quote" viewBox="0 0 16 16">
                            <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                            <path d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z" />
                        </svg>
                    </button>

                    {isOpenChat &&
                        <Chatbot
                            config={config}
                            actionProvider={ActionProvider}
                            messageParser={MessageParser} />
                    }

                </div>
            </div>

            <div className="card text-white">
                <div className="hero-img"> </div>
                <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center">
                    <h2 className="hero-text lg-m-3">GR??NA V??XTER SER <br /> TILL S?? ALLA F??R  <br /> GR??NA FINGRAR. </h2>
                    <Link to="./products">
                        <button className=" btn-color">K??P NU</button>
                    </Link>
                </div>
            </div>

            <div className="container p-4">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-sm-6">
                        <img src="/Images/v??nsterbild_start.jpg" alt="bild" className="img-fluid" />
                    </div>
                    <div className="col-sm-6 pt-4 info-text-start"><h3>Vi erbjuder f??rg till tr??dg??rden och inne. S?? du och dina v??xter alltid har det allra b??sta.</h3></div>
                </div>


                <div className="row info-row-start d-flex justify-content-center align-items-center">
                    <div className="col-sm-6"><h3 className="pt-4 info-text-start">V??ra v??xer kommer med n??ring och v??gledning hur du ska ta hand om dom. Bra va?</h3></div>
                    <div className="col-sm-6">
                        <img src="/Images/h??gerbild_start.jpg" alt="bild" className="img-fluid pt-4"/>
                    </div>
                </div>
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center p-3">
                <h1 className="pb-3 pt-3 info-text-start text-center">TR??DG??RDS- & LANDSKAPSDESIGN</h1>


                <div className="card mb-3" style={{ maxWidth: "auto" }}>
                    <div className="row g-0 m-0">
                        <div className="col-md-7">
                            <img src="/Images/landskapsdesign_start.jpg" className="img-fluid" alt="..." />
                        </div>
                        <div className="col-md-5 bg-landscaping">
                            <div className="card-body ">
                                <h5 className="card-title info-text-start">Planera tr??dg??rd - boka hembes??k</h5>
                                <p className="card-text info-text-start"> Skapat otaliga Pinterest-boards men vet inte var du ska b??rja f??r att skapa din dr??mtr??dg??rd? Misstr??sta inte, vi finns h??r f??r att hj??lpa dig!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center p-5">
                <h1 className="pb-3 info-text-start text-center">VAD KAN VI HJ??LPA DIG MED?</h1>
                <p className="info-text-start text-center text-justify"> ??r du p?? jakt efter livets finaste kruka eller f??rs??ker du r??dda en d??ende v??xt? <br/> Vilket som finns vi alltid p?? plats f??r dina fr??gor om blommor och v??xter! </p>

                <div className="d-flex flex-lg-row flex-column">

                    <div className="card m-2" style={{ width: "18rem" }}>
                        <img src="/Images/blommor_ute.jpeg" className="card-img-top" alt="Blommor ute" />
                        <div className="card-body d-flex flex-column justify-content align-items-center">
                            <h5 className="card-title text-center info-text-start">Blommor ute</h5>
                            <p className="card-text text-center info-text-start">S??tt f??rg p?? tr??dg??rden med vackra blommor.</p>
                        </div>
                    </div>

                    <div className="card m-2" style={{ width: "18rem" }}>
                        <img src="/Images/blomjord.jpeg" className="card-img-top" alt="G??dsel och n??ring" />
                        <div className="card-body d-flex flex-column justify-content align-items-center">
                            <h5 className="card-title text-center info-text-start">G??dsel och n??ring</h5>
                            <p className="card-text text-center info-text-start">Ge dina v??xter g??dsel och n??ring i ??r.</p>
                        </div>
                    </div>

                    <div className="card m-2" style={{ width: "18rem" }}>
                        <img src="/Images/blomkruka.jpeg" className="card-img-top" alt="Krukor" />
                        <div className="card-body d-flex flex-column justify-content align-items-center">
                            <h5 className="card-title text-center info-text-start">Krukor</h5>
                            <p className="card-text text-center info-text-start">Botanisera bland s??songens nya krukor!</p>
                        </div>
                    </div>

                </div>


                <div className="d-flex flex-column justify-content-center align-items-center p-lg-5">
                    <h1 className="pb-3 pt-5 info-text-start">@GRONAV??XTER</h1>

                    <div className="container">
                        <div className="row mb-4">
                            <div className="col">
                            <img src="/Images/instagram_start_1.png" className="card-img-top" alt="Bild fr??n Instagram" />
                            </div>

                            <div className="col">
                            <img src="/Images/instagram_start_2.png" className="card-img-top" alt="Bild fr??n Instagram" />
                            </div>
                            
                        </div>

                        <div className="row">
                            <div className="col">
                            <img src="/Images/instagram_start_3.png" className="card-img-top" alt="Bild fr??n Instagram" />                            </div>
                            <div className="col">
                            <img src="/Images/instagram_start_4.png" className="card-img-top" alt="Bild fr??n Instagram" />
                            </div>
                            
                        </div>
                    </div>

                </div>
            </div>
            

            <Footer />

        </>
    )
}

export default Homepage

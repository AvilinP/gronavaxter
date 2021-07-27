import React from "react";
import Footer from "../Partials/Footer";
 



function Homepage() {


    return (
        <>

            <div className="card text-white">
                <div className="hero-img"> </div>
                <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center">
                    <h2 className="hero-text lg-m-3">GRÖNA VÄXTER SER <br /> TILL SÅ ALLA FÅR  <br /> GRÖNA FINGRAR. </h2>
                    <button className=" btn-color">KÖP NU</button>
                </div>
            </div>

            <div className="container p-4">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-sm-6">
                        <img src="/Images/vänsterbild_start.jpg" alt="bild" className="img-fluid" />
                    </div>
                    <div className="col-sm-6 pt-4 info_text_start"><h3>Vi erbjuder färg till trädgården och inne. Så du och dina växter alltid har det allra bästa.</h3></div>
                </div>


                <div className="row info-row-start d-flex justify-content-center align-items-center">
                    <div className="col-sm-6"><h3 className="pt-4 info_text_start">Våra växer kommer med näring och vägledning hur du ska ta hand om dom. Bra va?</h3></div>
                    <div className="col-sm-6">
                        <img src="/Images/högerbild_start.jpg" alt="bild" className="img-fluid pt-4"/>
                    </div>
                </div>
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center p-3">
                <h1 className="pb-3 pt-3 info_text_start text-center">TRÄDGÅRDS- & LANDSKAPSDESIGN</h1>


                <div className="card mb-3" style={{ maxWidth: "auto" }}>
                    <div className="row g-0 m-0">
                        <div className="col-md-7">
                            <img src="/Images/landskapsdesign_start.jpg" className="img-fluid" alt="..." />
                        </div>
                        <div className="col-md-5 bg-landscaping">
                            <div className="card-body ">
                                <h5 className="card-title info_text_start">Planera trädgård - boka hembesök</h5>
                                <p className="card-text info_text_start"> Skapat otaliga Pinterest-boards men vet inte var du ska börja för att skapa din drömträdgård? Misströsta inte, vi finns här för att hjälpa dig!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center p-5">
                <h1 className="pb-3 info_text_start text-center">VAD KAN VI HJÄLPA DIG MED?</h1>
                <p className="info_text_start text-center text-justify"> Är du på jakt efter livets finaste kruka eller försöker du rädda en döende växt? <br/> Vilket som finns vi alltid på plats för dina frågor om blommor och växter! </p>

                <div className="d-flex flex-lg-row flex-column">

                    <div className="card m-2" style={{ width: "18rem" }}>
                        <img src="/Images/blommor_ute.jpeg" className="card-img-top" alt="Blommor ute" />
                        <div className="card-body d-flex flex-column justify-content align-items-center">
                            <h5 className="card-title text-center info_text_start">Blommor ute</h5>
                            <p className="card-text text-center info_text_start">Sätt färg på trädgården med vackra blommor.</p>
                        </div>
                    </div>

                    <div className="card m-2" style={{ width: "18rem" }}>
                        <img src="/Images/blomjord.jpeg" className="card-img-top" alt="Gödsel och näring" />
                        <div className="card-body d-flex flex-column justify-content align-items-center">
                            <h5 className="card-title text-center info_text_start">Gödsel och näring</h5>
                            <p className="card-text text-center info_text_start">Ge dina växter gödsel och näring i år.</p>
                        </div>
                    </div>

                    <div className="card m-2" style={{ width: "18rem" }}>
                        <img src="/Images/blomkruka.jpeg" className="card-img-top" alt="Krukor" />
                        <div className="card-body d-flex flex-column justify-content align-items-center">
                            <h5 className="card-title text-center info_text_start">Krukor</h5>
                            <p className="card-text text-center info_text_start">Botanisera bland säsongens nya krukor!</p>
                        </div>
                    </div>

                </div>


                <div className="d-flex flex-column justify-content-center align-items-center p-lg-5">
                    <h1 className="pb-3 pt-5 info_text_start">@GRONAVÄXTER</h1>

                    <div className="container">
                        <div className="row mb-4">
                            <div className="col">
                            <img src="/Images/instagram_start_1.png" className="card-img-top" alt="Bild från Instagram" />
                            </div>

                            <div className="col">
                            <img src="/Images/instagram_start_2.png" className="card-img-top" alt="Bild från Instagram" />
                            </div>
                            
                        </div>

                        <div className="row">
                            <div className="col">
                            <img src="/Images/instagram_start_3.png" className="card-img-top" alt="Bild från Instagram" />                            </div>
                            <div className="col">
                            <img src="/Images/instagram_start_4.png" className="card-img-top" alt="Bild från Instagram" />
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

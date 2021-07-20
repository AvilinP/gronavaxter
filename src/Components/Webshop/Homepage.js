import React from "react";



function Homepage() {


    return (
        <>

            <div class="card text-white">
                <img src="/Images/startbild.jpg" class="card-img" alt="Bild med gröna växter" />
                <div class="card-img-overlay d-flex flex-column justify-content-center align-items-center">
                    <h2 className="fs-1">GRÖNA VÄXTER SER TILL SÅ ALLA FÅR GRÖNA FINGRAR. </h2>
                    <button className="btn btn-dark">KÖP NU</button>
                </div>
            </div>

            <div className="container p-4">
                <div class="row d-flex justify-content-center align-items-center">
                    <div class="col-6">
                        <img src="/Images/vänsterbild_start.jpg" alt="bild" />
                    </div>
                    <div class="col-6"><h3>Vi erbjuder färg till trädgården och inne. Så du alltid ser cool ut.</h3></div>
                </div>


                <div class="row d-flex justify-content-center align-items-center">
                    <div class="col-6"><h3>Våra växer kommer med näring och vägledning hur du ska ta hand om dom. Bra va?</h3></div>
                    <div class="col-6">
                        <img src="/Images/högerbild_start.jpg" alt="bild" />
                    </div>
                </div>
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center p-5">
                <h1 className="pb-3">TRÄDGÅRDS- & LANDSKAPSDESIGN</h1>
           

            <div class="card mb-3" style={{maxWidth: "auto"}}>
                <div class="row g-0">
                    <div class="col-md-7">
                        <img src="/Images/landskapsdesign_start.jpg" class="img-fluid" alt="..."/>
                        </div>
                        <div class="col-md-5 bg-landscaping">
                            <div class="card-body ">
                                <h5 class="card-title">Planera trädgård - boka hembesök</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

                <div className="d-flex flex-column justify-content-center align-items-center p-5">
                <h1 className="pb-3">VAD KAN VI HJÄLPA DIG MED?</h1>
                </div>

        </>
            )
}

            export default Homepage

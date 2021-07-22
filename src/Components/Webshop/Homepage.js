import React from "react";



function Homepage() {


    return (
        <>

            <div className="card text-white">
                <div className="hero-img"> </div>
                <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center">
                    <h2 className="hero-text">GRÖNA VÄXTER SER <br /> TILL SÅ ALLA FÅR  <br /> GRÖNA FINGRAR. </h2>
                    <button className=" btn-color">KÖP NU</button>
                </div>
            </div>

            <div className="container p-4">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-6">
                        <img src="/Images/vänsterbild_start.jpg" alt="bild" />
                    </div>
                    <div className="col-6"><h3>Vi erbjuder färg till trädgården och inne. Så du alltid ser cool ut.</h3></div>
                </div>


                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-6"><h3>Våra växer kommer med näring och vägledning hur du ska ta hand om dom. Bra va?</h3></div>
                    <div className="col-6">
                        <img src="/Images/högerbild_start.jpg" alt="bild" />
                    </div>
                </div>
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center p-5">
                <h1 className="pb-3">TRÄDGÅRDS- & LANDSKAPSDESIGN</h1>


                <div className="card mb-3" style={{ maxWidth: "auto" }}>
                    <div className="row g-0">
                        <div className="col-md-7">
                            <img src="/Images/landskapsdesign_start.jpg" className="img-fluid" alt="..." />
                        </div>
                        <div className="col-md-5 bg-landscaping">
                            <div className="card-body ">
                                <h5 className="card-title">Planera trädgård - boka hembesök</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center p-5">
                <h1 className="pb-3">VAD KAN VI HJÄLPA DIG MED?</h1>
                <p>We offer highly recommended products that are specially crafted to nourish and moisturize your skin.</p>

                <div className="d-flex flex-row">

                    <div className="card m-2" style={{ width: "18rem" }}>
                        <img src="/Images/landskapsdesign_start.jpg" className="card-img-top" alt="..." />
                        <div className="card-body d-flex flex-column justify-content align-items-center">
                            <h5 className="card-title text-center">Blommor ute</h5>
                            <p className="card-text text-center">Sätt färg på trädgården med vackra blommor</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                    <div className="card m-2" style={{ width: "18rem" }}>
                        <img src="/Images/landskapsdesign_start.jpg" className="card-img-top" alt="..." />
                        <div className="card-body d-flex flex-column justify-content align-items-center">
                            <h5 className="card-title text-center">Blommor ute</h5>
                            <p className="card-text text-center">Sätt färg på trädgården med vackra blommor</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                    <div className="card m-2" style={{ width: "18rem" }}>
                        <img src="/Images/landskapsdesign_start.jpg" className="card-img-top" alt="..." />
                        <div className="card-body d-flex flex-column justify-content align-items-center">
                            <h5 className="card-title text-center">Blommor ute</h5>
                            <p className="card-text text-center">Sätt färg på trädgården med vackra blommor</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Homepage

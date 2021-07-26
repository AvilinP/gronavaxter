import React, {useState} from "react"; 
import { Carousel } from "react-responsive-carousel"; 
import Footer from "../Partials/Footer"; 

function ProductInfo() { 

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false); 

    return(
        <>
        
            <div className="container">
                <div className="d-flex w-50 m-3"> 
                    <Carousel className="">
                            
                            <div>
                                <img src="./Images/produktbild.jpg" className="img-tumbnail img-fluid" alt=""/>
                            </div>
                            <div>
                                <img src="./Images/produktbild.jpg" className="img-tumbnail img-fluid" alt=""/>
                            </div>
                            <div>
                                <img src="./Images/produktbild.jpg" className="img-tumbnail img-fluid" alt=""/>
                            </div>
                            <div>
                                <img src="./Images/produktbild.jpg" className="img-tumbnail img-fluid" alt=""/>
                            </div>
                    </Carousel>

                <div className="container mt-3" style={{minWidth: 75 + '%'}}>
                    <div className="m-3">
                        <h2>PRODUKT</h2>
                        <p>
                            Denna produkt är fantastisk, så fin och så underbar. Se den, testa den, köp den!
                            Denna produkt är fantastisk, så fin och så underbar. Se den, testa den, köp den!
                            Denna produkt är fantastisk, så fin och så underbar. Se den, testa den, köp den!
                        </p>
                        <p>1299 SEK</p>

                        <div className="card-body">
                            <button type="button" className="bg-menu rounded border-0 p-3 w-50 mt-5 ">KÖP</button>    
                          </div>
                        

                            <div className="mt-5">
                                <div className="card">
                                    <div className="card-header" >
                                    <h2 className="mb-0">
                                        <button onClick={() => setIsOpen(!isOpen)} className="btn btn-link text-dark" type="button" >
                                        Skötselråd
                                        </button>
                                    </h2>
                                    </div>

                                    {isOpen && 
                                    <div className="card-body">
                                    För att lyckas med palettblad håller du jorden lätt och jämnt fuktig – den bör inte torka.
                                    Särskilt viktigt är det att hålla jorden fuktig i soligt läge. Häll gärna svag dos flytande näring
                                    i vattnet från vår till höst. Mycket ljus ger vackra färger på bladen.  
                                    </div>
                                    }

                                </div>

                                <div className="card">
                                    <div className="card-header">
                                    <h2 className="mb-0">
                                        <button onClick={() => setIsOpen2(!isOpen2)} className="btn btn-link text-dark" type="button">
                                        Teknisk information
                                        </button>
                                    </h2>
                                    </div>

                                    {isOpen2 && 
                                    <div className="card-body">
                                        Latinskt namn: Rhododendron Koichiro Wada (yakushimanum)<br/>
                                        Typ: Rhododendron<br/>
                                        Storlek: 20-25cm, krukodlad<br/>
                                        Krukstorlek: 15-19cm<br/>
                                        Lövverk färg: grönt<br/>
                                        Blomning färg: rosavit<br/>
                                        Blomningstid: maj/juni<br/>
                                        Växtplats: halvskugga<br/>
                                        Jordmån: surjord<br/>
                                        Zon: 1-4
                                    </div>
                                    }
                                </div> 
                            </div>
                          </div> 
                    </div>
                </div>
            </div>
           


            <div className="d-flex flex-column align-items-center p-5">
                <h3 className="pb-3">RECENSIONER</h3>
                <div className="container">
                    <div className="row justify-content-center">

                        <div className="col-6 bg-menu m-3" style={{ width: "20rem" }}>
                            <div className="d-flex flex-column align-items-center p-3">
                                <img className="rounded-circle w-50" src="./Images/review2.jpg" alt="En bild på lavender"/>
                                <h7 className="text-warning m-3">TIFFANY MALONE</h7>
                            </div>
                            <p className="fw-lighter">Testimonials are short quotes from people who love your brand.
                            It's a great way to convince customers to try your services.
                            </p>
                        </div>
                    
                        <div className="col-6 bg-menu m-3" style={{ width: "20rem" }}>
                            <div className="d-flex flex-column align-items-center p-3">
                                <img className="rounded-circle w-50" src="./Images/review2.jpg" alt="En bild på lavender"/>
                                <h7 className="text-warning m-3">ROSALIE BOONE</h7>
                            </div>
                            <p>Testimonials are short quotes from people who love your brand.
                            It's a great way to convince customers to try your services.
                            </p>
                        </div>

                        <div className="col-6 bg-menu m-3" style={{ width: "20rem" }}>
                            <div className="d-flex flex-column align-items-center p-3">
                                <img className="rounded-circle w-50" src="./Images/review2.jpg" alt="En bild på lavender"/>
                                <h7 className="text-warning m-3">GENEVA WATSON</h7>
                            </div>
                            <p>Testimonials are short quotes from people who love your brand.
                                It's a great way to convince customers to try your services.
                            </p>
                        </div>

                        <div className="col-6 bg-menu m-3" style={{ width: "20rem" }}>
                            <div className="d-flex flex-column align-items-center p-3">
                                <img className="rounded-circle w-50" src="./Images/review2.jpg" alt="En bild på lavender"/>
                                <h7 className="text-warning m-3">TIFFANY MALONE</h7>
                            </div>
                            <p>Testimonials are short quotes from people who love your brand.
                                It's a great way to convince customers to try your services.
                            </p>
                        </div>

                        <div className="col-6 bg-menu m-3" style={{ width: "20rem" }}>
                            <div className="d-flex flex-column align-items-center p-3">
                                <img className="rounded-circle w-50" src="./Images/review2.jpg" alt="En bild på lavender"/>
                                <h7 className="text-warning m-3">ROSALIE BOONE</h7>
                            </div>
                            <p>Testimonials are short quotes from people who love your brand.
                                It's a great way to convince customers to try your services.
                            </p>
                        </div>

                        <div className="col-6 bg-menu m-3" style={{ width: "20rem" }}>
                            <div className="d-flex flex-column align-items-center p-3">
                                <img className="rounded-circle w-50" src="./Images/review2.jpg" alt="En bild på lavender"/>
                                <h7 className="text-warning m-3">GENEVA WATSON</h7>
                            </div>
                            <p>Testimonials are short quotes from people who love your brand.
                                It's a great way to convince customers to try your services.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
                    

 
             <div className="d-flex flex-column align-items-center p-5">
                    <h3 className=" ">BILDER FRÅN KÖPARE</h3>
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                                <img className="w-100 shadow-1-strong rounded mb-4" src="./Images/bildkund5.jpg" alt=""/>
                                <img className="w-100 shadow-1-strong rounded mb-4" src="./Images/produkt4.jpeg" alt=""/>  
                            </div>

                            <div className="col-lg-4 mb-4 mb-lg-0">
                                <img className="w-100 shadow-1-strong rounded mb-4" src="./Images/produkt1.jpeg" alt=""/>   
                                <img className="w-100 shadow-1-strong rounded mb-4" src="./Images/bildkund4.jpg" alt=""/>    
                            </div>

                            <div className="col-lg-4 mb-4 mb-lg-0">
                                <img className="w-100 shadow-1-strong rounded mb-4" src="./Images/bildkund8.jpg" alt=""/>
                                <img className="w-100 shadow-1-strong rounded mb-4" src="./Images/produkt7.jpeg" alt=""/>  
                            </div>

                        </div>
                    </div>
            </div> 


             <div className="d-flex flex-column align-items-center p-5">
                <h3>DU KANSKE OCKSÅ TYCKER OM..</h3>
                <div className="container col-9">
                    <div className="row">

                        <div className="col-lg-4 mb-4 mb-lg-0">
                            <img className="card-img-top" src="./Images/gillar1.jpeg" alt="Bild av en växt"/>
                        </div>
                        <div className="col-lg-4 mb-4 mb-lg-0">
                            <img className="card-img-top" src="./Images/gillar2.jpeg" alt="Bild av en växt"/>
                        </div>
                        <div className="col-lg-4 mb-4 mb-lg-0">
                            <img className="card-img-top" src="./Images/gillar3.jpeg" alt="Bild av en växt"/>
                        </div>

                    </div>
                </div>
            </div> 

            <Footer /> 
         
        </>

    )
}
export default ProductInfo
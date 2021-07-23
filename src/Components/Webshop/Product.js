import React, {useState} from "react"; 
import { Carousel } from "react-responsive-carousel"; 

function ProductInfo() { 

    const [isOpen, setIsOpen] = useState(false); 

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
                        

                            <div className="mt-5">
                                <div class="card">
                                    <div class="card-header" >
                                    <h2 class="mb-0">
                                        <button onClick={() => setIsOpen(!isOpen)} class="btn btn-link" type="button" >
                                        Skötselråd
                                        </button>
                                    </h2>
                                    </div>

                                    {isOpen && 
                                    <div class="card-body">
                                    För att lyckas med palettblad håller du jorden lätt och jämnt fuktig – den bör inte torka.
                                    Särskilt viktigt är det att hålla jorden fuktig i soligt läge. Häll gärna svag dos flytande näring
                                    i vattnet från vår till höst. Mycket ljus ger vackra färger på bladen.  
                                    </div>
                                    }

                                </div>

                                <div class="card">
                                    <div class="card-header">
                                    <h2 class="mb-0">
                                        <button onClick={() => setIsOpen(!isOpen)} class="btn btn-link collapsed" type="button">
                                        Teknisk information
                                        </button>
                                    </h2>
                                    </div>

                                    {isOpen && 
                                    <div class="card-body">
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
           


            <div className=" container mt-5 ml-5 ">
                <h3 className="position-absolute top-200 start-50 translate-middle">RECENSIONER</h3>
                <div className="d-flex flex-wrap" style={{height: 100 + 'px'}}>

                    <div className="bg-menu border m-3" style={{width: 25 + '%'}}>
                        <img className="rounded-circle w-25" src="./Images/reviews.jpg" alt=""/>
                        <h7 className="text-warning">TIFFANY MALONE</h7>
                        <p>Testimonials are short quotes from people who love your brand.
                            It's a great way to convince customers to try your services.
                        </p>
                    </div>
                    <div className="bg-menu border m-3" style={{width: 25 + '%'}}>
                        <img className="rounded-circle w-25" src="./Images/reviews.jpg" alt=""/>
                        <h7 className="text-warning">ROSALIE BOONE</h7>
                        <p>Testimonials are short quotes from people who love your brand.
                            It's a great way to convince customers to try your services.
                        </p>
                    </div>
                    <div className="bg-menu border m-3" style={{width: 25 + '%'}}>
                        <img className="rounded-circle w-25" src="./Images/reviews.jpg" alt=""/>
                        <h7 className="text-warning">GENEVA WATSON</h7>
                        <p>Testimonials are short quotes from people who love your brand.
                            It's a great way to convince customers to try your services.
                        </p>
                    </div>
                    <div className="bg-menu border m-3" style={{width: 25 + '%'}}>
                        <img className="rounded-circle w-25" src="./Images/reviews.jpg" alt=""/>
                        <h7 className="text-warning">TIFFANY MALONE</h7>
                        <p>Testimonials are short quotes from people who love your brand.
                            It's a great way to convince customers to try your services.
                        </p>
                    </div>
                    <div className="bg-menu border m-3" style={{width: 25 + '%'}}>
                        <img className="rounded-circle w-25" src="./Images/reviews.jpg" alt=""/>
                        <h7 className="text-warning">ROSALIE BOONE</h7>
                        <p>Testimonials are short quotes from people who love your brand.
                            It's a great way to convince customers to try your services.
                        </p>
                    </div>
                    <div className="bg-menu border m-3" style={{width: 25 + '%'}}>
                        <img className="rounded-circle w-25" src="./Images/reviews.jpg" alt=""/>
                        <h7 className="text-warning">GENEVA WATSON</h7>
                        <p>Testimonials are short quotes from people who love your brand.
                            It's a great way to convince customers to try your services.
                        </p>
                    </div>
                </div>
            </div>


            <div className="container mt-5">
                    <h3 className=" ">BILDER FRÅN KÖPARE</h3>
                    <div className="d-flex flex-wrap">
                        {/* 33.3 % hade de små bilderna behövt vara för att de ska kunna passa till de som är 50%. Kan inte se att man kan ha en sån specifik %?? */}
                        
                            <img className="w-25" src="./Images/bildkund1.jpg" alt=""/>
                        
                        
                            <img className="w-25" src="./Images/bildkund2.jpg" alt=""/>
                        
                        
                            <img className="w-25" src="./Images/bildkund3.jpg" alt=""/>
                        
                        
                            <img className="w-25" src="./Images/bildkund4.jpg" alt=""/>
                        
                        
                            <img className="w-25" src="./Images/bildkund5.jpg" alt=""/>
                        
                    </div>
            </div>
        
        </>

    )
}
export default ProductInfo
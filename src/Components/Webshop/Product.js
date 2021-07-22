import React from "react"; 
import { Carousel } from "react-responsive-carousel"; 

function ProductInfo() { 
    return(
        <>
        
            <div className="container mt-6">
                <div className="d-flex w-50 m-3"> 
                    <Carousel className="">
                        <div className="">
                            <img src="./Images/produktbild.jpg" className="img-tumbnail img-fluid" alt=""/>
                        </div>
                        <div className="">
                            <img src="./Images/produktbild.jpg" className="img-tumbnail img-fluid" alt=""/>
                        </div>
                        <div className="">
                            <img src="./Images/produktbild.jpg" className="img-tumbnail img-fluid" alt=""/>
                        </div>
                        <div className="">
                            <img src="./Images/produktbild.jpg" className="img-tumbnail img-fluid" alt=""/>
                        </div>
                    </Carousel>
                <div className="container">
                    <div className="m-3">
                        <h2>PRODUKT</h2>
                        <p>
                            Denna produkt är fantastisk, så fin och så underbar. Se den, testa den, köp den!
                            Denna produkt är fantastisk, så fin och så underbar. Se den, testa den, köp den!
                            Denna produkt är fantastisk, så fin och så underbar. Se den, testa den, köp den!
                        </p>
                        <p>1299 SEK</p>
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


            <div className="container">
                    <h3 className="position-absolute start-50 translate-middle">BILDER FRÅN KÖPARE</h3>
                    <div className="d-flex flex-wrap">
                        {/* 33.3 % hade de små bilderna behövt vara för att de ska kunna passa till de som är 50%. Kan inte se att man kan ha en sån specifik %?? */}
                        
                            <img className="w-25" src="./Images/bildkund1.jpg" alt=""/>
                        
                        
                            <img className="w-25" src="./Images/bildkund2.jpg" alt=""/>
                        
                        
                            <img className="w-25" src="./Images/bildkund3.jpg" alt=""/>
                        
                        
                            <img className="w-50" src="./Images/bildkund4.jpg" alt=""/>
                        
                        
                            <img className="w-50" src="./Images/bildkund5.jpg" alt=""/>
                        
                    </div>
            </div>
        
        </>

    )
}
export default ProductInfo
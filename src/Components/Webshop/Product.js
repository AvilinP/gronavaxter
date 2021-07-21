import React from "react"; 
import { Carousel } from "react-responsive-carousel"; 

function ProductInfo() { 
    return(
        <>
        <main tabIndex="-1">
            <div className="mt-6">
                <div className="flex border-box align-center wrap"> 
                    <Carousel autoplay>
                        <div>
                            <img src="./Images/produktbild.jpg" className="img-tumbnail img-fluid max-width: 100%; height: auto;" alt=""/>
                        </div>
                        <div>
                            <img src="./Images/cleo.jpg" className="img-tumbnail img-fluid max-width: 100%; height: auto;" alt=""/>
                        </div>
                        <div>
                            <img src="./Images/startbild.jpg" className="img-tumbnail img-fluid max-width: 100%; height: auto;" alt=""/>
                        </div>
                        <div>
                            <img src="./Images/högerbild_start.jpg" className="img-tumbnail img-fluid max-width: 100%; height: auto;" alt=""/>
                        </div>
                    </Carousel>
                </div>
            </div>
            <div>
                <div>
                    <h2>PRODUKT</h2>
                    <p>
                        Denna produkt är fantastisk, så fin och så underbar. Se den, testa den, köp den!
                        Denna produkt är fantastisk, så fin och så underbar. Se den, testa den, köp den!
                        Denna produkt är fantastisk, så fin och så underbar. Se den, testa den, köp den!
                    </p>
                    <p>1299 SEK</p>
                </div>
            </div>

            <div className="mt-5">
                <h3 className="position-absolute top-200 start-50 translate-middle">RECENSIONER</h3>
                <div className="d-flex flex-wrap" style={{height: 100 + 'px'}}>

                    <div className="bg-menu border m-3 h-100" style={{width: 25 + '%'}}>
                        <img className="rounded-circle w-25" src="./Images/reviews.jpg" alt=""/>
                        <h7 className="text-warning">TIFFANY MALONE</h7>
                        <p>Testimonials are short quotes from people who love your brand.
                            It's a great way to convince customers to try your services.
                        </p>
                    </div>
                    <div className="bg-menu border m-3 h-100" style={{width: 25 + '%'}}>
                        <img className="rounded-circle w-25" src="./Images/reviews.jpg" alt=""/>
                        <h7 className="text-warning">ROSALIE BOONE</h7>
                        <p>Testimonials are short quotes from people who love your brand.
                            It's a great way to convince customers to try your services.
                        </p>
                    </div>
                    <div className="bg-menu border m-3 h-100" style={{width: 25 + '%'}}>
                        <img className="rounded-circle w-25" src="./Images/reviews.jpg" alt=""/>
                        <h7 className="text-warning">GENEVA WATSON</h7>
                        <p>Testimonials are short quotes from people who love your brand.
                            It's a great way to convince customers to try your services.
                        </p>
                    </div>
                    <div className="bg-menu border m-3 h-100" style={{width: 25 + '%'}}>
                        <img className="rounded-circle w-25" src="./Images/reviews.jpg" alt=""/>
                        <h7 className="text-warning">TIFFANY MALONE</h7>
                        <p>Testimonials are short quotes from people who love your brand.
                            It's a great way to convince customers to try your services.
                        </p>
                    </div>
                    <div className="bg-menu border m-3 h-100" style={{width: 25 + '%'}}>
                        <img className="rounded-circle w-25" src="./Images/reviews.jpg" alt=""/>
                        <h7 className="text-warning">ROSALIE BOONE</h7>
                        <p>Testimonials are short quotes from people who love your brand.
                            It's a great way to convince customers to try your services.
                        </p>
                    </div>
                    <div className="bg-menu border m-3 h-100" style={{width: 25 + '%'}}>
                        <img className="rounded-circle w-25" src="./Images/reviews.jpg" alt=""/>
                        <h7 className="text-warning">GENEVA WATSON</h7>
                        <p>Testimonials are short quotes from people who love your brand.
                            It's a great way to convince customers to try your services.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <section className="position-absolute top-500 start-50 translate-middle">
                    <h3 className="mt-5">BILDER FRÅN KÖPARE</h3>
                </section>
            </div>
        </main>
        </>

    )
}
export default ProductInfo
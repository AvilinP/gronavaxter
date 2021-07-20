import React from "react"; 
import { Carousel } from "react-responsive-carousel"; 

function ProductInfo() { 
    return(
        <main>
            <div className="mt-6">
                <div className="flex border-box align-center wrap"> 
                    <Carousel autoplay>
                        <div>
                            <img src="./Images/produktbild.jpg" className="img-tumbnail img-fluid max-width: 100%; height: auto;"/>
                        </div>
                        <div>
                            <img src="./Images/cleo.jpg" className="img-tumbnail img-fluid max-width: 100%; height: auto;"/>
                        </div>
                        <div>
                            <img src="./Images/startbild.jpg" className="img-tumbnail img-fluid max-width: 100%; height: auto;"/>
                        </div>
                        <div>
                            <img src="./Images/högerbild_start.jpg" className="img-tumbnail img-fluid max-width: 100%; height: auto;"/>
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
        </main>

    )
}
export default ProductInfo
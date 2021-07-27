import React from "react";

function Footer() {
    return (
        <>

            <div className="card">
               
                <div className="row footer-row g-0">
                    <div className="col">
                        <img src="/Images/footer.jpg" className="img-fluid" alt="Bild på Persian Shield blomma"/> 
                    </div>

                    <div className="col bg-footer lg-p-5 text-center pt-lg-5">
                        <div className="card-body">
                            <h2 className="card-title footer-title pb-lg-3 info_text_start">KONTAKTA OSS</h2>

                            <h5 className="card-text footer-title2 info_text_start">MAIL</h5>
                            <p className="card-text footer-text info_text_start">kontakt[@]gronavaxter.se</p>

                            <h5 className="card-text footer-title2 info_text_start">ADRESS</h5>
                            <p className="card-text footer-text info_text_start">Gröna Gränd 1, 123 45 Grönskogen</p>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Footer

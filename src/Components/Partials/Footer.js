import React from "react";

function Footer() {
    return (
        <>

            <div className="card">
                <div className="row g-0">
                    <div className="col-7">
                        <img src="/Images/footer.jpg" className="img-fluid" alt="Bild på Persian Shield blomma"/> 
                    </div>

                    <div className="col-5 bg-footer p-5">
                        <div className="card-body">
                            <h2 className="card-title">KONTAKTA OSS</h2>

                            <h5 className="card-text">MAIL</h5>
                            <p className="card-text">kontakt[@]gronavaxter.se</p>

                            <h5 className="card-text">ADRESS</h5>
                            <p className="card-text">Gröna Gränd 1, 123 45 Grönskogen</p>



                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer

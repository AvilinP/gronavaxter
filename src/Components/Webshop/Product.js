import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import Footer from "../Partials/Footer";
import Chatbot from "react-chatbot-kit";
import ActionProvider from "../../Chatbot/ActionProvider";
import MessageParser from "../../Chatbot/MessageParser";
import config from "../../Chatbot/config";

function ProductInfo() {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpenChat, setIsOpenChat] = useState(false);

    return (
        <>

            <div>
                <div className="sm-container fixed-bottom" style={{ marginBottom: '3rem' }}>

                    <button className="fixed-bottom mb-3 rounded-circle btn btn-lg btn-primary m-3" style={{ maxWidth: '3.2rem' }} type="button" onClick={() => setIsOpenChat(!isOpenChat)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-quote" viewBox="0 0 16 16">
                            <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                            <path d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z" />
                        </svg>
                    </button>

                    {isOpenChat &&
                        <Chatbot
                            config={config}
                            actionProvider={ActionProvider}
                            messageParser={MessageParser} />
                    }

                </div>
            </div>

            <div className="container-sm">
                <div className="d-sm-flex m-3 sm-w-50 col-md-6">
                    <Carousel>

                        <div>
                            <img src="./Images/carousel1.jpeg" className="img-tumbnail img-fluid" alt="Bild p?? en f??rgglad blomma" />
                        </div>
                        <div>
                            <img src="./Images/carousel2.jpeg" className="img-tumbnail img-fluid" alt="Bild p?? en f??rgglad blomma" />
                        </div>
                        <div>
                            <img src="./Images/carousel3.jpeg" className="img-tumbnail img-fluid" alt="Bild p?? en f??rgglad blomma" />
                        </div>
                        <div>
                            <img src="./Images/carousel4.jpeg" className="img-tumbnail img-fluid" alt="Bild p?? en f??rgglad blomma" />
                        </div>

                    </Carousel>

                    <div className="py-1 AR-icon">

                        <a rel="ar" className="d-flex justify-content-center align-items-center" href="./Images/AR/Interior_Tree_Plant.usdz">
                            Se produkten i AR
                            <img className="img-fluid" style={{ maxWidth: "20%" }} src="./Images/AR/AR_icon.png" alt="AR-bild" />
                        </a>
                    </div>

                    <div className="container mt-3" style={{ minWidth: 75 + '%' }}>
                        <div className="m-3">
                            <h2 className="info-text-start" >PRODUKT</h2>
                            <p>
                                Denna produkt ??r fantastisk, s?? fin och s?? underbar. Se den, testa den, k??p den!
                                Denna produkt ??r fantastisk, s?? fin och s?? underbar. Se den, testa den, k??p den!
                                Denna produkt ??r fantastisk, s?? fin och s?? underbar. Se den, testa den, k??p den!
                            </p>
                            <p>1299 SEK</p>

                            <div className="card-body mt-5">
                                <button type="button" className=" justify-content-center bg-menu rounded border-0 p-3 w-50">K??P</button>
                            </div>

                            <div className="mt-5">
                                <div className="card">
                                    <div className="card-header" >
                                        <h2 className="mb-0">
                                            <button onClick={() => setIsOpen(!isOpen)} className="btn btn-link text-dark" type="button" >
                                                Sk??tselr??d
                                            </button>
                                        </h2>
                                    </div>

                                    {isOpen &&
                                        <div className="card-body">
                                            F??r att lyckas med palettblad h??ller du jorden l??tt och j??mnt fuktig ??? den b??r inte torka.
                                            S??rskilt viktigt ??r det att h??lla jorden fuktig i soligt l??ge. H??ll g??rna svag dos flytande n??ring
                                            i vattnet fr??n v??r till h??st. Mycket ljus ger vackra f??rger p?? bladen.
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
                                            Latinskt namn: Rhododendron Koichiro Wada (yakushimanum)<br />
                                            Typ: Rhododendron<br />
                                            Storlek: 20-25cm, krukodlad<br />
                                            Krukstorlek: 15-19cm<br />
                                            L??vverk f??rg: gr??nt<br />
                                            Blomning f??rg: rosavit<br />
                                            Blomningstid: maj/juni<br />
                                            V??xtplats: halvskugga<br />
                                            Jordm??n: surjord<br />
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
                <h3 className="pb-3 info-text-start">RECENSIONER</h3>
                <div className="container">
                    <div className="row justify-content-center">

                        <div className="col-6 bg-reviews m-3 flex-column align-items-center" style={{ width: "20rem" }}>
                            <div className="d-flex flex-column align-items-center p-3">
                                <img className="rounded-circle w-50" src="./Images/recension_1.jpg" alt="En bild p?? glad person som gett en positiv recension" />
                                <h7 className="info-text-start md-m-3 sm-m-1 mt-3">TERESE GREN</h7>
                            </div>
                            <p className="text-center">"Utan Gr??na V??xter hade mitt hem varit gr??tt och blekt. Deras kundservice ??r ocks?? top-notch!"
                            </p>
                        </div>

                        <div className="col-6 bg-reviews m-3 flex-column align-items-center" style={{ width: "20rem" }}>
                            <div className="d-flex flex-column align-items-center p-3">
                                <img className="rounded-circle w-50" src="./Images/recension_2.jpg" alt="En bild p?? lavender" />
                                <h7 className="info-text-start md-m-3 sm-m-1 mt-3">RITA BJ??RK</h7>
                            </div>
                            <p className="text-center">"Jag var p?? jakt efter en ovanliga v??xt och sj??lvklart hittade jag den direkt p?? Gr??na V??xter. T??nk om jag visste det fr??n b??rjan!"
                            </p>
                        </div>

                        <div className="col-6 bg-reviews m-3 flex-column align-items-center" style={{ width: "20rem" }}>
                            <div className="d-flex flex-column align-items-center p-3">
                                <img className="rounded-circle w-50" src="./Images/recension_3.jpg" alt="En bild p?? lavender" />
                                <h7 className="info-text-start md-m-3 sm-m-1 mt-3">GENE ALM</h7>
                            </div>
                            <p className="text-center">"Gr??na V??xter ??r verkligen min nya e-handelfavorit. Har du testat deras AR? Den ??r lika magisk som deras v??xter!"
                            </p>
                        </div>

                        <div className="col-6 bg-reviews m-3 flex-column align-items-center" style={{ width: "20rem" }}>
                            <div className="d-flex flex-column align-items-center p-3">
                                <img className="rounded-circle w-50" src="./Images/recension_4.jpg" alt="En bild p?? lavender" />
                                <h7 className="info-text-start md-m-3 sm-m-1 mt-3">ANN & JERRY SKOG</h7>
                            </div>
                            <p className="text-center">"Vi har handlat v??xter i m??nga ??r och till m??nga hem och tr??dg??rdar. Men inga v??xter ??vertr??ffar de fr??n Gr??na V??xter. Vilken hit!"
                            </p>
                        </div>

                        <div className="col-6 bg-reviews m-3 flex-column align-items-center" style={{ width: "20rem" }}>
                            <div className="d-flex flex-column align-items-center p-3">
                                <img className="rounded-circle w-50" src="./Images/recension_5.jpg" alt="En bild p?? lavender" />
                                <h7 className="info-text-start md-m-3 sm-m-1 mt-3">ANDY LIND</h7>
                            </div>
                            <p className="text-center">"Mina h??nder ??r verkligen inte gr??na. Men hos Gr??na V??xter blir dem det p?? en g??ng! Har du sett deras utbud? H??r kan man hitta allt man beh??ver och lite till. "
                            </p>
                        </div>

                        <div className="col-6 bg-reviews m-3 flex-column align-items-center" style={{ width: "20rem" }}>
                            <div className="d-flex flex-column align-items-center p-3">
                                <img className="rounded-circle w-50" src="./Images/recension_6.jpg" alt="En bild p?? lavender" />
                                <h7 className="info-text-start md-m-3 sm-m-1 mt-3">JENNY EK</h7>
                            </div>
                            <p className="text-center">"Gl??m inte att testa deras AR-funktion ocks??! Men den lyckas jag alltid k??pa r??tt storlek till min vardagsrum. V??xter ska komplettera ett hem inte ta ??ver."
                            </p>
                        </div>

                    </div>
                </div>
            </div>



            <div className="d-flex flex-column align-items-center p-5" style={{ minWidth: '21rem' }}>
                <h3 className="info-text-start text-center">BILDER FR??N K??PARE</h3>
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                            <img className="w-100 shadow-1-strong rounded mb-4" src="./Images/bildkund5.jpg" alt="" />
                            <img className="w-100 shadow-1-strong rounded mb-4" src="./Images/produkt4.jpeg" alt="" />
                        </div>

                        <div className="col-lg-4 mb-4 mb-lg-0">
                            <img className="w-100 shadow-1-strong rounded mb-4" src="./Images/produkt1.jpeg" alt="" />
                            <img className="w-100 shadow-1-strong rounded mb-4" src="./Images/bildkund4.jpg" alt="" />
                        </div>

                        <div className="col-lg-4 mb-4 mb-lg-0">
                            <img className="w-100 shadow-1-strong rounded mb-4" src="./Images/bildkund8.jpg" alt="" />
                            <img className="w-100 shadow-1-strong rounded mb-4" src="./Images/produkt7.jpeg" alt="" />
                        </div>

                    </div>
                </div>
            </div>


            <div className="d-flex flex-column align-items-center p-5">
                <h3 className="text-center info-text-start">DU KANSKE OCKS?? TYCKER OM..</h3>
                <div className="container col-9">
                    <div className="row">

                        <div className="col-lg-4 mb-4 mb-lg-0">
                            <img className="card-img-top" src="./Images/gillar1.jpeg" alt="Bild av en v??xt" />
                        </div>
                        <div className="col-lg-4 mb-4 mb-lg-0">
                            <img className="card-img-top" src="./Images/gillar2.jpeg" alt="Bild av en v??xt" />
                        </div>
                        <div className="col-lg-4 mb-4 mb-lg-0">
                            <img className="card-img-top" src="./Images/gillar3.jpeg" alt="Bild av en v??xt" />
                        </div>

                    </div>
                </div>
            </div>

            <Footer />

        </>

    )
}
export default ProductInfo
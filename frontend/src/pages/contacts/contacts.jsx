import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { 
    faMapMarkedAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faSkype, faViber, faFacebook, faInstagram, faTelegram,
    faWhatsapp, faDiscord, faLinkedinIn, faGithub
} from "@fortawesome/free-brands-svg-icons";
import {
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";

import style from "./contacts.module.css";

import Photo from "../../../public/img/Sergy1.png";

const MapWithAMarker = withGoogleMap(props =>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
      <Marker
        position={{ lat: -34.397, lng: 150.644 }}
      />
    </GoogleMap>
);


class ContactsPage extends React.Component {
    render () {
        return (
            <div className={style.contact_page}>
                <h3 className={style.contact_title}>Контакты</h3>
                <div className={style.flex_wrap}>
                    <div className={style.text_wrap}>
                        <h3 className="mytitle">Общие контакты</h3>
                        <span className={style.horizontal_line}></span>
                        <p>
                            <FontAwesomeIcon icon={faMapMarkedAlt} className={style.icon}/>
                            Адресс: г. Винница, ул. Литвиненко
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faPhone} className={style.icon}/> Телефоны: 
                            <span>+380985254699</span> <span>+380638247809</span>
                        </p>
                        <p>
                        <FontAwesomeIcon icon={faEnvelope} className={style.icon}/> Email: 
                            <a href="mailto:sergei.ahill@gmail.com"> sergei.ahill@gmail.com</a>
                        </p>
                    </div>
                    <div className={style.img_wrap}>
                        <img src={Photo} alt=""/>
                    </div>
                </div>
                <div className={style.contacts}>
                    <div className={style.mesengers}>
                        <h3>Месенджеры</h3>
                        <span className={style.horizontal_line}></span>
                        <div className={style.mesenger_wrap}>
                            <div>
                                <a href="skype:serega.warrior" target="_blank">
                                <FontAwesomeIcon icon={faSkype}/> Skype: <span>serega.warrior</span>
                                </a>
                            </div>
                            <div>
                                <a href="viber://chat?number=+380985254699" target="_blank">
                                    <FontAwesomeIcon icon={faViber}/> Viber: <span>+380985254699</span>
                                </a>
                            </div>
                            <div>
                                <a href="whatsapp://send?phone=+380638247809" target="_blank">
                                    <FontAwesomeIcon icon={faWhatsapp}/> What`s App: <span>+380638247809</span>
                                </a>
                            </div>
                            <div>
                                <a href="tg://resolve?domain=Sergei Sorochinsky" target="_blank">
                                <FontAwesomeIcon icon={faTelegram}/> 
                                    Telegram: <span>+380638247809</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={style.social}>
                        <h3>Социальные сети</h3>
                        <span className={style.horizontal_line}></span>
                        <div className={style.social_wrap}>
                            <div>
                                <a href="https://www.facebook.com/SergySorochinsky" target="_blank">
                                    <FontAwesomeIcon icon={faFacebook}/> Facebook
                                </a>
                            </div>
                            <div>
                                <a href="https://www.linkedin.com/in/сергей-сорочинський-2323b3150/" target="_blank">
                                <FontAwesomeIcon icon={faLinkedinIn}/> Linkedin
                                </a>
                            </div>
                            <div>
                                <a href="https://www.instagram.com/a.c.h.i.l.l/?hl=ru" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram}/> Instagram
                                </a>
                            </div>
                            <div>
                                <a href="https://github.com/Achill43" target="_blank">
                                    <FontAwesomeIcon icon={faGithub}/> GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                {/* <MapWithAMarker
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                        /> */}
                </div>
            </div>
        );
    }
}

export default ContactsPage;
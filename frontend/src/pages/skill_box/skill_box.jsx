import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { 
    faEnvelope, faGraduationCap, faCalendar, faDownload
} from "@fortawesome/free-solid-svg-icons";
import {
    faSkype, faHtml5, faCss3, faJsSquare, faViber, faPython, faSass, faAngular,
    faReact
} from "@fortawesome/free-brands-svg-icons";

import style from "./skill_box.module.css";
import DjangoIcon from "../../../public/img/icons8-django.png";
import PostgresIcon from "../../../public/img/postgresql.png";
import Avatar from "../../../public/img/I_draw1.png";

class SkillBoxPage extends React.Component {
    render () {
        return (
            <div className={style.skill_box_wrap}>
                <div className={`${style.flex_column} ${style.resume_block}`}>
                    <h1 className={style.main_title}>Сергей Сорочинский</h1>
                    <h3 className={style.main_title}>Junior Full-stack Web-программист</h3>
                    <div className={style.avatar_wrap}>
                        <img src={Avatar} alt="" className={style.avatar} />
                    </div>

                    <p className={style.resume_title}> 
                            <FontAwesomeIcon icon={faGraduationCap}/> Опыт работы и образование: 
                    </p>
                    <p>
                        – 2020-текущее время 
                        Junior Django Full-stack deweloper;
                    </p>
                    <p>
                        - 2017 год
                        Курсы по WordPress в компании SOFTGROUP г. Винница.
                    </p>
                    <p>
                        – 2011-2017 гг.
                        Винницкий национальный технический университет.
                        Факультет компьютерных систем и сетей.
                        Специальность: компьютерная инженерия;
                    </p>
                    <p className={style.resume_title}> 
                            Контакты: 
                    </p>
                    <div className="resumeText">
                        <p>город Винница, улица Литвиненко</p>
                        <p>
                        <FontAwesomeIcon icon={faEnvelope}/> e-mail: 
                            <a href="mailto:sergei.ahill@gmail.com"> sergei.ahill@gmail.com</a>
                        </p>
                        <p><FontAwesomeIcon icon={faSkype}/> Skype: serega.warrior</p>
                        <p><FontAwesomeIcon icon={faViber}/> Viber: +380985254699</p>
                        <p className={style.resume_title}>Телефони:</p>
                        <p>+380985254699</p>
                        <p>+380638247809</p>
                    </div>

                    <div>
                        <p className={style.resume_title}> Cкачать резюме:</p>
                        <a href="https://drive.google.com/file/d/15Pr908tXqaH8ClbuJ69Z4oRmosVCfwsB/view?usp=sharing"
                                className={style.resume_link} target="_blank">
                            <FontAwesomeIcon icon={faDownload}/>
                            Скачать .docx
                        </a>
                    </div>
                </div>
                <div className={`${style.flex_column} ${style.skill_block}`}>
                    <h3 className={style.skill_title}>Языки програмирования и их навыки:</h3>
                    <div className={style.main_skill_wrap}>
                        <div className={style.single_skill} style={{color: "#f17a0a"}}>
                            <svg className={style.progress_ring}>
                                <circle className={style.circle} cx="100" cy="100" r="48"
                                style={{
                                    stroke: "#f17a0a",
                                }}/>
                                <circle className={style.circle} cx="100" cy="100" r="48"
                                style={{
                                    stroke: "#4d4d4d",
                                    strokeDasharray: 2*3.14*48 + " " + 2*3.14*48,
                                    strokeDashoffset: 360*90/100
                                }}/>
                            </svg>
                            <span className={style.main_skill_icon}>
                                <FontAwesomeIcon icon={faHtml5}/>
                            </span>
                            <span className={style.percent}>90%</span>
                        </div>
                        <div className={style.single_skill} style={{color: "#0a89f1"}}>
                            <svg className={style.progress_ring}>
                                <circle className={style.circle} cx="100" cy="100" r="48"
                                style={{
                                    stroke: "#0a89f1",
                                }}/>
                                <circle className={style.circle} cx="100" cy="100" r="48"
                                style={{
                                    stroke: "#4d4d4d",
                                    strokeDasharray: 2*3.14*48 + " " + 2*3.14*48,
                                    strokeDashoffset: 360*90/100
                                }}/>
                            </svg>
                            <span className={style.main_skill_icon}>
                                <FontAwesomeIcon icon={faCss3}/>
                            </span>
                            <span className={style.percent}>90%</span>
                        </div>
                        <div className={style.single_skill} style={{color: "#f1e20a"}}>
                            <svg className={style.progress_ring}>
                                <circle className={style.circle} cx="100" cy="100" r="48"
                                style={{
                                    stroke: "#f1e20a",
                                }}/>
                                <circle className={style.circle} cx="100" cy="100" r="48"
                                style={{
                                    stroke: "#4d4d4d",
                                    strokeDasharray: 2*3.14*48 + " " + 2*3.14*48,
                                    strokeDashoffset: 360*60/100
                                }}/>
                            </svg>
                            <span className={style.main_skill_icon}>
                                <FontAwesomeIcon icon={faJsSquare}/>
                            </span>
                            <span className={style.percent}>60%</span>
                        </div>
                        <div className={style.single_skill} style={{color: "#56d0e0"}}>
                            <svg className={style.progress_ring}>
                                <circle className={style.circle} cx="100" cy="100" r="48"
                                style={{
                                    stroke: "#56d0e0",
                                }}/>
                                <circle className={style.circle} cx="100" cy="100" r="48"
                                style={{
                                    stroke: "#4d4d4d",
                                    strokeDasharray: 2*3.14*48 + " " + 2*3.14*48,
                                    strokeDashoffset: 360*60/100
                                }}/>
                            </svg>
                            <span className={style.main_skill_icon}>
                                <FontAwesomeIcon icon={faPython}/>
                            </span>
                            <span className={style.percent}>60%</span>
                        </div>
                    </div>
                    <h3 className={style.skill_title}>Дополнительные технологии и их навыки</h3>
                    <div className={style.additional_skills}>
                        <div className={style.skill_wrap}>
                            <div className={style.skill_item}>
                                <div className={style.icon_block}>
                                    <FontAwesomeIcon icon={faSass}/>
                                </div>
                                <div className={style.pescent_block}>
                                    <div className={style.pescent} style={{width: "90%"}}>
                                        <span className="text">90%</span>
                                    </div>
                                </div>
                            </div>
                            <div className={style.skill_item}>
                                <div className={style.icon_block}>
                                    <img  src={DjangoIcon} alt="Django"/>
                                </div>
                                <div className={style.pescent_block}>
                                    <div className={style.pescent} style={{width: "65%"}}>
                                        <span className="text">65%</span>
                                    </div>
                                </div>
                            </div>
                            <div className={style.skill_item}>
                                <div className={style.icon_block}>
                                    <FontAwesomeIcon icon={faAngular}/>
                                </div>
                                <div className={style.pescent_block}>
                                    <div className={style.pescent} style={{width: "40%"}}>
                                        <span class="text">40%</span>
                                    </div>
                                </div>
                            </div>
                            <div className={style.skill_item}>
                                <div className={style.icon_block}>
                                    <FontAwesomeIcon icon={faReact}/>
                                </div>
                                <div className={style.pescent_block}>
                                    <div className={style.pescent} style={{width: "40%"}}>
                                        <span className="text">40%</span>
                                    </div>
                                </div>
                            </div>
                            <div className={style.skill_item}>
                                <div className={`${style.icon_block} ${style.icon_postgres}`}>
                                    <img src={PostgresIcon} alt="PosgreSQl" />
                                </div>
                                <div className={style.pescent_block}>
                                    <div className={style.pescent} style={{width: "30%"}}>
                                        <span className="text">30%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className={style.skill_title}> Личные дание:</h4>
                        <p>- <FontAwesomeIcon icon={faCalendar}/> Д.р. 4 марта 1993 р.;</p>
                        <p>– Не женат;</p>
                    </div>
                    <div>
                        <h4 className={style.skill_title}> Знание языков:</h4>
                        <p>Английский - pre-intermediate</p>
                        <p>Русский - свободное владение</p>
                        <p>Украинский - родной язык</p>
                    </div>
                    <div>
                        <h4 className={style.skill_title}> Дополнительные сведения:</h4>
                            <p>- Хобби: чтение, 3D графика, занятия спортом;</p>
                            <p>- Готов к удалёной работе и к переезду;</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default SkillBoxPage;
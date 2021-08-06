import React from 'react';

import photo from '../../../public/img/Sergy.png';

import style from './profile.module.css';

class ProfilePage extends React.Component {
    render () {
        return (
            <div className={style.flex_wrapper}>
                <div className={style.photo_wrapper}>
                    <div className={style.photo}>
                            <img src={photo} alt="Сорочинский Сергей"/>
                    </div>
                </div>
                <div className={style.main_info}>
                    <h1 className={style.title}>Сергей Сорочинский</h1>
                    <h3 className={style.title}>Junior Full-stack программист</h3>
                    <p>
                        "Mac - для гиков, Windows - для геймеров, Linux - для богов)))". 
                        "Что такое безумие? Это повторять одно и то же действие много раз и ожидать иного 
                        результата)))" "Люблю математику, она заставляет людей плакать)))"
                    </p>
                </div>
                <div className={style.personal_info}>
                    <ul>
                        <li><label>Имя</label> <span>Сергей Сорочинский</span></li>
                        <li><label>Дата рождения</label> <span>4 марта 1993</span></li>
                        <li><label>Адрес</label> <span>город Винница, улица Литвиненко</span></li>
                        <li><label>Телефон</label> <span>0638247809; 0985254699</span></li>
                        <li>
                            <label>Email</label> <span className="wordWrap">
                            sergei.ahill@gmail.com</span>
                        </li>
                        <li><label>Хобби</label> <span>спорт; 3D графика; чтение</span></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ProfilePage;
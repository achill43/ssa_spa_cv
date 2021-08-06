import React from "react";

import style from "./site.module.css";

const Site = (props) => {
    const site = props.site;
    return (
        <div class={style.site_item}>
            <div class={`${style.face} ${style.face1}`}>
                <div class={style.info}>
                    <img src={site.img_link} alt={site.title} />
                </div>
            </div>
            <div class={`${style.face} ${style.face2}`}>
                <div class={style.info}>
                    <h3>{site.title}</h3>
                    <p dangerouslySetInnerHTML={{__html: site.description}}>
                    </p>
                    <p>GitHub: <a href="" target="_blank">GitHub {site.title}</a></p>
                    <a href={site.link} class={style.myBtn} target="_blank"> Перейти </a>
                </div>
            </div>
        </div>
    );
}
export default Site;
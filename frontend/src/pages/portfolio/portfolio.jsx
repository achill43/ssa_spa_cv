import React from 'react'

import API from '../../utils/api/api';

import Site from '../../components/Site/site';

import style from "./portfolio.module.css";

class Portfolio extends React.Component {
    state = {
        site_list: [],
    }
    async componentDidMount() {
        const api_request = await API.get("api/sites/").then(response => {
            this.setState({site_list: response.data});
        }).catch(error => {
            console.log(`Mising some error!!! \n ${error}`);
        });
    }
    render() {
        return(
            <div className={style.portfolio_wrap}>
                <h1 className={style.portfolio_title}>Мои личные проекты</h1>
                <div className={style.sites_wrap}>
                {
                    this.state.site_list.map( site => (
                        <Site site={site}/>
                    ))
                }
                </div>
            </div>
        )
    }
}

export default Portfolio;
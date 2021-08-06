import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { 
    faUser, faImages, faUserGraduate, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import menu_styles from './main_menu.module.css';

library.add(faUser, faUserGraduate, faImages, faPaperPlane);

class MainMenu extends React.Component {
    state = {
        is_show_menu: false,
        menu_classes: menu_styles.main_menu,
        hambur_classes: menu_styles.hamburger_menu,
    }

    showMenu = () => {
        var is_show = this.state.is_show_menu;
        if (is_show) {
            this.setState({
                menu_classes: menu_styles.main_menu,
                hambur_classes: menu_styles.hamburger_menu,
            })
        }
        else {
            this.setState({
                menu_classes: menu_styles.main_menu + " " + menu_styles.main_menu_active,
                hambur_classes: menu_styles.hamburger_menu + " " + menu_styles.hamburger_active,
            });
        }
        this.setState({
            is_show_menu: !is_show
        });
        this.props.move_content(is_show);
    }
    render () {
        return (
            <nav className={this.state.menu_classes}>
                <ul className={menu_styles.tabs}>
                    <li className={menu_styles.tabs_item}>
                        <NavLink className={menu_styles.link} to="/" 
                            activeClassName={menu_styles.active_link}
                            exact
                            onClick={this.showMenu}>
                            <FontAwesomeIcon className={menu_styles.menu_icon} 
                                    icon={["fas", "user"]}/>
                            <span>Профайл</span>
                        </NavLink>
                    </li>
                    <li className={menu_styles.tabs_item}>
                        <NavLink className={menu_styles.link} to="/skill_box/"
                            activeClassName={menu_styles.active_link}
                            exact
                            onClick={this.showMenu}>
                            <FontAwesomeIcon className={menu_styles.menu_icon} 
                                icon={["fas", "user-graduate"]}/>
                            <span>Резюме</span>
                        </NavLink>
                    </li>
                    <li className={menu_styles.tabs_item}>
                        <NavLink className={menu_styles.link} to="/portfolio/"
                            activeClassName={menu_styles.active_link}
                            exact
                            onClick={this.showMenu}>
                            <FontAwesomeIcon className={menu_styles.menu_icon} 
                                icon={["fas", "images"]} />
                            <span>Портфолио</span>
                        </NavLink>
                    </li>
                    <li className={menu_styles.tabs_item}>
                        <NavLink className={menu_styles.link} to="/contact/"
                            activeClassName={menu_styles.active_link}
                            exact
                            onClick={this.showMenu}>
                            <FontAwesomeIcon className={menu_styles.menu_icon} 
                                icon={["fas", "paper-plane"]} />
                            <span>Контакты</span>
                        </NavLink>
                    </li>
                </ul>
    
                <div class={this.state.hambur_classes}
                    onClick={this.showMenu}>
                    <div class={menu_styles.bar}></div>
                </div>
            </nav>
        );
    }
    
}

export default MainMenu;
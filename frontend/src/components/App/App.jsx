import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import MainMenu from '../main_menu/main_menu';

import ProfilePage from '../../pages/profile/profile';
import SkillBoxPage from '../../pages/skill_box/skill_box';
import ContactsPage from '../../pages/contacts/contacts';
import Portfolio from '../../pages/portfolio/portfolio';

import './App.css';

class App extends React.Component  {
  state = {
    content_classes: "page_content"
  }
  move_content = (is_move) => {
    if (is_move) {
      this.setState({
        content_classes: "page_content"
      });
    }
    else {
      this.setState({
        content_classes: "page_content active"
      });
    }
  }
  render () {
    return (
      <div className="page_wrapper">
        <div className="page">
          <MainMenu move_content={this.move_content}/>

          <div className={this.state.content_classes}>
            <Route className="route_wrapper" render = {(location) => (
              <TransitionGroup>
                <CSSTransition 
                    key={location.key}
                    timeout={3000}
                    classNames="switch_page">
                  <Switch>
                    <Route exact path='/' component={ProfilePage} className="page_item"/>
                    <Route exact path='/skill_box/' component={SkillBoxPage} className="page_item"/>
                    <Route exact path='/contact/' component={ContactsPage} className="page_item"/>
                    <Route exact path="/portfolio/" component={Portfolio} className="page_item"/>
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
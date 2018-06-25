import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import {HomePage} from './Homepage/homePage.jsx';
import {MilestonePage} from './Milestone/milestonePage.jsx';
import {TipsPage} from './Tips/tipsPage.jsx';
import {ApplicationHistoryPage} from './Application_History/ApplicationHistoryPage.jsx';
import {Login} from './Login/login.jsx';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  
  // const Main = () => { 
  //   <main>
  //     <Switch>
  //       <Route exact path='/' component={HomePage} />
  //       <Route path='/api/milestone' component={MilestonePage} />
  //       <Route path='/api/tips' component={TipsPage} />
  //       <Route path='/api/applications' component={ApplicationHistoryPage} />
  //       <Route path='/api/login' component={Login}/>
  //     </Switch>
  //   </main>
  // }

  render() {
    return (
      <div>
        <header>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/api/milstones'>Milestones</Link></li>
              <li><Link to='/api/tips'>Interview Tips</Link></li>
              <li><Link to='/api/applications'>Application History</Link></li>
              <li><Link to='/api/login'>Logout</Link></li>
            </ul>
          </nav>
        </header>

        <main>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/api/milestones' component={MilestonePage} />
            <Route path='/api/tips' component={TipsPage} />
            <Route path='/api/applications' component={ApplicationHistoryPage} />
            <Route path='/api/login' component={Login}/>
          </Switch>
        </main>
      </div>
    )
  }
};

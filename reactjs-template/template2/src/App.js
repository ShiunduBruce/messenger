import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch,HashRouter } from 'react-router-dom';
import {Index} from './frontend/pages/index';
import {Group} from './frontend/pages/group';
import {Status} from './frontend/pages/status';
import {Audiocall} from './frontend/pages/audio-call';
import {Settings} from './frontend/pages/settings';
import {Audiocallsingle} from './frontend/pages/audiocall-single';
import {Audiocallgroup} from './frontend/pages/audiocall-group';
import {Videocallsingle} from './frontend/pages/videocall-single';
import {Videocallgroup} from './frontend/pages/videocall-group';
import {Loginemail} from './frontend/pages/login-email';
import {Loginmobile} from './frontend/pages/login-mobile';
import {Signupemail} from './frontend/pages/signup-email';
import {Signupemobile} from './frontend/pages/signup-mobile';
import {Otpemail} from './frontend/pages/otp-email';
import {Otpmobile} from './frontend/pages/otp-mobile';
import {Forgotpasswordemail} from './frontend/pages/forgotpassword-email';
import {Forgotpasswordmobile} from './frontend/pages/forgotpassword-mobile';
import {Resetpassword} from './frontend/pages/reset-password';
import {Archieve} from './frontend/pages/archieve';
import AdminAppUniversal from "./admin/app-universal";
import config from 'config';




class App extends Component {
    componentDidMount() {
        if(!window.location.pathname.includes("admin")) {
          require('./frontend/assets/css/app.css');
          require('./frontend/assets/js/script.js');
        }
    }
    render() {
      return (
          <Router basename={`${config.publicPath}`}>
              <Switch>
                 <Route path="/admin" component={AdminAppUniversal} />
                 <Route exact path="/" component={Index} />
                 <Route path="/group" component={Group} />
                 <Route path="/status" component={Status} />
                 <Route path="/audio-call" component={Audiocall} />
                 <Route path="/settings" component={Settings} />
                 <Route path="/audiocall-single" component={Audiocallsingle} />
                 <Route path="/audiocall-group" component={Audiocallgroup} />
                 <Route path="/videocall-single" component={Videocallsingle} />
                 <Route path="/videocall-group" component={Videocallgroup} />
                 <Route path="/login-email" component={Loginemail} />
                 <Route path="/login-mobile" component={Loginmobile} />
                 <Route path="/signup-email" component={Signupemail} />
                 <Route path="/signup-mobile" component={Signupemobile} />
                 <Route path="/otp-email" component={Otpemail} />
                 <Route path="/otp-mobile" component={Otpmobile} />
                 <Route path="/forgotpassword-email" component={Forgotpasswordemail} />
                 <Route path="/forgotpassword-mobile" component={Forgotpasswordmobile} />
                 <Route path="/reset-password" component={Resetpassword} />
                 <Route path="/archieve" component={Archieve} />
              </Switch>
          </Router>
      )
    }
}

export default App;



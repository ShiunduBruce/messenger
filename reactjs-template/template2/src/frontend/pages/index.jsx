import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Switch,HashRouter } from 'react-router-dom';
import Leftsidebar from '../../frontend/components/left-sidebar.jsx';
import Leftchatsidebar from '../../frontend/components/left-chat-sidebar.jsx';
import Middlechatbody from '../../frontend/components/middle-chat-body.jsx';
import Rightsidebar from '../../frontend/components/right-sidebar.jsx';

class Index extends Component {
  render() {
      return (
          <div className="main-wrapper">
            <div className="content main_content">
                <Leftsidebar />
                <Leftchatsidebar />
                <Middlechatbody />
                <Rightsidebar />
            </div>
          </div>
        )
    }
 }

export {Index};

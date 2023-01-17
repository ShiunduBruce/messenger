import React, { Component } from 'react';
import ColoredScrollbars from '../initialpage/ColoredScrollbars';
import {Avatar_02,Double_Tick} from '../imagepath';
import moment from 'moment'

class ChatIndex extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      messageText : "",
      newmessagelist: [] 
    };
}
addnewmessage(e){
  e.preventDefault();
  const {messageText} = this.state
  let newmesgedata = {
    msgdata : messageText, sendtime : moment(new Date()).format("h:mm A")
  }
  this.setState({
    messageText:"",
    newmessagelist : [...this.state.newmessagelist, newmesgedata] 
  })

}

   render() {
     const{newmessagelist} = this.state
      return (
        <div className="chat" id="middle">
        <div className="chat-header">
          <div className="user-details">
            <div className="d-lg-none ml-2">
              <ul className="list-inline mt-2 mr-2">
                <li className="list-inline-item">
                  <a className="text-muted px-0 left_side"  data-chat="open">
                    <i className="fas fa-arrow-left" />
                  </a>
                </li>
              </ul>
            </div>
            <figure className="avatar ml-1">
              <img src={Avatar_02} className="rounded-circle" alt="image" />
            </figure>
            <div className="mt-1">
              <h5 className="mb-1">Scott Albright</h5>
              <small className="text-muted mb-2">
                Active 35m ago
              </small>
            </div>
          </div>
          <div className="chat-options">
            <ul className="list-inline">
              <li className="list-inline-item" data-toggle="tooltip" title="" data-original-title="Voice call">
                <a className="btn btn-outline-light" data-toggle="modal" data-target="#voice_call">
                  <i className="fas fa-phone-alt voice_chat_phone" />
                </a>
              </li>
              <li className="list-inline-item" data-toggle="tooltip" title="" data-original-title="Video call">
                <a className="btn btn-outline-light" data-toggle="modal" data-target="#video_call">
                  <i className="fas fa-video" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn btn-outline-light"  data-toggle="dropdown">
                  <i className="fas fa-ellipsis-h" />
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a  className="dropdown-item dream_profile_menu">Profile</a>
                  <a  className="dropdown-item">Delete</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <ColoredScrollbars>
        <div className="chat-body">
          <div className="messages">
            <div className="chats">
              <div className="chat-avatar">
                <img src={Avatar_02} className="rounded-circle dreams_chat" alt="image" />
              </div>
              <div className="chat-content">
                <div className="message-content">
                  Hi James! What’s Up?
                </div>
                <div className="chat-time">
                  <div>
                    <div className="time">Yesterday 14:26 PM</div>
                  </div>
                </div>
              </div>
              <div className="chat-action-btns">
                <ul>
                  <li><a  className="share-msg" title="Share"><i className="fas fa-share" /></a>
                  </li>
                  <li><a  className="edit-msg"><i className="fas fa-edit" /></a></li>
                  <li><a  className="del-msg"><i className="fas fa-trash-alt" /></a></li>
                </ul>
              </div>
            </div>
            <div className="chats chats-right">
              <div className="chat-content">
                <div className="message-content">
                  Oh, hello! All perfectly. I work, study and know this wonderful world!
                </div>
                <div className="chat-time">
                  <div>
                    <div className="time">Yesterday 14:38 PM <i><img src={Double_Tick} alt="" /></i></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="chats">
              <div className="chat-avatar">
                <img src={Avatar_02} className="rounded-circle dreams_chat" alt="image" />
              </div>
              <div className="chat-content">
                <div className="message-content">
                  Ok Cool, Where you from
                </div>
                <div className="chat-time">
                  <div>
                    <div className="time">Yesterday 14:40 PM</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="chats chats-right">
              <div className="chat-content">
                <div className="message-content">
                  I am from California, and you?
                </div>
                <div className="chat-time">
                  <div>
                    <div className="time">Yesterday 14:42 PM <i><img src={Double_Tick} alt="" /></i></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="chat-line">
              <span className="chat-date">Today</span>
            </div>
            <div className="chats">
              <div className="chat-avatar">
                <img src={Avatar_02} className="rounded-circle dreams_chat" alt="image" />
              </div>
              <div className="chat-content">
                <div className="message-content">
                  I am from Australia, and where you working?
                </div>
                <div className="chat-time">
                  <div>
                    <div className="time">14:26 PM</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="chats chats-right">
              <div className="chat-content">
                <div className="message-content">
                  Oh Cool, Yeah i am working here famous software company
                </div>
                <div className="chat-time">
                  <div>
                    <div className="time">14:29 PM <i><img src={Double_Tick} alt="" /></i></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="chats">
              <div className="chat-avatar">
                <img src={Avatar_02} className="rounded-circle dreams_chat" alt="image" />
              </div>
              <div className="chat-content">
                <div className="message-content">
                  That's Good Lol, What is your designation?
                </div>
                <div className="chat-time">
                  <div>
                    <div className="time">14:30 PM</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="chats chats-right">
              <div className="chat-content">
                <div className="message-content">
                  I am senior software engineer.
                </div>
                <div className="chat-time">
                  <div>
                    <div className="time">14:32 PM <i><img src={Double_Tick} alt="" /></i></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="chat-line">
              <span className="chat-date">1 message unread</span>
            </div>
            <div className="chats">
              <div className="chat-avatar">
                <img src={Avatar_02} className="rounded-circle dreams_chat" alt="image" />
              </div>
              <div className="chat-content">
                <div className="message-content">
                  Good.!!!
                </div>
                <div className="chat-time">
                  <div>
                    <div className="time">14:33 PM</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="chats chats-right">
              <div className="chat-content">
                <div className="message-content">
                  Yeah, Thank you..
                </div>
                <div className="chat-time">
                  <div>
                    <div className="time">14:34 PM <i><img src={Double_Tick} alt="" /></i></div>
                  </div>
                </div>
              </div>
            </div>
            {newmessagelist && newmessagelist.map((dataww,index)=>
             <div key={index} className="chats chats-right">
             <div className="chat-content">
               <div className="message-content">
                 {dataww.msgdata}
               </div>
               <div className="chat-time">
                 <div>
                   <div className="time">{dataww.sendtime}<i><img src={Double_Tick} alt="" /></i></div>
                 </div>
               </div>
             </div>
           </div> 
            )}
            {/**/}
          </div>
        </div></ColoredScrollbars>
        <div className="chat-footer">
          <form onSubmit={(event)=> this.addnewmessage(event)}>
            <input type="text" className="form-control chat_form" 
              placeholder="Write a message." value={this.state.messageText}
              onChange={(event)=> this.setState({messageText : event.target.value})} />
            <div className="form-buttons">
              <button className="btn" type="button">
                <i className="far fa-smile" />
              </button>
              <button className="btn" type="button" data-toggle="modal" data-target="#drag_files">
                <i className="fas fa-paperclip" />
              </button>
              <button className="btn" type="button">
                <i className="fas fa-microphone-alt" />
              </button>
              <button className="btn send-btn" type="button" onClick={(event)=> this.addnewmessage(event)} >
                <i className="fab fa-telegram-plane" />
              </button>
            </div>
          </form>
        </div>
        {/* Upload Documents */}
        <div id="drag_files" className="modal fade" role="dialog">
          <div className="modal-dialog modal-md modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Drag and drop files upload</h4>
                <button type="button" className="close" data-dismiss="modal">×</button>
              </div>
              <div className="modal-body">
                <form id="js-upload-form">
                  <div className="upload-drop-zone" id="drop-zone">
                    <i className="fa fa-cloud-upload fa-2x" /> <span className="upload-text">Just drag and
                      drop files here</span>
                  </div>
                </form>
                <div className="text-center mt-0">
                  <button className="btn newgroup_create m-0" data-dismiss="modal">Add to upload</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Upload Documents */}
        {/* Voice call */}
        <div className="modal fade voice_pop" id="voice_call" role="document">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content voice_content ml-3">
              <div className="modal-body voice_body">
                <div className="call-box incoming-box">
                  <div className="call-wrapper">
                    <div className="call-inner">
                      <div className="call-user">
                        <img alt="User Image" src={Avatar_02} className="call-avatar" />
                        <h4>Tobbias Williams</h4>
                        <span className="chat_cal">calling...</span>
                      </div>
                      <div className="call-items">
                        <a  className="btn call-item call-end" data-dismiss="modal">
                          <i className="fas fa-phone-alt phone_icon" />
                        </a>
                        <a  className="btn call-item call-start" data-dismiss="modal">
                          <i className="fas fa-phone-alt" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Voice call */}
        {/* Video Call */}
        <div className="modal fade voice_pop" id="video_call" role="document">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content voice_content ml-3">
              <div className="modal-body voice_body">
                <div className="call-box incoming-box">
                  <div className="call-wrapper">
                    <div className="call-inner">
                      <div className="call-user">
                        <img alt="User Image" src={Avatar_02} className="call-avatar" />
                        <h4>Tobbias Williams</h4>
                        <span className="chat_cal">calling...</span>
                      </div>
                      <div className="call-items">
                        <a  className="btn call-item call-end" data-dismiss="modal">
                          <i className="fas fa-phone-alt phone_icon" />
                        </a>
                        <a  className="btn call-item call-start" data-dismiss="modal">
                          <i className="fas fa-video" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Video Call */}
      </div>
        );
   }
}

export default ChatIndex;

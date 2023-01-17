import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
import { Videocall, user01, user02 } from "../imagepath";

const Meetingsingleuser = () => {
    useEffect(() => {
        function resizeInnerDiv() {

            var height = $(window).height();
            var screen_height = $(window).height() - 252;
            var screen_height_vertical_view = $(window).height() - 232;
            var screen_height_horizontal_view = $(window).height() - 292;



            $(".meeting-wrapper .join-contents").css("min-height", screen_height);
            $('.join-contents .join-video').css('height', (screen_height_horizontal_view / 4) * 2.8);
            $('.join-contents .join-video img').css('height', (screen_height_horizontal_view / 4) * 2.8);

            $('.join-contents .join-video.single-user img').css('height', screen_height / 4);
            $('.join-contents .join-video.single-user').css('height', screen_height / 4);
            $('.join-contents .join-video.single-user').css('min-height', screen_height / 4);

            $('.horizontal-view .join-video.single-user img').css('height', screen_height / 3);
            $('.horizontal-view .join-video.single-user').css('height', screen_height / 3);
            $('.horizontal-view .join-video.single-user').css('min-height', screen_height / 3);

            $('.grid-view .join-video.single-user img').css('height', screen_height / 2);
            $('.grid-view .join-video.single-user').css('height', screen_height / 2);
            $('.grid-view .join-video.single-user').css('min-height', screen_height / 2);

            $('.vertical-view .join-video').css('height', (screen_height_vertical_view / 4) * 3);
            $('.vertical-view .join-video img').css('height', (screen_height_vertical_view / 4) * 3);

            $('.vertical-view .join-video.single-user img').css('height', screen_height / 4);
            $('.vertical-view .join-video.single-user').css('height', screen_height / 4);
            $('.vertical-view .join-video.single-user').css('min-height', screen_height / 4);

            $(".meeting-wrapper .join-contents.single-view").css("height", screen_height);
            $(".meeting-wrapper .join-contents.single-view .user-active img").css("height", screen_height);
            $('.join-contents.single-view .join-video.user-active').css('height', screen_height);

            if ($(window).width() < 768) {

                screen_height = $(window).height() - 232;
                screen_height_horizontal_view = $(window).height() - 232;

                $('.join-contents .join-video').css('height', screen_height_horizontal_view / 4);
                $('.join-contents .join-video img').css('height', screen_height_horizontal_view / 4);

                $('.join-contents .join-video.single-user img').css('height', screen_height / 4);
                $('.join-contents .join-video.single-user').css('height', screen_height / 4);
                $('.join-contents .join-video.single-user').css('min-height', screen_height / 4);

                $('.grid-view .join-video.single-user img').css('height', screen_height / 4);
                $('.grid-view .join-video.single-user').css('height', screen_height / 4);
                $('.grid-view .join-video.single-user').css('min-height', screen_height / 4);

                $('.vertical-view .join-video.single-user img').css('height', screen_height / 4);
                $('.vertical-view .join-video.single-user').css('height', screen_height / 4);
                $('.vertical-view .join-video.single-user').css('min-height', screen_height / 4);

                $(".meeting-wrapper .join-contents.single-view").css("height", screen_height);
                $(".meeting-wrapper .join-contents.single-view .user-active img").css("height", screen_height);
                $('.join-contents.single-view .join-video.user-active').css('height', screen_height);
            }
        }
        if ($('.page-content').length > 0) {
            resizeInnerDiv();
        }

        $(window).resize(function () {
            if ($('.page-content').length > 0) {
                resizeInnerDiv();
            }
        });
    })
    const pathname = window.location.pathname.split("/")[1];
    return (
        <>
            <div className="main-wrapper">
                {/* Header */}
                <Header />
                {/* /Header */}
                {/* Join Call */}
                <div className="page-content">
                    <div className="meeting">
                        <div className="meeting-wrapper">
                            <div className="join-contents single-view fade-whiteboard">
                                <div className="join-video user-active">
                                    <img
                                        src={Videocall}
                                        className="img-fluid"
                                        alt="Logo"
                                    />
                                    <div className="video-avatar">
                                        <div className="text-avatar">
                                            <div className="text-box">S</div>
                                        </div>
                                    </div>
                                    <div className="part-name">
                                        <h4>Shira</h4>
                                    </div>
                                    <div className="more-icon">
                                        <Link to="#" className="handraise-on">
                                            <i className="fas fa-hand-paper" />
                                        </Link>
                                        <Link to="#" className="mic-on">
                                            <i className="feather-more-horizontal" />
                                        </Link>
                                        <Link to="#" className="mic-off">
                                            <i className="feather-mic-off" />
                                        </Link>
                                    </div>
                                    <div className="overlay-icon">
                                        <Link to="#">
                                            <i className="fas fa-thumbtack" />
                                        </Link>
                                        <Link to="#">
                                            <i className="feather-mic-off" />
                                        </Link>
                                        <Link to="#">
                                            <i className="feather-minus-circle" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="join-video single-user">
                                    <img
                                        src={user01}
                                        className="img-fluid"
                                        alt="Logo"
                                    />
                                    <div className="part-name">
                                        <h4>Saba G</h4>
                                    </div>
                                    <div className="more-icon">
                                        <Link to="#">
                                            <i className="feather-mic-off" />
                                        </Link>
                                    </div>
                                    <div className="overlay-icon">
                                        <Link to="#">
                                            <i className="fas fa-thumbtack" />
                                        </Link>
                                        <Link to="#">
                                            <i className="feather-mic-off" />
                                        </Link>
                                        <Link to="#">
                                            <i className="feather-minus-circle" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* Whiteboard View */}
                            <div className="join-contents vertical-view show-whiteboard">
                                <div className="join-video user-active">
                                    <div className="whiteboard-sec">
                                        <div id="my-holder" />
                                    </div>
                                </div>
                                <div className="vertical-sec">
                                    <div className="join-video single-user">
                                        <img
                                            src={user01}
                                            className="img-fluid"
                                            alt="Logo"
                                        />
                                        <div className="part-name">
                                            <h4>Saba G</h4>
                                        </div>
                                        <div className="more-icon">
                                            <Link to="#">
                                                <i className="feather-mic-off" />
                                            </Link>
                                        </div>
                                        <div className="overlay-icon">
                                            <Link to="#">
                                                <i className="fas fa-thumbtack" />
                                            </Link>
                                            <Link to="#">
                                                <i className="feather-mic-off" />
                                            </Link>
                                            <Link to="#">
                                                <i className="feather-minus-circle" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* /Whiteboard View */}
                            {/* Meet Footer */}
                            <Footer />
                            {/* /Meet Footer */}
                        </div>
                    </div>
                </div>
                {/* /Join Call */}
                {/* Record */}
                <div className="show-record">
                    <p>
                        <i className="far fa-dot-circle text-danger" /> Recording
                    </p>
                    <p></p>
                </div>
                {/* /Record */}
                {/* Chat Right */}
                <div className="chat-cont-right user-sidebar-right">
                    <div className="chat-header">
                        <Link to="#" className="close-btn" id="chatClose">
                            <i className="feather-x" />
                        </Link>
                    </div>
                    <div className="message-body">
                        <div className="chat-body">
                            <div className="chat-scroll">
                                <ul className="list-unstyled">
                                    <li className="media received">
                                        <div className="avatar">
                                            <img
                                                src={user02}
                                                alt="User Image"
                                                className="avatar-img"
                                            />
                                        </div>
                                        <div className="media-body">
                                            <div className="msg-box">
                                                <ul className="chat-msg-info">
                                                    <li>
                                                        <div className="chat-time">
                                                            Linnea <span>8:35 AM</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div>
                                                    <p>
                                                        Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting industry
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="media received">
                                        <div className="avatar">
                                            <img
                                                src={user01}
                                                alt="User Image"
                                                className="avatar-img"
                                            />
                                        </div>
                                        <div className="media-body">
                                            <div className="msg-box">
                                                <ul className="chat-msg-info">
                                                    <li>
                                                        <div className="chat-time">
                                                            Saba G <span>12:00 PM</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div>
                                                    <p>
                                                        Lorem Ipsum has been the industry's standard dummy text
                                                        ever since the 1500s, when an unknown printer took a
                                                        galley of type and scrambled it to make a type specimen
                                                        book.{" "}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="media received">
                                        <div className="avatar person-view">A</div>
                                        <div className="media-body">
                                            <div className="msg-box">
                                                <ul className="chat-msg-info">
                                                    <li>
                                                        <div className="chat-time">
                                                            Akshay <span>12:00 PM</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div>
                                                    <p>
                                                        Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting industry
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="media sent">
                                        <div className="media-body">
                                            <div className="msg-box">
                                                <ul className="chat-msg-info">
                                                    <li>
                                                        <div className="chat-time">
                                                            You <span>12:00 PM</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div>
                                                    <p>
                                                        Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting industry
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="chat-footer">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="input-msg-send form-control"
                                    placeholder="Type Message..."
                                />
                                <div className="input-group-append">
                                    <button type="button" className="btn msg-send-btn">
                                        <i className="fab fa-telegram-plane" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Chat Right */}
                {/* Invite People */}
                <div className="chat-cont-right invite-sidebar-right">
                    <div className="chat-header">
                        <div className="heading-text">Invite Someone</div>
                        <Link to="#" className="close-btn" id="InviteClose">
                            <i className="feather-x" />
                        </Link>
                    </div>
                    <div className="message-body">
                        <div className="chat-body">
                            <div className="chat-scroll">
                                <ul className="add-list">
                                    <li className="add-listitem user-active">
                                        <div className="person-info">
                                            <img
                                                src={Videocall}
                                                alt="User Image"
                                                className="avatar-img"
                                            />
                                            <div className="person-name">Shira</div>
                                        </div>
                                        <div className="list-body">
                                            <ul className="action-info">
                                                <li>
                                                    <Link to="#" className="mute-vid">
                                                        <i className="feather-video" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="mute-mic">
                                                        <i className="feather-mic" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="add-listitem">
                                        <div className="person-info">
                                            <img
                                                src={user02}
                                                alt="User Image"
                                                className="avatar-img"
                                            />
                                            <div className="person-name">Linnea</div>
                                        </div>
                                        <div className="list-body">
                                            <ul className="action-info">
                                                <li>
                                                    <Link to="#" className="mute-vid">
                                                        <i className="feather-video" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="mute-mic">
                                                        <i className="feather-mic" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="add-listitem">
                                        <div className="person-info">
                                            <img
                                                src={user01}
                                                alt="User Image"
                                                className="avatar-img"
                                            />
                                            <div className="person-name">Saba G</div>
                                        </div>
                                        <div className="list-body">
                                            <ul className="action-info">
                                                <li>
                                                    <Link to="#" className="mute-vid">
                                                        <i className="feather-video" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="mute-mic">
                                                        <i className="feather-mic" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="add-listitem">
                                        <div className="person-info">
                                            <div className="person-view">A</div>
                                            <div className="person-name">Akshay</div>
                                        </div>
                                        <div className="list-body">
                                            <ul className="action-info">
                                                <li>
                                                    <Link to="#" className="mute-vid text-primary">
                                                        <i className="feather-video-off" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="mute-mic">
                                                        <i className="feather-mic" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="chat-footer d-grid">
                            <button type="button" className="btn heading-text">
                                Invite Someone
                            </button>
                        </div>
                    </div>
                </div>
                {/* /Invite People */}
            </div>

        </>
    )
}
export default Meetingsingleuser;    
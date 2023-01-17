import React,{ Component } from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

import Avatar2 from '../../assets/img/avatar/avatar-2.jpg';
import Avatar3 from '../../assets/img/avatar/avatar-3.jpg';
import Avatar4 from '../../assets/img/avatar/avatar-4.jpg';
import Avatar7 from '../../assets/img/avatar/avatar-7.jpg';
import Avatar8 from '../../assets/img/avatar/avatar-8.jpg';
import Avatar13 from '../../assets/img/avatar/avatar-13.jpg';

const Topactivemember = () => {
  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    slidesPerView: 4,
	  spaceBetween: 15,
  }
 
  return(
    <Swiper {...params}>
      	<div>
      		<div className="top-contacts-box">
	            <div className="profile-img online">
	                <img src={Avatar8} alt="" />
	            </div>
	            <div className="profile-name">
	                <span>helen</span>
	            </div>
        	</div>
      	</div>
      	<div>
			<div className="top-contacts-box">
                <div className="profile-img online">
                    <img src={Avatar7} alt="" />
                </div>
                <div className="profile-name">
                    <span>Prince</span>
                </div>
            </div>      	
      	</div>
      	<div>
      		<div className="top-contacts-box">
	            <div className="profile-img online">
	                <img src={Avatar13} alt="" />
	            </div>
	            <div className="profile-name">
	                <span>Nathan</span>
	            </div>
	        </div>
      	</div>
      	<div>
      		 <div className="top-contacts-box">
                <div className="profile-img online">
                    <img src={Avatar3} alt="" />
                </div>
                <div className="profile-name">
                    <span>Maria</span>
                </div>
            </div>
      	</div>
      	<div>
      		<div className="top-contacts-box">
                <div className="profile-img online">
                    <img src={Avatar4} alt="" />
                </div>
                <div className="profile-name">
                    <span>Prince</span>
                </div>
            </div>
      	</div>
      	<div>
      		<div className="top-contacts-box">
                <div className="profile-img online">
                    <img src={Avatar2} alt="" />
                </div>
                <div className="profile-name">
                    <span>Maria</span>
                </div>
            </div>
      	</div>
    </Swiper>
  )
}

export default Topactivemember;
<template>
<!-- Left Sidebar Menu -->
            <div class="sidebar-menu">
                <div class="logo-col">
                    <router-link to="/index"><img src="../../assets/img/logo.png" alt=""></router-link>
                </div>
                <div class="menus-col">
                    <div class="chat-menus">
                        <ul>
                            <li>
                                <router-link to="/index" class="chat-unread blue">
                                    <span class="material-icons">message</span>
                                    <span>Chats</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/group" class="chat-unread pink">
                                    <span class="material-icons">group</span>
                                    <span>Groups</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/status" class="chat-unread">
                                    <span class="material-icons">library_books</span>
                                    <span>Status</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/audio-call" class="chat-unread">
                                    <span class="material-icons">call</span>
                                    <span>Calls</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/settings" class="chat-unread">
                                    <span class="material-icons">settings</span>
                                    <span>Settings</span>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="bottom-menus">
                        <ul>
                            <li>
                                <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add-new-group">
                                    <span class="material-icons group-add-btn">group_add</span>
                                    <span>Add Groups</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="add-contacts-btn" data-bs-toggle="modal" data-bs-target="#add-contact">
                                    <i class="fas fa-plus"></i>
                                    <span>Add Contacts</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" id="dark-mode-toggle" class="dark-mode-toggle">
                                    <i class="far fa-moon"></i>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="chat-profile-icon" data-bs-toggle="dropdown">
                                    <img src="../../assets/img/avatar/avatar-13.jpg" alt="">
                                </a>
                                <div class="dropdown-menu dropdown-menu-end">
                                    <a href="javascript:void(0);" class="dropdown-item dream_profile_menu">Edit Profile <span class="edit-profile-icon"><i class="fas fa-edit"></i></span></a>
                                    <a href="javascript:void(0);" class="dropdown-item">Profile <span class="profile-icon-col"><i class="fas fa-id-card-alt"></i></span></a>
                                    <router-link to="/settings" class="dropdown-item">Settings <span class="material-icons">settings</span></router-link>
                                    <router-link to="/archived" class="dropdown-item">Archived <span class="material-icons">flag</span></router-link>
                                    <router-link to="/login-email" class="dropdown-item">Logout <span class="material-icons">power_settings_new</span></router-link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- /Left Sidebar Menu -->
</template>
            <script>
    export default {
        mounted() {
 $(document).ready(function(){
        if(window.location.hash == "#DarkMode"){
            document.body.classList.add('darkmode');
            localStorage.setItem('darkMode', 'enabled');
        }
    });
    
    // DarkMode with LocalStorage
    if($('#dark-mode-toggle').length > 0) {
        let darkMode = localStorage.getItem('darkMode'); 
        
        const darkModeToggle = document.querySelector('#dark-mode-toggle');
        
        const enableDarkMode = () => {
          document.body.classList.add('darkmode');
          localStorage.setItem('darkMode', 'enabled');
        }

        const disableDarkMode = () => {
          document.body.classList.remove('darkmode');
          localStorage.setItem('darkMode', null);
        }
         
        if (darkMode === 'enabled') {
          enableDarkMode();
        }

        darkModeToggle.addEventListener('click', () => {
          darkMode = localStorage.getItem('darkMode'); 
          
          if (darkMode !== 'enabled') {
            enableDarkMode();
          } else {  
            disableDarkMode(); 
          }
        });
    }
 
    }
}
    </script>
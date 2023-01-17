<template>
<!-- Voice call -->
            <div class="modal fade voice_pop" id="voice_call" role="document">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content voice_content ms-3">
                        <div class="modal-body voice_body">
                            <div class="call-box incoming-box">
                                <div class="call-wrapper">
                                    <div class="call-inner">
                                        <div class="call-user">
                                            <img alt="User Image" src="../../assets/img/avatar-2.jpg" class="call-avatar">
                                            <h4>Tobbias Williams</h4>
                                            <span class="chat_cal">calling...</span>
                                        </div>
                                        <div class="call-items">
                                            <a href="javascript:void(0);" class="btn call-item call-end" data-bs-dismiss="modal">
                                                <i class="fas fa-phone-alt phone_icon"></i></a>
                                            <a href="javascript:void(0);" class="btn call-item call-start" data-bs-dismiss="modal"> <i
                                                    class="fas fa-phone-alt"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Voice call -->

            <!-- Video Call -->
            <div class="modal fade voice_pop" id="video_call" role="document">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content voice_content ms-3">
                        <div class="modal-body voice_body">
                            <div class="call-box incoming-box">
                                <div class="call-wrapper">
                                    <div class="call-inner">
                                        <div class="call-user">
                                            <img alt="User Image" src="../../assets/img/avatar-2.jpg" class="call-avatar">
                                            <h4>Tobbias Williams</h4>
                                            <span class="chat_cal">calling...</span>
                                        </div>
                                        <div class="call-items">
                                            <a href="javascript:void(0);" class="btn call-item call-end" data-bs-dismiss="modal"><i
                                                    class="fas fa-phone-alt phone_icon"></i></a>
                                            <a href="" class="btn call-item call-start" data-bs-dismiss="modal">
                                                <i class="fas fa-video"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Video Call -->

            <!-- New group modal -->
            <div class="modal fade" id="new_group">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">
                                New Group
                            </h5>
                            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                <i class="fas fa-times close_icon"></i>
                            </button>
                        </div>
                        <div class="modal-body">
                            <!-- Tabs -->
                            <ul class="nav nav-tabs nav-justified newgroup_ul mt-0" role="tablist">
                                <li class="nav-item">
                                    <a href="#create-group-details" class="nav-link active" data-bs-toggle="tab" role="tab" aria-selected="true">Details</a>
                                </li>

                                <li class="nav-item">
                                    <a href="#create-group-members" class="nav-link" data-bs-toggle="tab" role="tab" aria-selected="false">Members</a>
                                </li>
                            </ul>
                            <!-- Tabs -->   
                            <!-- Create chat -->
                            <div class="tab-content" role="tablist">
                                <!-- Chat details -->
                                <div id="create-group-details" class="tab-pane fade show active"
                                    role="tabpanel">
                                    <form action="#">
                                        <div class="form-group">
                                            <label>Name</label>
                                            <input class="form-control form-control-lg group_formcontrol" name="new-chat-title" type="text" placeholder="Group Name">
                                        </div>
                                        <div class="form-group">
                                            <label for="new-chat-topic">Topic (optional)</label>
                                            <input class="form-control form-control-lg group_formcontrol" name="new-chat-topic" id="new-chat-topic" type="text" placeholder="Group Topic">
                                        </div>
                                        <div class="form-group mb-0">
                                            <label for="new-chat-description">Description</label>
                                            <textarea class="form-control form-control-lg group_control_text" name="new-chat-description" id="new-chat-description" rows="6" placeholder="Group Description"></textarea>
                                        </div>
                                    </form>
                                </div>
                                <!-- Chat details -->
                                
                                <!-- Chat Members -->
                                <div id="create-group-members" class="tab-pane fade create-group-members" role="tabpanel">
                                    <nav class="list-group list-group-flush mb-n6">
                                        <!-- Search -->
                                        <form class="mb-3 newgroup_content">
                                            <div class="input-group">
                                                <input type="text" class="form-control form-control-lg newgroup_search" placeholder="Search for messages or users..." aria-label="Search for messages or users...">
                                                <button class="btn btn-lg btn-ico btn-secondary btn-minimal newgroup_search_btn" type="submit">
                                                    <i class="fas fa-search newgroup_fa_search"></i>
                                                </button>
                                            </div>
                                        </form>
                                        <!-- Search -->
                                        <div class="mb-6">
                                            <small class="text-uppercase">A</small>
                                        </div>
                                        <!-- Friend -->
                                        <div class="card mb-6 group_card_mb">
                                            <div class="card-body">
                                                <div class="media d-flex">
                                                    <div class="avatar avatar-online me-5 flex-shrink-0">
                                                        <img class="avatar-img group_image" src="../../assets/img/avatar-7.jpg" alt="Anna Bridges">
                                                    </div>
                                                    <div
                                                        class="media-body align-self-center me-6 group_card_media flex-grow-1">
                                                        <h6 class="mb-0">Anna Bridges</h6>
                                                        <small class="text-muted">Online</small>
                                                    </div>
                                                    <div class="align-self-center ms-auto">
                                                        <div class="form-check form-checkbox">
                                                            <input class="form-check-input" id="id-user-1" type="checkbox">
                                                            <label class="form-check-label" for="id-user-1"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Label -->
                                            <label class="stretched-label" for="id-user-1"></label>
                                        </div>
                                        <!-- Friend -->
                                        <div class="mb-6">
                                            <small class="text-uppercase">B</small>
                                        </div>
                                        <!-- Friend -->
                                        <div class="card mb-6 group_card_mb">
                                            <div class="card-body">
                                                <div class="media d-flex">
                                                    <div class="avatar me-5 flex-shrink-0">
                                                        <img class="avatar-img group_image" src="../../assets/img/avatar-1.jpg" alt="Brian Dawson">
                                                    </div>
                                                    <div class="media-body align-self-center me-6 group_card_media flex-grow-1">
                                                        <h6 class="mb-0">Brian Dawson</h6>
                                                        <small class="text-muted">last seen 2 hours ago</small>
                                                    </div>
                                                    <div class="align-self-center ms-auto">
                                                        <div class="form-check form-checkbox">
                                                            <input class="form-check-input" id="id-user-2" type="checkbox">
                                                            <label class="form-check-label" for="id-user-2"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Label -->
                                            <label class="stretched-label" for="id-user-2"></label>
                                        </div>
                                        <!-- Friend -->
                                        <div class="mb-6">
                                            <small class="text-uppercase">L</small>
                                        </div>
                                        <!-- Friend -->
                                        <div class="card mb-6 group_card_mb">
                                            <div class="card-body">
                                                <div class="media d-flex">
                                                    <div class="avatar me-5 flex-shrink-0">
                                                        <img class="avatar-img group_image" src="../../assets/img/avatar-2.jpg" alt="Leslie Sutton">
                                                    </div>
                                                    <div class="media-body align-self-center me-6 group_card_media flex-grow-1">
                                                        <h6 class="mb-0">Leslie Sutton</h6>
                                                        <small class="text-muted">last seen 3 days ago</small>
                                                    </div>
                                                    <div class="align-self-center ms-auto">
                                                        <div class="form-check form-checkbox">
                                                            <input class="form-check-input" id="id-user-3" type="checkbox">
                                                            <label class="form-check-label" for="id-user-3"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Label -->
                                            <label class="stretched-label" for="id-user-3"></label>
                                        </div>
                                        <!-- Friend -->
                                        <div class="mb-6">
                                            <small class="text-uppercase">M</small>
                                        </div>
                                        <!-- Friend -->
                                        <div class="card mb-6 group_card_mb">
                                            <div class="card-body">
                                                <div class="media d-flex">
                                                    <div class="avatar me-5 flex-shrink-0">
                                                        <img class="avatar-img group_image" src="../../assets/img/avatar-3.jpg" alt="Matthew Wiggins">
                                                    </div>
                                                    <div class="media-body align-self-center me-6 group_card_media flex-grow-1">
                                                        <h6 class="mb-0">Matthew Wiggins</h6>
                                                        <small class="text-muted">last seen 3 days ago</small>
                                                    </div>
                                                    <div class="align-self-center ms-auto">
                                                        <div class="form-check form-checkbox">
                                                            <input class="form-check-input" id="id-user-4" type="checkbox">
                                                            <label class="form-check-label" for="id-user-4"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Label -->
                                            <label class="stretched-label" for="id-user-4"></label>
                                        </div>
                                        <!-- Friend -->
                                        <div class="mb-6">
                                            <small class="text-uppercase">S</small>
                                        </div>
                                        <!-- Friend -->
                                        <div class="card mb-6 group_card_mb">
                                            <div class="card-body">
                                                <div class="media d-flex">
                                                    <div class="avatar me-5 flex-shrink-0">
                                                        <img class="avatar-img group_image" src="../../assets/img/avatar-4.jpg" alt="Simon Hensley">
                                                    </div>
                                                    <div class="media-body align-self-center me-6 group_card_media flex-grow-1">
                                                        <h6 class="mb-0">Simon Hensley</h6>
                                                        <small class="text-muted">last seen 3 days ago</small>
                                                    </div>
                                                    <div class="align-self-center ms-auto">
                                                        <div class="form-check form-checkbox">
                                                            <input class="form-check-input" id="id-user-5" type="checkbox">
                                                            <label class="form-check-label" for="id-user-5"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Label -->
                                            <label class="stretched-label" for="id-user-5"></label>
                                        </div>
                                        <!-- Friend -->
                                        <div class="mb-6">
                                            <small class="text-uppercase">W</small>
                                        </div>
                                        <!-- Friend -->
                                        <div class="card mb-6 group_card_mb">
                                            <div class="card-body">
                                                <div class="media d-flex">
                                                    <div class="avatar me-5 flex-shrink-0">
                                                        <img class="avatar-img group_image" src="../../assets/img/avatar-5.jpg" alt="William Wright">
                                                    </div>
                                                    <div class="media-body align-self-center me-6 group_card_media flex-grow-1">
                                                        <h6 class="mb-0">William Wright</h6>
                                                        <small class="text-muted">last seen 3 days ago</small>
                                                    </div>
                                                    <div class="align-self-center ms-auto">
                                                        <div class="form-check form-checkbox">
                                                            <input class="form-check-input" id="id-user-6" type="checkbox">
                                                            <label class="form-check-label" for="id-user-6"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Label -->
                                            <label class="stretched-label" for="id-user-6"></label>
                                        </div>
                                        <!-- Friend -->
                                        <!-- Friend -->
                                        <div class="card mb-6 group_card_mb">
                                            <div class="card-body">
                                                <div class="media d-flex">
                                                    <div class="avatar me-5 flex-shrink-0">
                                                        <img class="avatar-img group_image" src="../../assets/img/avatar-6.png" alt="William Greer">
                                                    </div>
                                                    <div class="media-body align-self-center me-6 group_card_media flex-grow-1">
                                                        <h6 class="mb-0">William Greer</h6>
                                                        <small class="text-muted">last seen 10 minutes ago</small>
                                                    </div>
                                                    <div class="align-self-center ms-auto">
                                                        <div class="form-check form-checkbox">
                                                            <input class="form-check-input" id="id-user-7" type="checkbox">
                                                            <label class="form-check-label" for="id-user-7"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Label -->
                                            <label class="stretched-label" for="id-user-7"></label>
                                        </div>
                                        <!-- Friend -->
                                        <div class="mb-6">
                                            <small class="text-uppercase">Z</small>
                                        </div>
                                        <!-- Friend -->
                                        <div class="card mb-6 group_card_mb">
                                            <div class="card-body">
                                                <div class="media d-flex">
                                                    <div class="avatar me-5 flex-shrink-0">
                                                        <img class="avatar-img group_image" src="../../assets/img/avatar-8.jpg" alt="Zane Mayes">
                                                    </div>
                                                    <div
                                                        class="media-body align-self-center me-6 group_card_media flex-grow-1">
                                                        <h6 class="mb-0">Zane Mayes</h6>
                                                        <small class="text-muted">last seen 3 days ago</small>
                                                    </div>
                                                    <div class="align-self-center ms-auto">
                                                        <div class="form-check form-checkbox">
                                                            <input class="form-check-input" id="id-user-8" type="checkbox">
                                                            <label class="form-check-label" for="id-user-8"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Label -->
                                            <label class="stretched-label" for="id-user-8"></label>
                                        </div>
                                        <!-- Friend -->
                                    </nav>
                                </div>
                                <!-- Chat Members -->
                            </div>
                            <!-- Create chat -->
                            <!-- Button -->
                            <div class="pt-3">
                                <div class="container text-center">
                                    <button class="btn newgroup_create mb-1 mt-0" type="submit" data-bs-dismiss="modal">Create group</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /New group modal -->

            <!-- New call modal -->
            <div class="modal fade" id="audiocallmodal">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">
                                Call
                            </h5>
                            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                <i class="fas fa-times close_icon"></i>
                            </button>
                        </div>
                        <div class="modal-body">
                            <!-- Tabs -->
                            <ul class="nav nav-tabs nav-justified newgroup_ul mt-0" role="tablist">
                                <li class="nav-item">
                                    <a href="#create-group-details" class="nav-link active"
                                        data-bs-toggle="tab" role="tab" aria-selected="true">Members</a>
                                </li>
                            </ul>
                            <!-- Tabs -->
                            <!-- Create chat -->
                            <div class="tab-content" role="tablist">
                                <!-- Chat details -->
                                <div class="tab-pane fade show active"
                                    role="tabpanel">
                                    <!-- Chat Members -->
                                    <nav class="list-group list-group-flush mb-n6">
                                        <!-- Search -->
                                        <form class="mb-3 newgroup_content">
                                            <div class="input-group">
                                                <input type="text" class="form-control form-control-lg newgroup_search"
                                                    placeholder="Search for messages or users..."
                                                    aria-label="Search for messages or users...">
                                                <button
                                                    class="btn btn-lg btn-ico btn-secondary btn-minimal newgroup_search_btn"
                                                    type="submit">
                                                    <i class="fas fa-search newgroup_fa_search"></i>
                                                </button>
                                            </div>
                                        </form>
                                        <!-- Search -->
                                        <div class="mb-6">
                                            <small class="text-uppercase">A</small>
                                        </div>
                                        <!-- Friend -->
                                        <div class="card mb-6 group_card_mb">
                                            <div class="card-body">
                                                <div class="media d-flex">
                                                    <div class="avatar avatar-online me-5 flex-shrink-0">
                                                        <img class="avatar-img group_image"
                                                            src="../../assets/img/avatar-7.jpg" alt="Anna Bridges">
                                                    </div>
                                                    <div
                                                        class="media-body align-self-center me-6 group_card_media flex-grow-1">
                                                        <h6 class="mb-0">Anna Bridges</h6>
                                                        <small class="text-muted">Online</small>
                                                    </div>
                                                    <div class="align-self-center ms-auto members-call">
                                                        <ul class="list-inline">
                                                            <li class="list-inline-item" data-bs-toggle="tooltip" title=""
                                                                data-original-title="Voice call">
                                                                <a href="javascript:void(0)" class="btn btn-outline-light" data-bs-toggle="modal"
                                                                    data-bs-target="#voice_call" data-bs-dismiss="modal">
                                                                    <i class="fas fa-phone-alt"></i>
                                                                </a>
                                                            </li>
                                                            <li class="list-inline-item" data-bs-toggle="tooltip" title=""
                                                                data-original-title="Video call">
                                                                <a href="javascript:void(0)" class="btn btn-outline-light" data-bs-toggle="modal"
                                                                    data-bs-target="#voice_call" data-bs-dismiss="modal">
                                                                    <i class="fas fa-video"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Label -->
                                            <label class="stretched-label" for="id-user-1"></label>
                                        </div>
                                        <!-- Friend -->
                                        <div class="mb-6">
                                            <small class="text-uppercase">B</small>
                                        </div>
                                        <!-- Friend -->
                                        <div class="card mb-6 group_card_mb">
                                            <div class="card-body">
                                                <div class="media d-flex">
                                                    <div class="avatar me-5 flex-shrink-0">
                                                        <img class="avatar-img group_image"
                                                            src="../../assets/img/avatar-1.jpg"
                                                            alt="Brian Dawson">
                                                    </div>
                                                    <div
                                                        class="media-body align-self-center me-6 group_card_media flex-grow-1">
                                                        <h6 class="mb-0">Brian Dawson</h6>
                                                        <small class="text-muted">last seen 2 hours
                                                            ago</small>
                                                    </div>
                                                    <div class="align-self-center ms-auto members-call">
                                                        <ul class="list-inline">
                                                            <li class="list-inline-item" data-bs-toggle="tooltip" title=""
                                                                data-original-title="Voice call">
                                                                <a href="javascript:void(0)" class="btn btn-outline-light" data-bs-toggle="modal"
                                                                    data-bs-target="#voice_call" data-bs-dismiss="modal">
                                                                    <i class="fas fa-phone-alt"></i>
                                                                </a>
                                                            </li>
                                                            <li class="list-inline-item" data-bs-toggle="tooltip" title=""
                                                                data-original-title="Video call">
                                                                <a href="javascript:void(0)" class="btn btn-outline-light" data-bs-toggle="modal"
                                                                    data-bs-target="#voice_call" data-bs-dismiss="modal">
                                                                    <i class="fas fa-video"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Label -->
                                            <label class="stretched-label" for="id-user-2"></label>
                                        </div>
                                        <!-- Friend -->
                                        <div class="mb-6">
                                            <small class="text-uppercase">L</small>
                                        </div>
                                        <!-- Friend -->
                                        <div class="card mb-6 group_card_mb">
                                            <div class="card-body">
                                                <div class="media d-flex">
                                                    <div class="avatar me-5 flex-shrink-0">
                                                        <img class="avatar-img group_image"
                                                            src="../../assets/img/avatar-2.jpg"
                                                            alt="Leslie Sutton">
                                                    </div>
                                                    <div
                                                        class="media-body align-self-center me-6 group_card_media flex-grow-1">
                                                        <h6 class="mb-0">Leslie Sutton</h6>
                                                        <small class="text-muted">last seen 3 days
                                                            ago</small>
                                                    </div>
                                                    <div class="align-self-center ms-auto members-call">
                                                        <ul class="list-inline">
                                                            <li class="list-inline-item" data-bs-toggle="tooltip" title=""
                                                                data-original-title="Voice call">
                                                                <a href="javascript:void(0)" class="btn btn-outline-light" data-bs-toggle="modal"
                                                                    data-bs-target="#voice_call" data-bs-dismiss="modal">
                                                                    <i class="fas fa-phone-alt"></i>
                                                                </a>
                                                            </li>
                                                            <li class="list-inline-item" data-bs-toggle="tooltip" title=""
                                                                data-original-title="Video call">
                                                                <a href="javascript:void(0)" class="btn btn-outline-light" data-bs-toggle="modal"
                                                                    data-bs-target="#voice_call" data-bs-dismiss="modal">
                                                                    <i class="fas fa-video"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Label -->
                                            <label class="stretched-label" for="id-user-3"></label>
                                        </div>
                                        <!-- Friend -->
                                        <div class="mb-6">
                                            <small class="text-uppercase">M</small>
                                        </div>
                                        <!-- Friend -->
                                        <div class="card mb-6 group_card_mb">
                                            <div class="card-body">
                                                <div class="media d-flex">
                                                    <div class="avatar me-5 flex-shrink-0">
                                                        <img class="avatar-img group_image"
                                                            src="../../assets/img/avatar-3.jpg"
                                                            alt="Matthew Wiggins">
                                                    </div>
                                                    <div
                                                        class="media-body align-self-center me-6 group_card_media flex-grow-1">
                                                        <h6 class="mb-0">Matthew Wiggins</h6>
                                                        <small class="text-muted">last seen 3 days
                                                            ago</small>
                                                    </div>
                                                    <div class="align-self-center ms-auto members-call">
                                                        <ul class="list-inline">
                                                            <li class="list-inline-item" data-bs-toggle="tooltip" title=""
                                                                data-original-title="Voice call">
                                                                <a href="javascript:void(0)" class="btn btn-outline-light" data-bs-toggle="modal"
                                                                    data-bs-target="#voice_call" data-bs-dismiss="modal">
                                                                    <i class="fas fa-phone-alt"></i>
                                                                </a>
                                                            </li>
                                                            <li class="list-inline-item" data-bs-toggle="tooltip" title=""
                                                                data-original-title="Video call">
                                                                <a href="javascript:void(0)" class="btn btn-outline-light" data-bs-toggle="modal"
                                                                    data-bs-target="#voice_call" data-bs-dismiss="modal">
                                                                    <i class="fas fa-video"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Label -->
                                            <label class="stretched-label" for="id-user-4"></label>
                                        </div>
                                        <!-- Friend -->
                                        <div class="mb-6">
                                            <small class="text-uppercase">S</small>
                                        </div>
                                        <!-- Friend -->
                                        <div class="card mb-6 group_card_mb">
                                            <div class="card-body">
                                                <div class="media d-flex">
                                                    <div class="avatar me-5 flex-shrink-0">
                                                        <img class="avatar-img group_image"
                                                            src="../../assets/img/avatar-4.jpg"
                                                            alt="Simon Hensley">
                                                    </div>
                                                    <div
                                                        class="media-body align-self-center me-6 group_card_media flex-grow-1">
                                                        <h6 class="mb-0">Simon Hensley</h6>
                                                        <small class="text-muted">last seen 3 days
                                                            ago</small>
                                                    </div>
                                                    <div class="align-self-center ms-auto members-call">
                                                        <ul class="list-inline">
                                                            <li class="list-inline-item" data-bs-toggle="tooltip" title=""
                                                                data-original-title="Voice call">
                                                                <a href="javascript:void(0)" class="btn btn-outline-light" data-bs-toggle="modal"
                                                                    data-bs-target="#voice_call" data-bs-dismiss="modal">
                                                                    <i class="fas fa-phone-alt"></i>
                                                                </a>
                                                            </li>
                                                            <li class="list-inline-item" data-bs-toggle="tooltip" title=""
                                                                data-original-title="Video call">
                                                                <a href="javascript:void(0)" class="btn btn-outline-light" data-bs-toggle="modal"
                                                                    data-bs-target="#voice_call" data-bs-dismiss="modal">
                                                                    <i class="fas fa-video"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Label -->
                                            <label class="stretched-label" for="id-user-5"></label>
                                        </div>
                                        <!-- Friend -->
                                        <div class="mb-6">
                                            <small class="text-uppercase">W</small>
                                        </div>
                                        <!-- Friend -->
                                        <div class="card mb-6 group_card_mb">
                                            <div class="card-body">
                                                <div class="media d-flex">
                                                    <div class="avatar me-5 flex-shrink-0">
                                                        <img class="avatar-img group_image"
                                                            src="../../assets/img/avatar-5.jpg"
                                                            alt="William Wright">
                                                    </div>
                                                    <div
                                                        class="media-body align-self-center me-6 group_card_media flex-grow-1">
                                                        <h6 class="mb-0">William Wright</h6>
                                                        <small class="text-muted">last seen 3 days
                                                            ago</small>
                                                    </div>
                                                    <div class="align-self-center ms-auto members-call">
                                                        <ul class="list-inline">
                                                            <li class="list-inline-item" data-bs-toggle="tooltip" title=""
                                                                data-original-title="Voice call">
                                                                <a href="javascript:void(0)" class="btn btn-outline-light" data-bs-toggle="modal"
                                                                    data-bs-target="#voice_call" data-bs-dismiss="modal">
                                                                    <i class="fas fa-phone-alt"></i>
                                                                </a>
                                                            </li>
                                                            <li class="list-inline-item" data-bs-toggle="tooltip" title=""
                                                                data-original-title="Video call">
                                                                <a href="javascript:void(0)" class="btn btn-outline-light" data-bs-toggle="modal"
                                                                    data-bs-target="#voice_call" data-bs-dismiss="modal">
                                                                    <i class="fas fa-video"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Label -->
                                            <label class="stretched-label" for="id-user-6"></label>
                                        </div>
                                        <!-- Friend -->
                                        <!-- Friend -->
                                        <div class="card mb-6 group_card_mb">
                                            <div class="card-body">
                                                <div class="media d-flex">
                                                    <div class="avatar me-5 flex-shrink-0">
                                                        <img class="avatar-img group_image"
                                                            src="../../assets/img/avatar-6.png" alt="William Greer">
                                                    </div>
                                                    <div
                                                        class="media-body align-self-center me-6 group_card_media flex-grow-1">
                                                        <h6 class="mb-0">William Greer</h6>
                                                        <small class="text-muted">last seen 10 minutes
                                                            ago</small>
                                                    </div>
                                                    <div class="align-self-center ms-auto members-call">
                                                        <ul class="list-inline">
                                                            <li class="list-inline-item" data-bs-toggle="tooltip" title=""
                                                                data-original-title="Voice call">
                                                                <a href="javascript:void(0)" class="btn btn-outline-light" data-bs-toggle="modal"
                                                                    data-bs-target="#voice_call" data-bs-dismiss="modal">
                                                                    <i class="fas fa-phone-alt"></i>
                                                                </a>
                                                            </li>
                                                            <li class="list-inline-item" data-bs-toggle="tooltip" title=""
                                                                data-original-title="Video call">
                                                                <a href="javascript:void(0)" class="btn btn-outline-light" data-bs-toggle="modal"
                                                                    data-bs-target="#voice_call" data-bs-dismiss="modal">
                                                                    <i class="fas fa-video"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Label -->
                                            <label class="stretched-label" for="id-user-7"></label>
                                        </div>
                                        <!-- Friend -->
                                        <div class="mb-6">
                                            <small class="text-uppercase">Z</small>
                                        </div>
                                        <!-- Friend -->
                                        <div class="card mb-6 group_card_mb">
                                            <div class="card-body">
                                                <div class="media d-flex">
                                                    <div class="avatar me-5 flex-shrink-0">
                                                        <img class="avatar-img group_image"
                                                            src="../../assets/img/avatar-8.jpg" alt="Zane Mayes">
                                                    </div>
                                                    <div
                                                        class="media-body align-self-center me-6 group_card_media flex-grow-1">
                                                        <h6 class="mb-0">Zane Mayes</h6>
                                                        <small class="text-muted">last seen 3 days
                                                            ago</small>
                                                    </div>
                                                    <div class="align-self-center ms-auto members-call">
                                                        <ul class="list-inline">
                                                            <li class="list-inline-item" data-bs-toggle="tooltip" title=""
                                                                data-original-title="Voice call">
                                                                <a href="javascript:void(0)" class="btn btn-outline-light" data-bs-toggle="modal"
                                                                    data-bs-target="#voice_call" data-bs-dismiss="modal">
                                                                    <i class="fas fa-phone-alt"></i>
                                                                </a>
                                                            </li>
                                                            <li class="list-inline-item" data-bs-toggle="tooltip" title=""
                                                                data-original-title="Video call">
                                                                <a href="javascript:void(0)" class="btn btn-outline-light" data-bs-toggle="modal"
                                                                    data-bs-target="#voice_call" data-bs-dismiss="modal">
                                                                    <i class="fas fa-video"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Label -->
                                            <label class="stretched-label" for="id-user-8"></label>
                                        </div>
                                        <!-- Friend -->
                                    </nav>
                                <!-- Chat Members -->
                                </div>
                                <!-- Chat details -->
                            </div>
                            <!-- Create chat -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- /New call modal -->

            <!-- Profile Modal -->
            <div class="modal fade" id="profile_modal">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">
                                Profile
                            </h5>
                            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                <i class="fas fa-times close_icon"></i>
                            </button>
                        </div>
                        <div class="modal-body">
                            <!-- Card -->
                            <div class="card mb-6 profile_Card">
                                <div class="card-body">
                                    <div class="text-center py-6">
                                        <!-- Photo -->
                                        <div class="avatar avatar-xl mb-3">
                                            <img class="avatar-img rounded-circle mCS_img_loaded" src="../../assets/img/avatar-5.jpg" alt="">
                                        </div>
                                        <h5>John Janousek</h5>
                                        <p class="text-muted m-0">Last seen: Today</p>
                                    </div>
                                </div>
                            </div>
                            <!-- Card -->
                            <!-- Card -->
                            <form action="#" class="mt-3">
                                <div class="form-group">
                                    <label>Country</label>
                                    <input class="form-control form-control-lg group_formcontrol" name="new-chat-title" type="text" placeholder="Country Name">
                                </div>
                                <div class="form-group">
                                    <label>Phone</label>
                                    <input class="form-control form-control-lg group_formcontrol" name="new-chat-title" type="text" placeholder="+39 02 87 21 43 19">
                                </div>
                                <div class="form-group">
                                    <label>Email</label>
                                    <input class="form-control form-control-lg group_formcontrol" name="new-chat-title" type="email" placeholder="johnjanousek@gmail.com">
                                </div>
                            </form>
                            <!-- Card -->
                            <div class="form-row profile_form mt-3 mb-1">
                                <!-- Button -->
                                <button type="button" class="btn newgroup_create mb-0" data-bs-dismiss="modal">
                                    Update Profile
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Profile Modal -->

            <!-- Settings Modal -->
            <div class="modal fade" id="settings_modal">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">
                                Settings
                            </h5>
                            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                <i class="fas fa-times close_icon"></i>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="card-header position-relative account_details">
                                <a href="javascript:void(0);" class="text-reset d-block stretched-link collapsed">
                                    <div class="row no-gutters align-items-center">
                                        <!-- Title -->
                                        <div class="col">
                                            <h5>Account</h5>
                                            <p class="m-0">Update your profile details.</p>
                                        </div>
                                        <!-- Icon -->
                                        <div class="col-auto">
                                            <i class="text-muted icon-md fas fa-user"></i>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="card-header position-relative mt-3 security_details">
                                <a href="javascript:void(0);" class="text-reset d-block stretched-link collapsed">
                                    <div class="row no-gutters align-items-center">
                                        <!-- Title -->
                                        <div class="col">
                                            <h5>Security</h5>
                                            <p class="m-0">Update your profile details.</p>
                                        </div>
                                        <!-- Icon -->
                                        <div class="col-auto">
                                            <i class="text-muted icon-md fas fa-crosshairs"></i>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="mt-3">
                                <label for="profile-name">Name</label>
                                <input class="form-control form-control-lg profile_input group_formcontrol" name="profile-name" id="profile-name" type="text" placeholder="Type your name">
                            </div>
                            <div class="mt-4">
                                <label for="profile-name">Current Password</label>
                                <input class="form-control form-control-lg group_formcontrol" name="profile-name" id="profile-name_pswd" type="text" placeholder="Current Password">
                            </div>
                            <div class="mt-4">
                                <label for="profile-name">New Password</label>
                                <input class="form-control form-control-lg group_formcontrol" name="profile-name" id="profile-name_new" type="text" placeholder="New Password">
                            </div>
                            <div class="mt-4">
                                <label for="profile-name">Verify Password</label>
                                <input class="form-control form-control-lg group_formcontrol" name="profile-name" id="profile-name_prfname" type="text" placeholder="Verify Password">
                            </div>
                            <div class="mt-3 text-center">
                                <button class="btn newgroup_create mb-0" type="submit" data-bs-dismiss="modal">Save Settings</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Settings Modal -->
</template>
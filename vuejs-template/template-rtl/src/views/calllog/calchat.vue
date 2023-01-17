<template>
<!-- Chat -->
            <div class="chat" id="middle">
                <div class="chat-header">
                    <div class="user-details">
                        <div class="d-lg-none ms-2">
                            <ul class="list-inline mt-2 me-2">
                                <li class="list-inline-item">
                                    <a class="text-muted px-0 left_side" href="#" data-chat="open">
                                        <i class="fas fa-arrow-left"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <figure class="avatar ms-1">
                            <img src="../../assets/img/avatar-2.jpg" class="rounded-circle" alt="image">
                        </figure>
                        <div class="mt-1 ms-4">
                            <h5 class="mb-1">Scott Albright</h5>
                            <small class="text-muted mb-2">
                                50 Calls
                            </small>
                        </div>
                    </div>
                    <div class="chat-options">
                        <ul class="list-inline">
                            <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Voice call">
                                <a href="javascript:void(0)" class="btn btn-outline-light" data-bs-toggle="modal"
                                    data-bs-target="#voice_call">
                                    <i class="fas fa-phone-alt voice_chat_phone"></i>
                                </a>
                            </li>
                            <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Video call">
                                <a href="javascript:void(0)" class="btn btn-outline-light" data-bs-toggle="modal"
                                    data-bs-target="#video_call">
                                    <i class="fas fa-video"></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a class="btn btn-outline-light" href="#" data-bs-toggle="dropdown">
                                    <i class="fas fa-ellipsis-h"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-end">
                                    <a href="javascript:void(0);" class="dropdown-item dream_profile_menu">Profile</a>
                                    <a href="javascript:void(0);" class="dropdown-item">Delete</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="chat-body">
                    <div class="missed-call-widget mt-0">
                        <div class="call-log-header">
                            <div class="row">
                                <div class="col">
                                    <h4>Missed Calls (41)</h4>
                                </div>
                                <div class="col-auto">
                                    <a href="" class="clear-all">Clear all</a>
                                </div>
                            </div>
                        </div>
                        <div class="card call-card">
                            <div class="card-body">
                                <div class="row align-items-center">
                                    <div class="col">
                                        <h6 class="text-muted mb-0">
                                            <i class="far fa-clock me-2"></i>Today, 11:43 PM
                                        </h6>
                                    </div>
                                    <div class="col mob-auto">
                                        <i class="missed-col"><img src="../../assets/img/missed-call-icon.svg" alt=""></i>
                                    </div>
                                    <div class="col-auto">
                                        <i class="fas fa-phone-alt text-muted"></i>
                                    </div>
                                </div>
                                <hr class="my-3">
                                <div class="row align-items-center">
                                    <div class="col">
                                        <h6 class="text-muted mb-0">
                                            <i class="far fa-clock me-2"></i>Today, 11:43 PM
                                        </h6>
                                    </div>
                                    <div class="col mob-auto">
                                        <i class="missed-col"><img src="../../assets/img/missed-call-icon.svg" alt=""></i>
                                    </div>
                                    <div class="col-auto">
                                        <i class="fas fa-phone-alt text-muted"></i>
                                    </div>
                                </div>
                                <hr class="my-3">
                                <div class="row align-items-center">
                                    <div class="col">
                                        <h6 class="text-muted mb-0">
                                            <i class="far fa-clock me-2"></i>Today, 11:43 PM
                                        </h6>
                                    </div>
                                    <div class="col mob-auto">
                                        <i class="missed-col"><img src="../../assets/img/missed-call-icon.svg" alt=""></i>
                                    </div>
                                    <div class="col-auto">
                                        <i class="fas fa-phone-alt text-muted"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="call-view-more">
                            <a href="javascript:void(0);"><i class="fas fa-chevron-down me-1"></i> <span>39 More</span></a>
                        </div>
                    </div>

                    <div class="other-call-widget mt-0">
                        <div class="call-log-header">
                            <div class="row">
                                <div class="col">
                                    <h4>Other Calls (9)</h4>
                                </div>
                                <div class="col-auto">
                                    <a href="" class="clear-all">Clear all</a>
                                </div>
                            </div>
                        </div>
                        <div class="card call-card">
                            <div class="card-body">
                                <div class="row align-items-center">
                                    <div class="col">
                                        <h6 class="text-muted mb-0">
                                            <i class="far fa-clock me-2"></i>Today, 11:43 PM
                                        </h6>
                                    </div>
                                    <div class="col mob-auto">
                                    <i class="incoming-col"><img src="../../assets/img/incoming-call-icon.svg" alt=""></i>
                                </div>
                                    <div class="col-auto">
                                        <i class="fas fa-phone-alt text-muted"></i>
                                    </div>
                                </div>
                                <hr class="my-3">
                                <div class="row align-items-center">
                                    <div class="col">
                                        <h6 class="text-muted mb-0">
                                            <i class="far fa-clock me-2"></i>Today, 11:43 PM
                                        </h6>
                                    </div>
                                    <div class="col mob-auto">
                                        <i class="incoming-col"><img src="../../assets/img/incoming-call-icon.svg" alt=""></i>
                                    </div>
                                    <div class="col-auto">
                                        <i class="fas fa-video text-muted"></i>
                                    </div>
                                </div>
                                <hr class="my-3">
                                <div class="row align-items-center">
                                    <div class="col">
                                        <h6 class="text-muted mb-0">
                                            <i class="far fa-clock me-2"></i>Today, 11:43 PM
                                        </h6>
                                    </div>
                                    <div class="col mob-auto">
                                        <i class="incoming-col"><img src="../../assets/img/incoming-call-icon.svg" alt=""></i>
                                    </div>
                                    <div class="col-auto">
                                        <i class="fas fa-video text-muted"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="call-view-more">
                            <a href="javascript:void(0);"><i class="fas fa-chevron-down me-1"></i> <span>7 More</span></a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Chat -->
</template>
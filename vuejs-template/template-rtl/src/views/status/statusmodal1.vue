<template>
 <!-- Status modal -->
    <div class="modal status-modal fade" id="status-modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="inner-popup">
                    <span class="close custom-status-close" data-bs-dismiss="modal"><i class="fas fa-times"></i></span>
                    <div id="carouselExampleIndicators" class="carousel slide slider" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
                            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner status_slider" role="listbox">
                            <div class="carousel-item active">
                                <img src="../../assets/img/carousel.jpg" alt="">
                            </div>
                            <div id="target" class="carousel-item">
                                <img src="../../assets/img/carousel1.jpg" alt="">
                            </div>
                            <div class="carousel-item">
                                <img src="../../assets/img/carousel2.jpg" alt="">
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"><i class="fas fa-chevron-left"></i></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"><i class="fas fa-chevron-right"></i></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                    <div class="bottom-message-col">
                        <ul>
                            <li>
                                <form class="chat_status mt-4">
                                    <input type="text" class="form-control text_status mx-auto d-block form_status"
                                    placeholder="Reply">
                                    <button class="btn btn-primary send-btn_status" type="submit">
                                        <i class="fab fa-telegram-plane status_telegram"></i>
                                    </button>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /Status Modal -->
</template>
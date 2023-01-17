<?php $page="join-call";?>
@extends('layout.mainlayout')
@section('content')				
			<!-- Join Call -->
			<div class="page-content">
				<div class="join-call">
					<div class="join-video">
						<img src="assets/img/video-call.jpg" class="img-fluid" alt="Logo">
						<div class="video-avatar"><h4>Camera is off</h4></div>
						<div class="call-icons">
							<ul class="call-items">
								<li class="call-item">
									<a class="mute-bt" href="#" title="" data-bs-placement="top" data-bs-toggle="tooltip" data-bs-original-title="Mute Audio">
										<i class="feather-mic"></i>
									</a>
								</li>
								<li class="call-item">
									<a class="mute-video" href="#" title="" data-bs-placement="top" data-bs-toggle="tooltip" data-bs-original-title="Stop Camera">
										<i class="feather-video"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="join-content">
						<div class="row">
							<div class="col-md-6">
								<div class="form-group">
									<label class="form-control-label">What's your name?</label>
									<input type="text" class="form-control" placeholder="Enter Your Name here">
								</div>
							</div>
						</div>
						<h3>UX/UI Design Conference Meeting</h3>
						<div class="btn-infos">								
							<a href="meeting-single-user" class="btn btn-primary btn-join">Join Now</a>
							<div class="d-flex align-items-center">
								<span class="icon-mic"><i class="feather-mic"></i></span> <span>Your microphone is working properly</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- /Join Call -->
								
	</div>
	<!-- /Main Wrapper -->
@endsection
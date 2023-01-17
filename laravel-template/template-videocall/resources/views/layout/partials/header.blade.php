<!-- Main Wrapper -->
		<div class="main-wrapper">
		
			<!-- Header -->
			@if(!Route::is(['join-call']))
			<header class="header fixed-position">
				<nav class="navbar navbar-expand-lg header-nav">
					<div class="navbar-header">
						<a href="javascript:void(0);" class="navbar-brand logo">
							<img src="assets/img/logo.png" class="img-fluid" alt="Logo">
						</a>
						<p>a2x3-x3pp-ca2i-extn</p>
					</div>
					<div class="main-menu-wrapper">
						<ul class="grid-menu">
							<li class="{{ Request::is('meetingcall-multigrid','meeting-call-multigrid-2') ? 'active' : '' }}"><a href="meetingcall-multigrid" class="tab-nav"><i class="fas fa-th"></i></a></li>
							<li class="{{ Request::is('meeting-call-vertical-2','meetingcall-vertical') ? 'active' : '' }}"><a href="meeting-call-vertical-2" class="tab-nav"><i class="fas fa-grip-vertical"></i></a></li>
							<li class="{{ Request::is('meetingcall-horizontal','meeting-call-2','meeting-single-user') ? 'active' : '' }}"><a href="meetingcall-horizontal" class="tab-nav"><i class="fas fa-grip-horizontal"></i></a></li>
							<li class="{{ Request::is('meetingcall-grid') ? 'active' : '' }}"><a href="meetingcall-grid" class="tab-nav"><i class="fas fa-th-large"></i></a></li>
							<li><a href="#max" class="tab-nav win-maximize"><i class="fas fa-expand-alt"></i></a></li>
						</ul>
					</div>
					<ul class="nav header-navbar-rht">						
						<li class="nav-item dark-mode">
							<label class="toggle-switch" for="notification_switch3">
								<span>
									<input type="checkbox" class="toggle-switch-input" id="notification_switch3">
									<span class="toggle-switch-label ms-auto">
										<span class="toggle-switch-indicator"></span>
									</span>
								</span>
								<span>Dark Mode Off</span>
							</label>
						</li>
						<li class="nav-item">
							<a href="#" class="nav-link p-0">
								<span class="user-img">
									<img src="assets/img/user.jpg" alt="user">
								</span>
								<span class="user-name">Carl Kelly</span>
							</a>
						</li>
					</ul>
				</nav>
			</header>
			@endif
			<!-- /Header -->
			
			<!-- Header -->
			@if(Route::is(['join-call']))
			<header class="header">
				<nav class="navbar navbar-expand-lg header-nav fixed-top">
					<div class="navbar-header">
						<a href="javascript:void(0);" class="navbar-brand logo">
							<img src="assets/img/logo.png" class="img-fluid" alt="Logo">
						</a>
					</div>
					<ul class="nav header-navbar-rht">						
						<li class="nav-item dark-mode">
							<label class="toggle-switch" for="notification_switch3">
								<span>
									<input type="checkbox" class="toggle-switch-input" id="notification_switch3">
									<span class="toggle-switch-label ms-auto">
										<span class="toggle-switch-indicator"></span>
									</span>
								</span>
								<span>Dark Mode Off</span>
							</label>
						</li>
						<li class="nav-item">
							<a href="#" class="nav-link p-0">
								<span class="user-img">
									<img src="assets/img/user.jpg" alt="user">
								</span>
								<span class="user-name">Carl Kelly</span>
							</a>
						</li>
					</ul>
				</nav>
			</header>
			@endif
			<!-- /Header -->
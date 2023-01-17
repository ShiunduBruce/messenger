<!-- Sidebar -->
           <div class="sidebar" id="sidebar">
                <div class="sidebar-inner slimscroll">
					<div id="sidebar-menu" class="sidebar-menu">
						<ul>
							<li class="menu-title"> 
							</li>
							<li class="{{ Request::is('admin/index_admin') ? 'active' : '' }}"> 
								<a href="index_admin"><i class="fe fe-home"></i> <span>Dashboard</span></a>
							</li>
							<li class="submenu">
								<a href="#"><i class="fe fe-users"></i> <span> Users</span> <span class="menu-arrow"></span></a>
								<ul style="display: none;">
									<li><a class="{{ Request::is('admin/users') ? 'active' : '' }}" href="{{ url('admin/users') }}">Users</a></li>
									<li><a class="{{ Request::is('admin/blocked-users') ? 'active' : '' }}" href="{{ url('admin/blocked-users') }}">Blocked User</a></li>
									<li><a class="{{ Request::is('admin/report-users') ? 'active' : '' }}" href="{{ url('admin/report-users') }}">Report User</a></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="#"><i class="fe fe-sync"></i> <span> History </span> <span class="menu-arrow"></span></a>
								<ul style="display: none;">
									<li><a class="{{ Request::is('admin/call-history') ? 'active' : '' }}" href="{{ url('admin/call-history') }}"> Call History </a></li>
									<li><a class="{{ Request::is('admin/group-history') ? 'active' : '' }}" href="{{ url('admin/group-history') }}"> Group History </a></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="#"><i class="fe fe-gear"></i> <span> Settings </span> <span class="menu-arrow"></span></a>
								<ul style="display: none;">
									<li><a class="{{ Request::is('admin/general') ? 'active' : '' }}" href="{{ url('admin/group-history') }}">General</a></li>
									<li><a class="{{ Request::is('admin/admob') ? 'active' : '' }}" href="{{ url('admin/admob') }}">Admob </a></li>
									<li><a class="{{ Request::is('admin/sinch-settings') ? 'active' : '' }}" href="{{ url('admin/sinch-settings') }}">Sinch Settings </a></li>
									<li><a class="{{ Request::is('admin/firebase-settings') ? 'active' : '' }}" href="{{ url('admin/firebase-settings') }}">Firebase Settings </a></li>
								</ul>
							</li>
							<li class="{{ Request::is('admin/blank-page') ? 'active' : '' }}"> 
								<a href="blank-page"><i class="fe fe-file"></i> <span>Blank Page</span></a>
							</li>
							<li class="{{ Request::is('admin/vector-maps') ? 'active' : '' }}"> 
								<a href="vector-maps"><i class="fe fe-map"></i> <span>Vector Maps</span></a>
							</li>
							<li class="{{ Request::is('admin/components') ? 'active' : '' }}"> 
								<a href="components"><i class="fe fe-vector"></i> <span>Components</span></a>
							</li>
							<li class="submenu">
								<a href="#"><i class="fe fe-layout"></i> <span> Forms <span class="menu-arrow"></span></span></a>
								<ul style="display: none;">
									<li><a class="{{ Request::is('admin/form-basic-inputs') ? 'active' : '' }}" href="{{ url('admin/form-basic-inputs') }}">Basic Inputs</a></li>
									<li><a class="{{ Request::is('admin/form-input-groups') ? 'active' : '' }}" href="{{ url('admin/form-input-groups') }}">Input Groups</a></li>
									<li><a class="{{ Request::is('admin/form-horizontal') ? 'active' : '' }}" href="{{ url('admin/form-horizontal') }}">Horizontal Form</a></li>
									<li><a class="{{ Request::is('admin/form-vertical') ? 'active' : '' }}" href="{{ url('admin/form-vertical') }}">Vertical Form </a></li>
									<li><a class="{{ Request::is('admin/form-mask') ? 'active' : '' }}" href="{{ url('admin/form-mask') }}">Form Mask</a></li>
									<li><a class="{{ Request::is('admin/form-validation') ? 'active' : '' }}" href="{{ url('admin/form-validation') }}">Form Validation  </a></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="#"><i class="fe fe-table"></i> <span> Tables <span class="menu-arrow"></span></span></a>
								<ul style="display: none;">
									<li><a class="{{ Request::is('admin/tables-basic') ? 'active' : '' }}" href="{{ url('admin/tables-basic') }}">Basic Tables </a></li>
									<li><a class="{{ Request::is('admin/data-tables') ? 'active' : '' }}" href="{{ url('admin/data-tables') }}">Data Table </a></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);"><i class="fe fe-code"></i> <span>Multi Level</span> <span class="menu-arrow"></span></a>
								<ul style="display: none;">
									<li class="submenu">
										<a href="javascript:void(0);"> <span>Level 1</span> <span class="menu-arrow"></span></a>
										<ul style="display: none;">
											<li><a href="javascript:void(0);"><span>Level 2</span></a></li>
											<li class="submenu">
												<a href="javascript:void(0);"> <span> Level 2</span> <span class="menu-arrow"></span></a>
												<ul style="display: none;">
													<li><a href="javascript:void(0);">Level 3</a></li>
													<li><a href="javascript:void(0);">Level 3</a></li>
												</ul>
											</li>
											<li><a href="javascript:void(0);"> <span>Level 2</span></a></li>
										</ul>
									</li>
									<li>
										<a href="javascript:void(0);"> <span>Level 1</span></a>
									</li>
								</ul>
							</li>
						</ul>
					</div>
                </div>
            </div>
			<!-- /Sidebar -->
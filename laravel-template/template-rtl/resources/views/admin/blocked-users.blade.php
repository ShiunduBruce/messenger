
@extends('layout.mainlayout_admin')
@section('content')		
<!-- Page Wrapper -->
            <div class="page-wrapper">
			
                <div class="content container-fluid">

                	<div class="page-header">
						<div class="row align-items-center">
							<div class="col">
								<h3 class="page-title">Blocked User</h3>
								<ul class="breadcrumb">
									<li class="breadcrumb-item"><a href="index_admin">Dashboard</a></li>
									<li class="breadcrumb-item active">Blocked User</li>
								</ul>
							</div>
						</div>
					</div>

					<div class="row">
						<div class="col-md-12 d-flex">
						
							<!-- Recent Orders -->
							<div class="card card-table flex-fill">
								<div class="card-body">
									<div class="table-responsive">
										<table class="table table-hover table-center mb-0">
											<thead>
												<tr>
													<th>User</th>
													<th>Login time</th>
													<th>Blocked date</th>
													<th>Blocked reason</th>
													<th>Blocked time</th>
													<th class="text-end">Action</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>
														<h2 class="table-avatar">
															<a href="general" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="../assets_admin/img/profiles/avatar-12.jpg" alt="User Image"></a>
															<a href="general">Lee <span>#0010</span></a>
														</h2>
													</td>
													<td>10.00 AM</td>
													<td>07 Jun 2019</td>
													<td>Donec posuere dictum enim</td>
													<td>11.00 PM</td>
													<td class="text-end">
														<div class="actions">
															<a href="#" class="btn btn-sm bg-success-light me-2" title="Unblocked">
																<i class="fe fe-disabled"></i>
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<h2 class="table-avatar">
															<a href="general" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="../assets_admin/img/profiles/avatar-19.jpg" alt="User Image"></a>
															<a href="general">Joe <span>#0010</span></a>
														</h2>
													</td>
													<td>09.15 AM</td>
													<td>28 Sep 2019</td>
													<td>Sed sollicitudin</td>
													<td>12.40 PM</td>
													<td class="text-end">
														<div class="actions">
															<a href="#" class="btn btn-sm bg-success-light me-2" title="Unblocked">
																<i class="fe fe-disabled"></i>
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<h2 class="table-avatar">
															<a href="general" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="../assets_admin/img/profiles/avatar-06.jpg" alt="User Image"></a>
															<a href="general">Mary Wiley <span>#0011</span></a>
														</h2>
													</td>
													<td>04:45 PM</td>
													<td>17 Nov 2019</td>
													<td>Lorem ipsum dolor</td>
													<td>01.40 PM</td>
													<td class="text-end">
														<div class="actions">
															<a href="#" class="btn btn-sm bg-success-light me-2" title="Unblocked">
																<i class="fe fe-disabled"></i>
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<h2 class="table-avatar">
															<a href="general" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="../assets_admin/img/profiles/avatar-15.jpg" alt="User Image"></a>
															<a href="general">Eric Knight <span>#0013</span></a>
														</h2>
													</td>
													<td>02:05 PM</td>
													<td>11 Jan 2020</td>
													<td>Commodo consequat.</td>
													<td>07.00 PM</td>
													<td class="text-end">
														<div class="actions">
															<a href="#" class="btn btn-sm bg-success-light me-2" title="Unblocked">
																<i class="fe fe-disabled"></i>
															</a>
														</div>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
							<!-- /Recent Orders -->
							
						</div>
					</div>
				</div>			
			</div>
			<!-- /Page Wrapper -->
		
        </div>
		<!-- /Main Wrapper -->
	   @endsection
	  
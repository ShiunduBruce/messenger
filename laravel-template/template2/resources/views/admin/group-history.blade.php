
@extends('layout.mainlayout_admin')
@section('content')		
<!-- Page Wrapper -->
            <div class="page-wrapper">
			
                <div class="content container-fluid">

                	<div class="page-header">
						<div class="row align-items-center">
							<div class="col">
								<h3 class="page-title">Group History</h3>
								<ul class="breadcrumb">
									<li class="breadcrumb-item"><a href="index_admin">Dashboard</a></li>
									<li class="breadcrumb-item active">Group History</li>
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
													<th>Name</th>
													<th>Registered date</th>
													<th>Login time</th>
													<th>Logout time</th>
													<th>Last login</th>
													<th>Call timing</th>
													<th class="text-end">Action</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>
														<h2 class="table-avatar">
															<a href="general" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="../assets_admin/img/profiles/avatar-29.jpg" alt="User Image"></a>
															<a href="general">Clara Brady <span>#0019</span></a>
														</h2>
													</td>
													<td>01 Oct 2019</td>
													<td>01.00 PM</td>
													<td>03.54 PM</td>
													<td>11.00 PM</td>
													<td>1 hours</td>
													<td class="text-end">
														<div class="actions">
															<a href="#" class="btn btn-sm bg-success-light me-2" title="View History">
																<i class="fe fe-sync"></i> 
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<h2 class="table-avatar">
															<a href="general" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="../assets_admin/img/profiles/avatar-23.jpg" alt="User Image"></a>
															<a href="general">Joe <span>#0002</span></a>
														</h2>
													</td>
													<td>23 Jan 2020</td>
													<td>10.00 AM</td>
													<td>03.12 PM</td>
													<td>10.00 AM</td>
													<td>2 hours</td>
													<td class="text-end">
														<div class="actions">
															<a href="#" class="btn btn-sm bg-success-light me-2" title="View History">
																<i class="fe fe-sync"></i> 
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<h2 class="table-avatar">
															<a href="general" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="../assets_admin/img/profiles/avatar-15.jpg" alt="User Image"></a>
															<a href="general">John Williams <span>#0013</span></a>
														</h2>
													</td>
													<td>14 Feb 2020</td>
													<td>12.03 PM</td>
													<td>11.40 PM</td>
													<td>10.00 AM</td>
													<td>2 hours</td>
													<td class="text-end">
														<div class="actions">
															<a href="#" class="btn btn-sm bg-success-light me-2" title="View History">
																<i class="fe fe-sync"></i> 
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<h2 class="table-avatar">
															<a href="general" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="../assets_admin/img/profiles/avatar-25.jpg" alt="User Image"></a>
															<a href="general">Amy Bond <span>#0017</span></a>
														</h2>
													</td>
													<td>18 Apr 2020</td>
													<td>09.10 AM</td>
													<td>05.30 PM</td>
													<td>06.00 PM</td>
													<td>3 hours</td>
													<td class="text-end">
														<div class="actions">
															<a href="#" class="btn btn-sm bg-success-light me-2" title="View History">
																<i class="fe fe-sync"></i> 
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<h2 class="table-avatar">
															<a href="general" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="../assets_admin/img/profiles/avatar-28.jpg" alt="User Image"></a>
															<a href="general">Robert Martin <span>#0020</span></a>
														</h2>
													</td>
													<td>20 Apr 2020</td>
													<td>01.00 PM</td>
													<td>09.54 PM</td>
													<td>08.00 AM</td>
													<td>2 hours</td>
													<td class="text-end">
														<div class="actions">
															<a href="#" class="btn btn-sm bg-success-light me-2" title="View History">
																<i class="fe fe-sync"></i> 
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<h2 class="table-avatar">
															<a href="general" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="../assets_admin/img/profiles/avatar-16.jpg" alt="User Image"></a>
															<a href="general">John Lee <span>#0001</span></a>
														</h2>
													</td>
													<td>08 Jun 2020</td>
													<td>10.00 AM</td>
													<td>07.00 PM</td>
													<td>10.00 AM</td>
													<td>4 hours</td>
													<td class="text-end">
														<div class="actions">
															<a href="#" class="btn btn-sm bg-success-light me-2" title="View History">
																<i class="fe fe-sync"></i> 
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
	  
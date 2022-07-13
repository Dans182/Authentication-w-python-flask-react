import React from "react";
export const Private = () => {
	return <div>
		<div className="bg-dark text-secondary px-4 py-5 mt-5 text-center">
			<div className="py-5">
				<h1 className="display-5 fw-bold text-white">PRIVATE</h1>
				<div className="col-lg-6 mx-auto">
					<p className="fs-5 mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
					<div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
						<button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Custom button</button>
						<button type="button" className="btn btn-outline-light btn-lg px-4">Secondary</button>
					</div>
				</div>
			</div>
		</div>
		<div className="container px-4 py-5" id="custom-cards">
			<h2 className="pb-2 border-bottom">Custom cards</h2>
			<div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
				<div className="col">
					<div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ "backgroundImage": "url('https://www.caracteristicas.co/wp-content/uploads/2018/11/montan%CC%83as-e1543190126108.jpg')" }}>
						<div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
							<h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h2>
							<ul className="d-flex list-unstyled mt-auto">
								<li className="me-auto">
									<h5>THU</h5>
								</li>
								<li className="d-flex align-items-center me-3">

									<small>Earth</small>
								</li>
								<li className="d-flex align-items-center">
									<small>3d</small>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ "backgroundImage": "url('https://media.gq.com.mx/photos/5c8fe8f0d47f8ca854fd4552/16:9/w_2560%2Cc_limit/GettyImages-913710180.jpg')" }}>
						<div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
							<h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Much longer title that wraps to multiple lines</h2>
							<ul className="d-flex list-unstyled mt-auto">
								<li className="me-auto">
									<h5>THU</h5>
								</li>
								<li className="d-flex align-items-center me-3">
									<small>Pakistan</small>
								</li>
								<li className="d-flex align-items-center">
									<small>4d</small>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ "backgroundImage": "url('https://www.caracteristicas.co/wp-content/uploads/2017/03/ciudad-3-e1565900111723.jpg')" }}>
						<div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
							<h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Another longer title belongs here</h2>
							<ul className="d-flex list-unstyled mt-auto">
								<li className="me-auto">
									<h5>THU</h5>
								</li>
								<li className="d-flex align-items-center me-3">
									<small>California</small>
								</li>
								<li className="d-flex align-items-center">
									<small>5d</small>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
};

import { Link } from "react-router-dom";

function BreadCrumbCatalog() {
	return (
		<article className='breadcrumb center'>
			<div className='breadcrumb__content'>
				<h1 className='breadcrumb__heading'>NEW ARRIVALS</h1>
				<div className='breadcrumb__nav'>
					<ul className='breadcrumb__ul'>
						<li className='breadcrumb__li'>
							<Link to='/' className='breadcrumb__link'>
								HOME
							</Link>
						</li>
						<li className='breadcrumb__li'>
							<a href='#' className='breadcrumb__link'>
								MEN
							</a>
						</li>
						<li className='breadcrumb__li'>
							<a href='#' className='breadcrumb__link breadcrumb__link_color'>
								NEW ARRIVALS
							</a>
						</li>
					</ul>
				</div>
			</div>
		</article>
	);
}

export default BreadCrumbCatalog;

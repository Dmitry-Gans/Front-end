function Subscribe() {
	return (
		<article className='subscribe-content'>
			<div className='subscribe-content__background'>
				<div className='subscribe-content__shadows'>
					<div className='subscribe-content__info center'>
						<div className='subscribe-content__left'>
							<img
								src='/img/subscribe_img.svg'
								alt='subscribe img'
								className='subscribe-content__img'
							/>
							<div className='subscribe-content__text'>
								“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a
								pulvinar purus condimentum“
							</div>
						</div>
						<div className='subscribe-content__right'>
							<h2 className='subscribe-content__h2'>SUBSCRIBE</h2>
							<p className='subscribe-content__subtitle'>
								FOR OUR NEWLETTER AND PROMOTION
							</p>
							<form action='#' className='subscribe-content__form'>
								<input
									className='subscribe-content__input'
									type='email'
									placeholder='Enter Your Email'
								/>
								<button className='subscribe-content__button'>Subscribe</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
}

export default Subscribe;

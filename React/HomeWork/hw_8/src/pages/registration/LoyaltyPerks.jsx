import { useState } from 'react';

function LoyaltyPerks() {
	const [checkedItems, setCheckedItems] = useState({
		item1: true,
		item2: true,
		item3: false,
		item4: false,
	});

	const handleChange = e => {
		const { name, checked } = e.target;
		setCheckedItems(prev => ({
			...prev,
			[name]: checked,
		}));
	};

	return (
		<div className='registration-content__right'>
			<p className='registration-content__right-title'>LOYALTY HAS ITS PERKS</p>
			<p className='registration-content__right-text'>
				Get in on the loyalty program where you can earn points and unlock
				serious perks. Starting with these as soon as you join:
			</p>
			<div className='registration-content__right-loyalty'>
				<label className='registration-content__right-checkbox'>
					<input
						type='checkbox'
						name='item1'
						checked={checkedItems.item1}
						onChange={handleChange}
						className='registration-content__right-input'
					/>
					<summary className='registration-content__right-summary'>
						<svg
							width='20'
							height='16'
							viewBox='0 0 20 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M19.8035 0H18.0904C17.8502 0 17.6222 0.111827 17.4752 0.303176L7.3702 13.2826L2.52481 7.05754C2.45151 6.96318 2.35808 6.88688 2.25153 6.83438C2.14499 6.78187 2.0281 6.75451 1.90963 6.75437H0.196467C0.032258 6.75437 -0.0584248 6.94572 0.0420614 7.07494L6.75503 15.6981C7.06874 16.1006 7.67166 16.1006 7.98782 15.6981L19.9579 0.318087C20.0584 0.191349 19.9677 0 19.8035 0Z'
								fill='black'
							/>
						</svg>
						15% off welcome offer
					</summary>
				</label>
				<label className='registration-content__right-checkbox'>
					<input
						type='checkbox'
						name='item2'
						checked={checkedItems.item2}
						onChange={handleChange}
						className='registration-content__right-input'
					/>
					<summary className='registration-content__right-summary'>
						<svg
							width='20'
							height='16'
							viewBox='0 0 20 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M19.8035 0H18.0904C17.8502 0 17.6222 0.111827 17.4752 0.303176L7.3702 13.2826L2.52481 7.05754C2.45151 6.96318 2.35808 6.88688 2.25153 6.83438C2.14499 6.78187 2.0281 6.75451 1.90963 6.75437H0.196467C0.032258 6.75437 -0.0584248 6.94572 0.0420614 7.07494L6.75503 15.6981C7.06874 16.1006 7.67166 16.1006 7.98782 15.6981L19.9579 0.318087C20.0584 0.191349 19.9677 0 19.8035 0Z'
								fill='black'
							/>
						</svg>
						Free shipping, returns and exchanges on all <span>orders</span>
					</summary>
				</label>
				<label className='registration-content__right-checkbox'>
					<input
						type='checkbox'
						name='item3'
						checked={checkedItems.item3}
						onChange={handleChange}
						className='registration-content__right-input'
					/>
					<summary className='registration-content__right-summary'>
						<svg
							width='20'
							height='16'
							viewBox='0 0 20 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M19.8035 0H18.0904C17.8502 0 17.6222 0.111827 17.4752 0.303176L7.3702 13.2826L2.52481 7.05754C2.45151 6.96318 2.35808 6.88688 2.25153 6.83438C2.14499 6.78187 2.0281 6.75451 1.90963 6.75437H0.196467C0.032258 6.75437 -0.0584248 6.94572 0.0420614 7.07494L6.75503 15.6981C7.06874 16.1006 7.67166 16.1006 7.98782 15.6981L19.9579 0.318087C20.0584 0.191349 19.9677 0 19.8035 0Z'
								fill='black'
							/>
						</svg>
						$10 off a purchase on your birthday
					</summary>
				</label>
				<label className='registration-content__right-checkbox'>
					<input
						type='checkbox'
						name='item4'
						checked={checkedItems.item4}
						onChange={handleChange}
						className='registration-content__right-input'
					/>
					<summary className='registration-content__right-summary'>
						<svg
							width='20'
							height='16'
							viewBox='0 0 20 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M19.8035 0H18.0904C17.8502 0 17.6222 0.111827 17.4752 0.303176L7.3702 13.2826L2.52481 7.05754C2.45151 6.96318 2.35808 6.88688 2.25153 6.83438C2.14499 6.78187 2.0281 6.75451 1.90963 6.75437H0.196467C0.032258 6.75437 -0.0584248 6.94572 0.0420614 7.07494L6.75503 15.6981C7.06874 16.1006 7.67166 16.1006 7.98782 15.6981L19.9579 0.318087C20.0584 0.191349 19.9677 0 19.8035 0Z'
								fill='black'
							/>
						</svg>
						Early access to products
					</summary>
				</label>
				<label className='registration-content__right-checkbox'>
					<input
						type='checkbox'
						name='item5'
						checked={checkedItems.item5}
						onChange={handleChange}
						className='registration-content__right-input'
					/>
					<summary className='registration-content__right-summary'>
						<svg
							width='20'
							height='16'
							viewBox='0 0 20 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M19.8035 0H18.0904C17.8502 0 17.6222 0.111827 17.4752 0.303176L7.3702 13.2826L2.52481 7.05754C2.45151 6.96318 2.35808 6.88688 2.25153 6.83438C2.14499 6.78187 2.0281 6.75451 1.90963 6.75437H0.196467C0.032258 6.75437 -0.0584248 6.94572 0.0420614 7.07494L6.75503 15.6981C7.06874 16.1006 7.67166 16.1006 7.98782 15.6981L19.9579 0.318087C20.0584 0.191349 19.9677 0 19.8035 0Z'
								fill='black'
							/>
						</svg>
						Exclusive offers & rewards
					</summary>
				</label>
			</div>
		</div>
	);
}

export default LoyaltyPerks;

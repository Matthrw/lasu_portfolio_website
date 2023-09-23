import React from 'react';
import ipad from './image/ipad.png';
import './style/Body.css';
import wave from './image/black-wave.png';
export default function Body() {
	return (
		<>
			{/* body session */}
			<div className='body'>
				<div className='left-write-up'>
					<h2>GET EVERY SINGLE SOLUTION</h2>
					<p className='blue-p'>I'm Designer </p>
					<p className='blue-p-2'>Haris F.Watson</p>
					<p className='lorem'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
						lorem non lectus tincidunt vehicula. Vestibulum ante ipsum primis in
						faucibus orci luctus et ultrices posuere cubilia
					</p>
					<button className='left-btn'>Learn More</button>
					<button className='right-btn'>Hire Me</button>
				</div>
				<div className='image'>
					<img
						className='ipad'
						src={ipad}
						alt='ipad'
						height={350}
						width={350}></img>
				</div>
				<img className='wave-image' src={wave} alt='wave'></img>
			</div>
		</>
	);
}

import React, { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';

import detectHand from '../util/detectHand';
const WebcamComponent = () => {
	const webcamRef = useRef(null);
	const canvasRef = useRef(null);

	useEffect(() => {
		detectHand(webcamRef, canvasRef);
	}, [webcamRef, canvasRef]);

	return (
		<div className="App">
			<header className="App-header">
				<Webcam
					ref={webcamRef}
					style={{
						position: 'absolute',
						marginLeft: 'auto',
						marginRight: 'auto',
						left: 0,
						right: 0,
						textAlign: 'center',
						zindex: 9,
						width: 640,
						height: 480,
					}}
				/>

				<canvas
					ref={canvasRef}
					style={{
						position: 'absolute',
						marginLeft: 'auto',
						marginRight: 'auto',
						left: 0,
						right: 0,
						textAlign: 'center',
						zindex: 9,
						width: 640,
						height: 480,
					}}
				/>
			</header>
		</div>
	);
};

export default WebcamComponent;

import React, { useState } from 'react';
import ImageUploader from 'react-images-upload';

import FrameCarousel from './carousel/Carousel';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
// import Container from '@material-ui/core/Container';
import { Button } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const App: React.FC = () => {
	const [uploadImage, setUploadImage] = useState<null | File>(null);
	const [crop, setCrop] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
	const [zoom, setZoom] = useState<number>(1);
	const [aspect] = useState<number>(1 / 1);

	const classes = useStyles();

	const data = [
		{
			resolution: 3840,
			width: 384,
			shape: 'square',
			frame: '/frame.png',
			background: {
				type: 'linear',
				color1: '#FC023A',
				color2: '#FC023A',
			},
		},
		{
			resolution: 3840,
			width: 384,
			shape: 'square',
			frame: '/frame2.jpg',
			background: {
				type: 'linear',
				color1: 'green',
				color2: 'red',
		},
		},
		{
			resolution: 3840,
			width: 384,
			shape: 'square',
			frame: '/frame.png',
			background: {
				type: 'linear',
				color1: '#FED102',
				color2: '#294AF4',
			},
		},
	];

	return (
		<div>
			<Box className={classes.features}>
				<FormControlLabel control={<Switch />} label='Grayscale' />

				<ImageUploader
					className={classes.upload}
					withIcon={false}
					withLabel={false}
					buttonText='CHOOSE IMAGE'
					onChange={(picture: File[]) => {
						setUploadImage(picture[0]);
					}}
					imgExtension={['.jpg', '.gif', '.png', '.gif', '.jpeg']}
					maxFileSize={5242880 * 2}
					singleImage={true}
					fileContainerStyle={{ height: '20px' }}
					buttonStyles={{
						backgroundColor: '#3F51B5',
						width: '100%',
						height: 'fit-content',
						margin: 0,
					}}
				/>

				<Button variant='contained' color='secondary'>
					Download
				</Button>
			</Box>

			<Box className={classes.frame}>
				<FrameCarousel
					uploadImage={uploadImage}
					crop={crop}
					zoom={zoom}
					aspect={aspect}
					setCrop={setCrop}
					setZoom={setZoom}
     data={data}     
				/>
			</Box>
		</div>
	);
};

export default App;

const useStyles = makeStyles({
	features: {
		position: 'absolute',
		right: '15%',
		top: '40%',
		zIndex: 10,
		backgroundImage: '#334d50',
		background: 'linear-gradient(to right, #FDC830, #F37335)',
		padding: '1rem',
		borderRadius: '5px',
		color: '#fff',
		display: 'flex',
		flexDirection: 'column',
	},
	frame: {
		width: '100%',
		height: window.innerHeight,
		zIndex: 0,
		backgroundColor: 'blue',
	},
	upload: {
		width: 'auto',
	},
});
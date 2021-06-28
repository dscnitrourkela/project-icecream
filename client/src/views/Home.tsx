import React, { useEffect, useState } from "react"

// Libraries
import { Box, makeStyles } from "@material-ui/core"
import { Link } from "react-router-dom"
// import firebase from "firebase/app"
import "firebase/firestore"

// Components
import FrameCarousel from "../components/carousel/Carousel"
import EditBox from "../components/homepage/EditBox"

// Utils + Assets
import { overlayImage } from "../utils/overlayImage"
import { FrameData } from "../utils/types"
import { frameData } from "../config/data"

// Frame Data
// import {frameData} from '../config/data'

const App: React.FC = () => {
	const [uploadImage, setUploadImage] = useState<string>("")
	const [crop, setCrop] = useState<{ x: number; y: number }>({
		x: 0,
		y: 0,
	})
	const [zoom, setZoom] = useState<number>(1)
	const [aspect] = useState<number>(1 / 1)

	const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null)
	const [frame, setFrame] = useState<FrameData | null>(null)
	const [greyscale, setGreyscale] = useState<boolean>(false)
	const [textBoxDimensions, setTextBoxDimensions] = useState<any>()

	const [showCustomText, setShowCustomText] = useState<boolean>(true)
	const [primaryText, setPrimaryText] = useState<string>("Primary Text")
	const [secondaryText, setSecondaryText] =
		useState<string>("Secondary Text")
	const [position, setPosition] = useState<string>("top-right")

	const [loading, setLoading] = useState<boolean>(false)

	const [data, setData] = useState<FrameData[] | null>(null)
	const classes = useStyles()

	useEffect(() => {
		setData(frameData)
	}, [])

	return (
		<div style={{ minHeight: window.innerHeight }}>
			<EditBox
				primaryText={primaryText}
				secondaryText={secondaryText}
				position={position}
				greyscale={greyscale}
				uploadImage={uploadImage}
				loading={loading}
				setPrimaryText={setPrimaryText}
				setSecondaryText={setSecondaryText}
				setPosition={setPosition}
				setGreyscale={setGreyscale}
				setUploadImage={setUploadImage}
				showCustomText={showCustomText}
				setShowCustomText={setShowCustomText}
				overlayImage={() =>
					overlayImage(
						frame,
						uploadImage,
						croppedAreaPixels,
						greyscale,
						textBoxDimensions,
						position,
						showCustomText,
						setLoading
					)
				}
			/>

			<Box className={classes.frame}>
				{data !== null ? (
					<FrameCarousel
						uploadImage={
							uploadImage
						}
						crop={crop}
						zoom={zoom}
						aspect={aspect}
						setCrop={setCrop}
						setZoom={setZoom}
						data={data}
						primaryText={
							primaryText
						}
						secondaryText={
							secondaryText
						}
						position={position}
						setCroppedAreaPixels={
							setCroppedAreaPixels
						}
						setFrame={setFrame}
						setTextBoxDimensions={
							setTextBoxDimensions
						}
						greyscale={
							greyscale
						}
						showCustomTextbox={
							showCustomText
						}
					/>
				) : (
					<h2>Loading...</h2>
				)}
			</Box>

			<Link
				to='/upload-frame'
				className={classes.uploadFrame}
			>
				Upload Custom Frame
			</Link>
		</div>
	)
}

export default App

const useStyles = makeStyles((theme) => ({
	frame: {
		width: "100%",
		minHeight: window.innerHeight,
		zIndex: 0,
	},
	uploadFrame: {
		position: "absolute",
		top: 0,
		right: 0,
		backgroundColor: "#48cae4",
		fontSize: 20,
		fontFamily: "Arial",
		color: "#fff",
		textDecoration: "none",
		padding: 10,
		paddingRight: 20,
		marginTop: 10,
		borderTopLeftRadius: 7,
		borderBottomLeftRadius: 7,
		[theme.breakpoints.down("sm")]: {
			fontSize: 15,
			padding: 7,
		},
		"&:hover": {
			backgroundColor: "#293B5F",
		},
	},
}))

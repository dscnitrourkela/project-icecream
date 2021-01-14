import React, { useState } from 'react';

// Libraries
import ImageUploader from 'react-images-upload';
import ClipLoader from 'react-spinners/BeatLoader';
import {
  Grid,
  makeStyles,
  Container,
  Typography,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';

// Firebase
import firebase from 'firebase/app';
import 'firebase/firestore';

// Helpers
import { uploadImage } from '../utils/uploadFrame';
import { determineRenderDimensions } from '../utils/helpers';

// Components
import CustomTextField from '../components/shared/TextField';

function Upload() {
  const classes = useStyles();

  const [loading, setLoading] = useState<boolean>(false);
  const [uploadFrame, setUploadFrame] = useState<string | File>('');

  const [frameName, setFrameName] = useState<string>('');
  const [frameShape, setFrameShape] = useState<string>('square');
  const [frameWidth, setFrameWidth] = useState<number>(0);
  const [frameHeight, setFrameHeight] = useState<number>(0);

  const [frameTop, setFrameTop] = useState<number>(0);
  const [frameBottom, setFrameBottom] = useState<number>(0);
  const [frameLeft, setFrameLeft] = useState<number>(0);
  const [frameRight, setFrameRight] = useState<number>(0);

  const [showTextBox, setShowTextBox] = useState<boolean>(false);
  const [color1, setColor1] = useState<string>('#000000');
  const [color2, setColor2] = useState<string>('#000000');
  const [backgroundColorType, setBackgroundColorType] = useState<string>(
    'solid'
  );

  const handleBackgroundTypeChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => setBackgroundColorType(event.target.value as string);

  const handleFrameShapeChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => setFrameShape(event.target.value as string);

  const handleShowTextBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowTextBox(event.target.checked);
  };

  const submitImageUpload = async () => {
    if (
      frameName === '' ||
      frameWidth === 0 ||
      frameHeight === 0 ||
      frameTop === 0 ||
      frameRight === 0 ||
      frameBottom === 0 ||
      frameLeft === 0 ||
      uploadFrame === ''
    ) {
      alert('Please fill all the fields');
    } else {
      const frameURL = await uploadImage(uploadFrame);

      setLoading(true);
      firebase
        .firestore()
        .collection('frames')
        .add({
          name: frameName,
          frame: frameURL,
          shape: frameShape,
          dimensions: {
            width: frameWidth,
            height: frameHeight,
            top: frameTop,
            right: frameRight,
            bottom: frameBottom,
            left: frameLeft,
          },
          renderDimensions: determineRenderDimensions(
            frameWidth,
            frameHeight,
            frameTop,
            frameRight,
            frameBottom,
            frameLeft
          ),
          backgroundColor: {
            type: 'linear',
            color1,
            color2: backgroundColorType === 'solid' ? color1 : color2,
          },
          approved: false,
          showTextBox,
        })
        .then(() => setLoading(false));
    }
  };

  return (
    <Container className={classes.root}>
      <Grid container spacing={2} className={classes.container}>
        <Grid item sm={12} md={12} lg={6} className={classes.column1}>
          {uploadFrame ? (
            <img
              className={classes.img}
              src={URL.createObjectURL(uploadFrame)}
              alt='Upload Frame'
            />
          ) : (
            <div className={classes.imgPlaceHolder}>
              <ImageUploader
                withIcon={true}
                withLabel={false}
                buttonText='Choose Frame'
                imgExtension={['.jpg', '.gif', '.png', '.gif', '.jpeg']}
                maxFileSize={5242880 * 2}
                singleImage={true}
                fileContainerStyle={{
                  boxShadow: '0px 0px 0px black',
                  width: '50%',
                  backgroundColor: '#ddd',
                }}
                buttonClassName={classes.buttonStyles}
                onChange={(picture: File[]) => {
                  setUploadFrame(picture[0]);
                }}
              />
            </div>
          )}
        </Grid>

        <Grid item sm={12} md={12} lg={6} className={classes.column2}>
          <div>
            <Typography variant='h3'>Frame Details</Typography>

            <Typography
              variant='body2'
              style={{
                color: '#888888',
                backgroundColor: '#F0F0F0',
                padding: 10,
                borderRadius: 5,
                marginLeft: 5,
                marginRight: 5,
              }}
            >
              After the frame is uploaded, we will verify and approve it after
              which it will be displayed on the site.
            </Typography>

            <CustomTextField
              value={frameName}
              setValue={setFrameName}
              label='Frame Name'
              type='text'
              className={classes.inputLong}
            />

            <div className={classes.inputRow} style={{ marginTop: 20 }}>
              <CustomTextField
                value={frameWidth}
                setValue={setFrameWidth}
                label='Frame Width'
                type='number'
                className={classes.inputShort}
              />

              <CustomTextField
                value={frameHeight}
                setValue={setFrameHeight}
                label='Frame Height'
                type='number'
                className={classes.inputShort}
              />
            </div>

            <div className={classes.inputRow} style={{ marginTop: 20 }}>
              <CustomTextField
                value={frameTop}
                setValue={setFrameTop}
                label='Frame Top Width'
                type='number'
                className={classes.inputShort}
              />

              <CustomTextField
                value={frameBottom}
                setValue={setFrameBottom}
                label='Frame Bottom Width'
                type='number'
                className={classes.inputShort}
              />
            </div>

            <div className={classes.inputRow}>
              <CustomTextField
                value={frameLeft}
                setValue={setFrameLeft}
                label='Frame Left Width'
                type='number'
                className={classes.inputShort}
              />

              <CustomTextField
                value={frameRight}
                setValue={setFrameRight}
                label='Frame Right Width'
                type='number'
                className={classes.inputShort}
              />
            </div>

            <div style={{ marginTop: 40 }}>
              <Select
                label='Frame Shape'
                onChange={handleFrameShapeChange}
                value={frameShape}
                variant='outlined'
                style={{ width: '100%' }}
              >
                <MenuItem value='square'>Square</MenuItem>
                <MenuItem value='circle'>Circle</MenuItem>
              </Select>

              <Select
                label='Background Color Type'
                onChange={handleBackgroundTypeChange}
                value={backgroundColorType}
                variant='outlined'
                style={{ width: '100%', marginTop: 20 }}
              >
                <MenuItem value='solid'>Solid</MenuItem>
                <MenuItem value='linear'>Linear Gradient</MenuItem>
              </Select>

              <div className={classes.inputRow} style={{ marginTop: 20 }}>
                <CustomTextField
                  value={color1}
                  setValue={setColor1}
                  label={backgroundColorType === 'solid' ? 'Color' : 'Color 1'}
                  type='color'
                  className={classes.inputShort}
                />

                {backgroundColorType === 'linear' && (
                  <CustomTextField
                    value={color2}
                    setValue={setColor2}
                    label='Color 2'
                    type='color'
                    className={classes.inputShort}
                  />
                )}
              </div>

              <FormControlLabel
                style={{ marginTop: 10 }}
                control={
                  <Checkbox
                    checked={showTextBox}
                    onChange={handleShowTextBox}
                    inputProps={{ 'aria-label': 'Show Custom Text Box' }}
                  />
                }
                label='Show Custom Text Box on Frame'
              />
            </div>

            <button
              className={classes.uploadButton}
              onClick={submitImageUpload}
            >
              {loading ? (
                <ClipLoader color='#000' loading={loading} size={15} />
              ) : (
                'Upload Frame'
              )}
            </button>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Upload;

const useStyles = makeStyles((theme) => ({
  root: {
    height: window.innerHeight,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: '80%',
  },
  column1: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '100%',
    },
  },
  column2: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '85%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '100%',
    },
  },
  img: {
    width: '100%',
    height: 'auto',
  },
  imgPlaceHolder: {
    width: '90%',
    height: 512,
    backgroundColor: '#ddd',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyles: {
    backgroundColor: '#3F51B5',
    width: '90%',
    margin: 0,
    position: 'relative',
  },
  inputRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputLong: {
    width: '100%',
    marginTop: 20,
  },
  inputShort: {
    marginTop: 20,
    width: '47%',
  },
  uploadButton: {
    width: '100%',
    boxShadow: 'none',
    border: '0px solid black',
    backgroundColor: '#ddd',
    fontSize: '18px',
    padding: 10,
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 50,
    color: '#181818',
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

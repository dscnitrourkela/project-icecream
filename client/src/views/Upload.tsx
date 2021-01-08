import React, { useState } from 'react';

// Libraries
import ImageUploader from 'react-images-upload';
import {
  Grid,
  makeStyles,
  Container,
  Typography,
  Select,
  MenuItem,
} from '@material-ui/core';
import firebase from 'firebase/app';
import 'firebase/firestore';

// Helpers
import { uploadImage } from '../utils/uploadFrame';
import { determineRenderDimensions } from '../utils/helpers';

// Components
import CustomTextField from '../components/shared/TextField';

function Upload() {
  const classes = useStyles();
  const [uploadFrame, setUploadFrame] = useState<string | File>('');

  const [frameName, setFrameName] = useState<string>('');
  const [frameShape, setFrameShape] = useState<string>('square');
  const [frameWidth, setFrameWidth] = useState<number>(0);
  const [frameHeight, setFrameHeight] = useState<number>(0);

  const [frameTop, setFrameTop] = useState<number>(0);
  const [frameBottom, setFrameBottom] = useState<number>(0);
  const [frameLeft, setFrameLeft] = useState<number>(0);
  const [frameRight, setFrameRight] = useState<number>(0);

  const [color1, setColor1] = useState<string>('');
  const [color2, setColor2] = useState<string>('');
  const [backgroundColorType, setBackgroundColorType] = useState<string>(
    'solid'
  );

  const handleBackgroundTypeChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => setBackgroundColorType(event.target.value as string);

  const handleFrameShapeChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => setFrameShape(event.target.value as string);

  const submitImageUpload = async () => {
    const frameURL = await uploadImage(uploadFrame);

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
          type: backgroundColorType,
          color1,
          color2,
        },
        approved: false,
      })
      .then(() => console.log('done'));
  };

  return (
    <Container className={classes.root}>
      <Grid container spacing={2} className={classes.container}>
        <Grid item sm={12} md={12} lg={6} className={classes.column1}>
          <div className={classes.imgPlaceHolder} />
          {uploadFrame && (
            <img
              className={classes.img}
              src={URL.createObjectURL(uploadFrame)}
              alt='Upload Frame'
            />
          )}
        </Grid>

        <Grid item sm={12} md={12} lg={6} className={classes.column2}>
          <div>
            <Typography variant='h3'>Frame Details</Typography>

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
            </div>

            <ImageUploader
              className={classes.upload}
              withIcon={false}
              withLabel={false}
              buttonText='Choose Frame'
              imgExtension={['.jpg', '.gif', '.png', '.gif', '.jpeg']}
              maxFileSize={5242880 * 2}
              singleImage={true}
              fileContainerStyle={{ height: '20px' }}
              buttonClassName={classes.buttonStyles}
              onChange={(picture: File[]) => {
                setUploadFrame(picture[0]);
              }}
            />

            <button onClick={submitImageUpload}>Upload Frame</button>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Upload;

const useStyles = makeStyles(() => ({
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
  },
  column2: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '85%',
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
  },
  upload: {
    width: 'auto',
  },
  buttonStyles: {
    backgroundColor: '#3F51B5',
    width: '100%',
    height: 100,
    margin: 0,
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
}));

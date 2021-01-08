import React, { useState } from 'react';

// Libraries
import ImageUploader from 'react-images-upload';
import { Grid, makeStyles, Container, Typography } from '@material-ui/core';

// Components
import CustomTextField from '../components/shared/TextField';

function Upload() {
  const classes = useStyles();
  const [uploadFrame, setUploadFrame] = useState<null | File>(null);

  const [frameName, setFrameName] = useState<string>('');
  const [frameWidth, setFrameWidth] = useState<number>(0);
  const [frameHeight, setFrameHeight] = useState<number>(0);

  const [frameTop, setFrameTop] = useState<number>(0);
  const [frameBottom, setFrameBottom] = useState<number>(0);
  const [frameLeft, setFrameLeft] = useState<number>(0);
  const [frameRight, setFrameRight] = useState<number>(0);

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

        <Grid item sm={12} md={12} lg={6}>
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

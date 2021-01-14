import React from 'react';

// Libraries
import ImageUploader from 'react-images-upload';
import {
  Box,
  FormControlLabel,
  Switch,
  Select,
  MenuItem,
  Button,
  makeStyles,
} from '@material-ui/core';
import ClipLoader from 'react-spinners/BeatLoader';

// Components
import CustomTextField from '../shared/TextField';

const readFile = (file: File): PromiseLike<ArrayBuffer | string> =>
  new Promise((resolve) => {
    const reader = new FileReader();
    // @ts-ignore
    reader.addEventListener('load', () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  });

// Interfact
interface Props {
  primaryText: string;
  secondaryText: string;
  position: string;
  greyscale: boolean;
  uploadImage: string;
  loading: boolean;
  setPrimaryText: (param: string) => void;
  setSecondaryText: (param: string) => void;
  setPosition: (param: string) => void;
  setGreyscale: (param: boolean) => void;
  setUploadImage: (param: string) => void;
  overlayImage: () => void;
  showCustomText: boolean;
  setShowCustomText: (param: boolean) => void;
}

const EditBox: React.FC<Props> = (props) => {
  // Hooks
  const classes = useStyles();

  // Props
  const {
    primaryText,
    secondaryText,
    position,
    greyscale,
    uploadImage,
    loading,
    setPrimaryText,
    setSecondaryText,
    setPosition,
    setGreyscale,
    setUploadImage,
    overlayImage,
    showCustomText,
    setShowCustomText,
  } = props;

  // Event Handlers
  const handlePositionChange = (event: React.ChangeEvent<{ value: unknown }>) =>
    setPosition(event.target.value as string);

  const handleGreyscaleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setGreyscale(event.target.checked);
  };

  const handleShowCustomTextbox = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setShowCustomText(event.target.checked);
  };

  const handleImageUpload = async (e: any) => {
    const selected = e[0];
    if (selected) {
      let imageDataUrl = await readFile(selected);
      // @ts-ignore
      setUploadImage(imageDataUrl);
    }
  };

  const handleDownloadClick = (): void => {
    if (showCustomText) {
      if (primaryText === 'Primary Text')
        window.alert('Please enter the Primary Text');
      else if (secondaryText === 'Secondary Text')
        window.alert('Please enter the Secondary Text');
      else if (!uploadImage) window.alert('Please upload an image');
      else overlayImage();
    } else {
      overlayImage();
    }
  };

  return (
    <div className={classes.container}>
      <Box className={classes.features}>
        <FormControlLabel
          control={
            <Switch
              checked={showCustomText}
              onChange={handleShowCustomTextbox}
              name='Show Custom Textbox'
              color='primary'
            />
          }
          label='Show Custom Textbox'
        />

        {showCustomText && (
          <>
            <CustomTextField
              value={primaryText}
              setValue={setPrimaryText}
              label='Primary Text'
              type='text'
              className={classes.textInput}
            />

            <CustomTextField
              value={secondaryText}
              setValue={setSecondaryText}
              label='Secondary Text'
              type='text'
              className={classes.textInput}
            />

            <Select
              label='Textbox Position'
              onChange={handlePositionChange}
              value={position}
              variant='outlined'
              style={{ width: '100%', marginTop: 20 }}
            >
              <MenuItem value='top-right'>Top Right</MenuItem>
              <MenuItem value='top-left'>Top Left</MenuItem>
              <MenuItem value='bottom-right'>Bottom Right</MenuItem>
              <MenuItem value='bottom-left'>Bottom Left</MenuItem>
            </Select>
          </>
        )}

        <FormControlLabel
          control={
            <Switch
              checked={greyscale}
              onChange={handleGreyscaleChange}
              name='greyscale'
              color='primary'
            />
          }
          label='Greyscale'
        />

        <ImageUploader
          className={classes.upload}
          withIcon={false}
          withLabel={false}
          buttonText='CHOOSE IMAGE'
          imgExtension={['.jpg', '.gif', '.png', '.gif', '.jpeg']}
          maxFileSize={5242880 * 2}
          singleImage={true}
          fileContainerStyle={{
            height: '50px',
            boxShadow: 'none',
            backgroundColor: 'transparent',
          }}
          buttonClassName={classes.buttonStyles}
          onChange={handleImageUpload}
        />

        <Button
          onClick={handleDownloadClick}
          variant='contained'
          color='secondary'
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {loading ? (
            <ClipLoader color='#000' loading={loading} size={15} />
          ) : (
            'Download'
          )}
        </Button>
      </Box>
    </div>
  );
};

export default EditBox;

const useStyles = makeStyles((theme) => ({
  container: {
    width: '30%',
    height: '500px',
    transform: 'translate(0,-50%)',
    position: 'absolute',
    top: '50%',
    right: 0,
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    zIndex: 10,
    [theme.breakpoints.between('sm', 'md')]: {
      transform: 'translate(-50%, 0)',
      top: '90%',
      left: '50%',
      width: '50%',
      justifyContent: 'center',
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      transform: 'translate(-50%, 0)',
      top: '85%',
      left: '50%',
      width: '50%',
      justifyContent: 'center',
      height: '450px',
    },
    [theme.breakpoints.down('xs')]: {
      transform: 'translate(-50%, 0)',
      top: '48%',
      left: '50%',
      width: '50%',
      justifyContent: 'center',
      height: '450px',
    },
  },
  features: {
    zIndex: 10,
    height: '100%',
    width: '60%',
    minWidth: 300,
    backgroundImage: '#334d50',
    background: 'linear-gradient(to right, #FDC830, #F37335)',
    padding: '1rem',
    borderRadius: '5px',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 20,
  },
  frame: {
    width: '100%',
    minHeight: window.innerHeight + 50,
    zIndex: 0,
  },
  upload: {
    width: 'auto',
  },
  buttonStyles: {
    backgroundColor: '#3F51B5',
    width: '100%',
    height: 'fit-content',
    margin: 0,
  },
  textInput: {
    marginTop: 20,
    color: '#fff',
  },
}));

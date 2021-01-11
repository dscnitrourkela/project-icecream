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
  setPrimaryText: (param: string) => void;
  setSecondaryText: (param: string) => void;
  setPosition: (param: string) => void;
  setGreyscale: (param: boolean) => void;
  setUploadImage: (param: string) => void;
  overlayImage: () => void;
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
    setPrimaryText,
    setSecondaryText,
    setPosition,
    setGreyscale,
    setUploadImage,
    overlayImage,
  } = props;

  // Event Handlers
  const handlePositionChange = (event: React.ChangeEvent<{ value: unknown }>) =>
    setPosition(event.target.value as string);

  const handleGreyscaleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setGreyscale(event.target.checked);
  };

  const handleImageUpload = async (e: any) => {
    // const selected = e.target.files[0];
    const selected = e[0];
    if (selected) {
      let imageDataUrl = await readFile(selected);
      // @ts-ignore
      setUploadImage(imageDataUrl);
    }
  };

  return (
    <Box className={classes.features}>
      <FormControlLabel
        control={
          <Switch
            checked={greyscale}
            onChange={handleGreyscaleChange}
            name='greyscale'
            color='primary'
          />
        }
        label='Grayscale'
      />

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
        label='Frame Shape'
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

      <ImageUploader
        className={classes.upload}
        withIcon={false}
        withLabel={false}
        buttonText='CHOOSE IMAGE'
        imgExtension={['.jpg', '.gif', '.png', '.gif', '.jpeg']}
        maxFileSize={5242880 * 2}
        singleImage={true}
        fileContainerStyle={{
          height: 'fit-content',
          boxShadow: 'none',
          backgroundColor: 'transparent',
        }}
        buttonClassName={classes.buttonStyles}
        onChange={handleImageUpload}
      />

      <Button onClick={overlayImage} variant='contained' color='secondary'>
        Download
      </Button>
    </Box>
  );
};

export default EditBox;

const useStyles = makeStyles((theme) => ({
  features: {
    transform: 'translate(-50%,-50%)',
    position: 'absolute',
    right: '5%',
    top: '50%',
    zIndex: 10,
    height: '60%',
    width: '350px',
    backgroundImage: '#334d50',
    background: 'linear-gradient(to right, #FDC830, #F37335)',
    padding: '1rem',
    borderRadius: '5px',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 20,
    [theme.breakpoints.down('sm')]: {
      left: '50%',
      top: '70%',
      width: '320px',
    },
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

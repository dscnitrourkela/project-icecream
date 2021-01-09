import axios from 'axios';

const API = {
  CLOUDINARY: {
    FRAME_UPLOAD: 'https://api.cloudinary.com/v1_1/dalqfvowk/image/upload',
  },
};

export const uploadImage = async (image: Blob | string) => {
  // Create the form to be sent to the API
  const formData = new FormData();
  formData.append('file', image);
  formData.append('upload_preset', 'icecream_frames');

  try {
    // Upload the image and return the secure_url
    const {
      data: { secure_url },
    } = await axios({
      url: API.CLOUDINARY.FRAME_UPLOAD,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: formData,
    });

    return secure_url;
  } catch (error) {
    console.log(error);
  }
};

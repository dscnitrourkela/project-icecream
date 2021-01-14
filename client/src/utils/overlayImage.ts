// Libraries
import jimp from 'jimp';
import html2canvas from 'html2canvas';
import download from 'downloadjs';

// Utilities
import getCroppedImg from './cropImage';

// Types
import { FrameData } from './types';

export const overlayImage = async (
  frame: FrameData | null,
  uploadImage: string,
  croppedAreaPixels: any,
  greyscale: boolean,
  textboxDimensions: { width: number; height: number },
  position: string,
  showCustomText: boolean,
  setLoading: (param: boolean) => void
) => {
  // Error Handling for no parameters
  if (
    !frame ||
    !uploadImage ||
    !croppedAreaPixels ||
    !textboxDimensions ||
    !position
  ) {
    throw new Error('Required Parameters not found');
  }

  setLoading(true);

  const {
    dimensions: { width, height, top, bottom, right, left },
  } = frame;

  const resizedTop = (1000 * top) / height;
  const resizedBottom = (1000 * bottom) / height;
  const resizedRight = (1000 * right) / width;
  const resizedLeft = (1000 * left) / width;

  let x = 0,
    y = 0;
  if (position === 'top-left') {
    x = resizedLeft;
    y = resizedTop;
  } else if (position === 'top-right') {
    x = 1000 - resizedRight - 300;
    y = resizedTop;
  } else if (position === 'bottom-left') {
    x = resizedLeft;
    y = 1000 - resizedBottom - 100;
  } else if (position === 'bottom-right') {
    x = 1000 - resizedRight - 300;
    y = 1000 - resizedBottom - 100;
  }

  // Crop the user profile image as per the crop and zoom
  const cropProfile = await getCroppedImg(uploadImage, croppedAreaPixels);
  // Read the profile frame and cropped image by jimp and resize it.
  const frameImage = (await jimp.read(frame.frame)).resize(1000, 1000);
  const profile = (await jimp.read(cropProfile)).resize(
    1000 - resizedRight - resizedLeft,
    1000 - resizedBottom - resizedTop
  );
  if (greyscale) profile.greyscale();

  if (showCustomText) {
    const customTextBox: HTMLElement | null = document.querySelector(
      '#custom-text-box'
    );

    if (customTextBox) {
      const canvas = await html2canvas(customTextBox);
      if (canvas) {
        const url = canvas.toDataURL();
        const customTextBoxImage = (await jimp.read(url)).resize(300, 100);

        frameImage
          .composite(profile, resizedTop, resizedLeft)
          .composite(customTextBoxImage, x, y)
          // @ts-ignore
          .getBase64(jimp.AUTO, async (err: any, src: any) => {
            download(src, 'profile-frame.png', 'image/png');
            setLoading(false);
          });
      }
    }
  } else {
    frameImage
      .composite(profile, x, y)
      // @ts-ignore
      .getBase64(jimp.AUTO, async (err: any, src: any) => {
        download(src, 'profile-frame.png', 'image/png');
        setLoading(false);
      });
  }
};

// Libraries
import jimp from 'jimp';
import html2canvas from 'html2canvas';
import download from 'downloadjs';

// Utilities
import getCroppedImg from './cropImage';
import {
  determineTextboxDimensions,
  determineTextBoxPosition,
} from './helpers';

// Types
import { FrameData } from './types';

export const overlayImage = async (
  frame: FrameData | null,
  uploadImage: string,
  croppedAreaPixels: any,
  greyscale: boolean,
  textboxDimensions: { width: number; height: number },
  position: string
) => {
  // import('jimp').then(async (jimp) => {
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

  // Destructuring required variables
  const {
    dimensions: { width, height, top, bottom, right, left },
  } = frame;
  const {
    width: textBoxWidth,
    height: textBoxHeight,
  } = determineTextboxDimensions(
    textboxDimensions.width,
    textboxDimensions.height,
    width - right - left,
    height - top - bottom
  );
  const { x, y } = determineTextBoxPosition(
    width,
    height,
    top,
    right,
    bottom,
    left,
    textBoxWidth,
    textBoxHeight,
    position
  );

  // Crop the user profile image as per the crop and zoom
  const cropProfile = await getCroppedImg(uploadImage, croppedAreaPixels);

  // Read the profile frame and cropped image by jimp and resize it.
  const frameImage = (await jimp.read(frame.frame)).resize(width, height);
  const profile = (await jimp.read(cropProfile)).resize(
    width - right - left,
    height - top - bottom
  );
  if (greyscale) profile.greyscale();

  const customTextBoxElement: HTMLElement | null = document.querySelector(
    '#custom-text-box'
  );
  if (customTextBoxElement) {
    const canvas = await html2canvas(customTextBoxElement);

    if (canvas) {
      const url = canvas.toDataURL();
      const customTextBox = (await jimp.read(url)).resize(
        textBoxWidth,
        textBoxHeight
      );

      frameImage
        .composite(profile, top, left)
        .composite(customTextBox, x, y)
        // @ts-ignore
        .getBase64(jimp.AUTO, async (err: any, src: any) => {
          download(src, 'profile-frame.png', 'image/png');
          console.log('end');
        });
    }
  }
  // });
};

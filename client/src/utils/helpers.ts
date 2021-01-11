import { FrameDimensions } from './types';

export const determineRenderDimensions = (
  width: number,
  height: number,
  top: number,
  right: number,
  bottom: number,
  left: number,
  frameWidth: number = 512
): FrameDimensions => {
  const cropperDivWidth = (width * frameWidth) / (width - left - right);
  const cropperDivHeight = (height * frameWidth) / (height - top - bottom);

  const cropContainerTop = (cropperDivHeight * top) / height;
  const cropContainerBottom = (cropperDivHeight * bottom) / height;
  const cropContainerLeft = (cropperDivWidth * left) / width;
  const cropContainerRight = (cropperDivWidth * right) / width;

  return {
    width: cropperDivWidth,
    height: cropperDivHeight,
    top: cropContainerTop,
    bottom: cropContainerBottom,
    left: cropContainerLeft,
    right: cropContainerRight,
  };
};

export const determineTextboxDimensions = (
  width: number,
  height: number,
  emptyWidth: number,
  emptyHeight: number
): { width: number; height: number } => {
  return {
    height: (height * emptyHeight) / 512,
    width: (width * emptyWidth) / 512,
  };
};

export const determineTextBoxPosition = (
  width: number,
  height: number,
  top: number,
  right: number,
  bottom: number,
  left: number,
  textBoxWidth: number,
  textBoxHeight: number,
  position: string
): { x: number; y: number } => {
  let x: number, y: number;
  if (position === 'top-right') {
    y = top;
    x = width - right - textBoxWidth;
  } else if (position === 'top-left') {
    y = top;
    x = left;
  } else if (position === 'bottom-right') {
    y = height - bottom - textBoxHeight;
    x = width - right - textBoxWidth;
  } else if (position === 'bottom-left') {
    y = height - bottom - textBoxHeight;
    x = left;
  }

  // @ts-ignore
  return { x, y };
};

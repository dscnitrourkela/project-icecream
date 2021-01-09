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

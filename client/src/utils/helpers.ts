import { FrameDimensions } from './types';

export const determineRenderDimensions = (
  width: number,
  height: number,
  top: number,
  right: number,
  bottom: number,
  left: number
): FrameDimensions => {
  const cropperDivWidth = (width * 512) / (width - left - right);
  const cropperDivHeight = (height * 512) / (height - top - bottom);

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

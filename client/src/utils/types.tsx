export declare type Crop = {
  x: number;
  y: number;
};

export declare type Gradient = {
  type: string;
  color1: string;
  color2: string;
};

export declare type FrameBackground = {
  type: string;
  color1: string;
  color2: string;
};

export declare type FrameDimensions = {
  width: number;
  height: number;
  top: number;
  right: number;
  left: number;
  bottom: number;
};

export declare type FrameData = {
  name: string;
  frame: string;
  shape: string;
  dimensions: FrameDimensions;
  renderDimensions: FrameDimensions;
  backgroundColor: FrameBackground;
  approved: boolean;
};

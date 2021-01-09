export declare var process: {
  env: {
    NODE_ENV: string;
    REACT_APP_APIKEY: string;
    REACT_APP_AUTH_DOMAIN: string;
    REACT_APP_PROJECT_ID: string;
    REACT_APP_STORAGE_BUCKET: string;
    REACT_APP_MESSAGING_SENDER_ID: string;
    REACT_APP_APP_ID: string;
  };
};

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

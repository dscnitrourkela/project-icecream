import { determineRenderDimensions } from './helpers';

export const data = [
  {
    name: 'hacktoberfest',
    frame: '/frame.png',
    shape: 'square',
    dimensions: {
      width: 3840,
      height: 3840,
      top: 384,
      right: 384,
      bottom: 384,
      left: 384,
    },
    renderDimensions: determineRenderDimensions(3840, 3840, 384, 384, 384, 384),
    background: {
      type: 'linear',
      color1: 'blue',
      color2: 'blue',
    },
  },
  {
    name: 'mlh-guild',
    frame: '/frame3.png',
    shape: 'square',
    dimensions: {
      width: 2250,
      height: 2250,
      top: 245,
      right: 245,
      bottom: 245,
      left: 245,
    },
    renderDimensions: determineRenderDimensions(2250, 2250, 245, 245, 245, 245),
    background: {
      type: 'linear',
      color1: '#F60534',
      color2: '#FED900',
    },
  },
];

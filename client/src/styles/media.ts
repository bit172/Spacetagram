import { generateMedia } from 'styled-media-query';

export const BREAKPOINTS = {
  xs: '500px',
  sm: '768px',
  md: '992px',
  laptop: '1024px',
  lg: '1080px',
};

export default generateMedia(BREAKPOINTS);
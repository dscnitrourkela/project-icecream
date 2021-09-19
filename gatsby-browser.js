/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

require('./src/styles/global.css');

exports.onClientEntry = () => {
  // eslint-disable-next-line global-require
  require('babel-polyfill');
};

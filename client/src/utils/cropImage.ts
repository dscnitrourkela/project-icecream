const createImage = (url: any) =>
  new Promise((resolve: any, reject: any) => {
    const image = new Image();
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', (error: any) => reject(error));
    image.setAttribute('crossOrigin', 'anonymous'); // needed to avoid cross-origin issues on CodeSandbox
    image.src = url;
  });

// @ts-nocheck
function getRadianAngle(degreeValue: any) {
  return (degreeValue * Math.PI) / 180;
}

/**
 * This function was adapted from the one in the ReadMe of https://github.com/DominicTobias/react-image-crop
 * @param {File} image - Image File url
 * @param {Object} pixelCrop - pixelCrop Object provided by react-easy-crop
 * @param {number} rotation - optional rotation parameter
 */
// @ts-nocheck
export default async function getCroppedImg(
  imageSrc: any,
  pixelCrop: any,
  rotation = 0
) {
  const image = await createImage(imageSrc);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  // @ts-ignore
  const maxSize = Math.max(image.width, image.height);
  const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2));

  // set each dimensions to double largest dimension to allow for a safe area for the
  // image to rotate in without being clipped by canvas context
  canvas.width = safeArea;
  canvas.height = safeArea;

  // translate canvas context to a central location on image to allow rotating around the center.
  // @ts-ignore
  ctx.translate(safeArea / 2, safeArea / 2);
  // @ts-ignore
  ctx.rotate(getRadianAngle(rotation));
  // @ts-ignore
  ctx.translate(-safeArea / 2, -safeArea / 2);

  // draw rotated image and store data.
  // @ts-ignore
  ctx.drawImage(
    // @ts-ignore
    image,
    // @ts-ignore
    safeArea / 2 - image.width * 0.5,
    // @ts-ignore
    safeArea / 2 - image.height * 0.5
  );
  // @ts-ignore
  const data = ctx.getImageData(0, 0, safeArea, safeArea);

  // set canvas width to final desired crop size - this will clear existing context
  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  // paste generated rotate image with correct offsets for x,y crop values.
  // @ts-ignore
  ctx.putImageData(
    data,
    // @ts-ignore
    Math.round(0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x),
    // @ts-ignore
    Math.round(0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y)
  );

  // As Base64 string
  return canvas.toDataURL('image/jpeg');

  // As a blob
  // return new Promise((resolve) => {
  //   resolve(canvas.toDataURL());
  //   // canvas.toBlob((file) => {
  //   //   resolve(URL.createObjectURL(file));
  //   // }, 'image/jpeg');
  // });
}

/**
 * the useReducer hook from react takes the initialState as
 * one of its parameters. If no param is passed, the initial state
 * would be considered as null which not necessarily wrong but not at
 * all a better practice. It can lead to unknown undefined errors during
 * build time.
 * As defined below, this is the initial state structure considering all
 * the required fields related to the user profile image.
 */
export const initialState = {
  imageDetails: {
    originalDimensions: {
      width: 0,
      height: 0,
    },
    renderDimensions: {
      width: 0,
      height: 0,
    },
    position: {
      x: 0,
      y: 0,
    },
    scale: 1,
    id: "user-profile-image",
    image: null,
  },
  textDetails: {
    name: {
      value: "",
      id: "user-name",
      scale: 1,
      dimensions: {
        width: 100,
        height: 50,
      },
      position: {
        x: 50,
        y: 50,
      },
    },
    guild: {
      value: "",
      id: "user-guild",
      dimensions: {
        x: 100,
        y: 50,
      },
      position: {
        x: 100,
        y: 100,
      },
    },
  }
};

/**
 * Similar to redux, we are defining all the different types of
 * actions related to image state changes to avoid any errors down
 * the line.
 */
export const CANVAS_ACTIONS = Object.freeze({
  UPLOAD_IMAGE: "IMAGE/UPDATE_IMAGE_DETAILS",
  UPDATE_IMAGE_SCALE: "IMAGE/UPDATE_IMAGE_SCALE",
  UPDATE_IMAGE_RENDERED_DIMENSIONS: "IMAGE/UPDATE_IMAGE_RENDERED_DIMENSIONS",
  UPDATE_IMAGE_POSITIONS: "IMAGE/UPDATE_IMAGE_POSITIONS",
});

import { CANVAS_ACTIONS } from "../actions/frames.action";

/**
 * Similar to Redux, canvasReducer handles all the different
 * actions and the changes to be made to the state depending
 * on the action type.
 *
 * For now, each case returns the default state. We'll start
 * writing cases after the context API is setup
 */
export default function canvasReducer(state, action) {
  switch (action.type) {
    case CANVAS_ACTIONS.UPLOAD_IMAGE:
      return {
        ...state,
        originalDimensions: {
          width: action.payload.width,
          height: action.payload.height,
        },
        image: action.payload.image,
      };

    case CANVAS_ACTIONS.UPDATE_IMAGE_RENDERED_DIMENSIONS:
      return {
        ...state,
        renderDimensions: {
          width: action.payload.width,
          height: action.payload.height,
        },
      };

    case CANVAS_ACTIONS.UPDATE_IMAGE_SCALE:
      return {
        ...state,
        scale: action.payload.scale,
      };

    case CANVAS_ACTIONS.UPDATE_IMAGE_POSITIONS:
      return {
        ...state,
        position: {
          x: action.payload.x,
          y: action.payload.y,
        },
      };

    default:
      return state;
  }
}

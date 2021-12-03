import { CANVAS_ACTIONS } from "../actions/compose.action";

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
      return state;

    case CANVAS_ACTIONS.UPDATE_IMAGE_DIMENSIONS:
      return state;

    case CANVAS_ACTIONS.UPDATE_IMAGE_POSITIONS:
      return state;

    default:
      return state;
  }
}

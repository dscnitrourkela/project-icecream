import { CANVAS_ACTIONS } from "../actions/frames.action";
import { CONTROLLER_ACTIONS } from "../actions/controller.action";

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
        imageDetails: {
          ...state.imageDetails,
          originalDimensions: {
            width: action.payload.width,
            height: action.payload.height,
          },
          image: action.payload.image,
        }
      };

    case CANVAS_ACTIONS.UPDATE_IMAGE_RENDERED_DIMENSIONS:
      return {
        ...state,
        imageDetails: {
          ...state.imageDetails,
          renderDimensions: {
            width: action.payload.width,
            height: action.payload.height,
          },
        }
      };

    case CANVAS_ACTIONS.UPDATE_IMAGE_SCALE:
      return {
        ...state,
        imageDetails: {
          ...state.imageDetails,
          scale: action.payload.scale,
        }
      };

    case CANVAS_ACTIONS.UPDATE_IMAGE_POSITIONS:
      return {
        ...state,
        imageDetails: {
          ...state.imageDetails,
          position: {
            x: action.payload.x,
            y: action.payload.y,
          },
        }
      };

    case CONTROLLER_ACTIONS.UPDATE_NAME_INPUT:
			return {
				...state,
				textDetails: {
					...state.textDetails,
					name: {
            ...state.textDetails.name,
            value: action.payload,
          }
				}
			}

    case CONTROLLER_ACTIONS.UPDATE_NAME_SCALE:
      return {
				...state,
				textDetails: {
					...state.textDetails,
					name: {
            ...state.textDetails.name,
            scale: action.payload,
          }
				}
			}

    case CONTROLLER_ACTIONS.UPDATE_NAME_POSITIONS:
      return {
				...state,
				textDetails: {
					...state.textDetails,
					name: {
            ...state.textDetails.name,
            position: action.payload,
          }
				}
			}

		case CONTROLLER_ACTIONS.UPDATE_GUILD_INPUT:
			return {
				...state,
				textDetails: {
					...state.textDetails,
					guild: {
            ...state.textDetails.guild,
            value: action.payload,
          }
				}
			}

		case CONTROLLER_ACTIONS.UPDATE_GUILD_SCALE:
			return {
				...state,
				textDetails: {
					...state.textDetails,
					guild: {
            ...state.textDetails.guild,
            scale: action.payload,
          }
				}
			}

    case CONTROLLER_ACTIONS.UPDATE_GUILD_POSITIONS:
      return {
        ...state,
        textDetails: {
          ...state.textDetails,
          guild: {
            ...state.textDetails.guild,
            position: action.payload,
          }
        }
      }
    default:
      return state;
  }
}

import { CONTROLLER_ACTIONS } from "../actions/controller.action";

export default function controllerReducer(state, action) {
	switch(action.type) {
		case CONTROLLER_ACTIONS.UPDATE_NAME_INPUT:
			return {
				...state,
				textDetails: {
					...state.textDetails,
					value: action.payload,
				}
			}

		case CONTROLLER_ACTIONS.UPDATE_GUILD_INPUT:
			return {
				...state,
				guildDetails: {
					...state.guildDetails,
					value: action.payload,
				}
			}

		default:
			return state;
	}
}
import React from 'react';

// Libraries
import styled from 'styled-components';

// Utils
import { useFrames } from "../store/contexts/frames.context";
import { CONTROLLER_ACTIONS } from "../store/actions/controller.action";


const Controller = () => {
	const [state, dispatch] = useFrames();
	const {textDetails: {name, guild}} = state;

	return (
		<>
			<input value={name.value} onChange={(e) => {
				dispatch({
					type: CONTROLLER_ACTIONS.UPDATE_NAME_INPUT,
					payload: e.target.value
				})
			}} />

			<input value={guild.value} onChange={(e) => {
				dispatch({
					type: CONTROLLER_ACTIONS.UPDATE_GUILD_INPUT,
					payload: e.target.value
				})
			}} />
		</>
	)
}

export default Controller;
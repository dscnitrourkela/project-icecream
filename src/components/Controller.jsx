import React from 'react';

// Libraries
import styled from 'styled-components';

// Utils
import { useFrames } from "../store/contexts/frames.context";
import { CONTROLLER_ACTIONS } from "../store/actions/controller.action";

const Div = styled.div`
	background: #333333;
	border-radius: 7px;

	padding: 1rem;
`

const Input = styled.input`
	width: 100%;
	padding: 5px 15px;
	margin-bottom: 1rem;
	border-radius: 2rem;
	border: 1px solid rgb(102, 102, 102);
	font-size: 1.2rem;
	line-height: 1.6;
	background: transparent;
	color: rgb(102, 102, 102);
`

const Controller = () => {
	const [state, dispatch] = useFrames();
	const {textDetails: {name, guild}} = state;

	return (
		<Div>
			<Input
				type="text"
				value={name.value}
				placeholder="Enter your name"
				onChange={(e) => {
					dispatch({
						type: CONTROLLER_ACTIONS.UPDATE_NAME_INPUT,
						payload: e.target.value
					})
				}}
			/>

			<Input
				type="text"
				value={guild.value}
				placeholder="Enter your guild name"
				onChange={(e) => {
					dispatch({
						type: CONTROLLER_ACTIONS.UPDATE_GUILD_INPUT,
						payload: e.target.value
					})
				}}
			/>
		</Div>
	)
}

export default Controller;
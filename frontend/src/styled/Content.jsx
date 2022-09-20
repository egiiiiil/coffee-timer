import styled from 'styled-components'

const Content = styled.div`
	grid-column-start: 2;
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-start;
	background: rgba(255, 255, 255, 0.6)	;
	padding: 1.25rem;
	border-radius: 0.75rem;
	backdrop-filter: blur(16px);
	margin-bottom: 2em;
`
const DashboardContent = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	
	h1, h2 {
		align-self: flex-start;
	}
	section {
		display: flex;
		justify-content: center;
		form {	
			width: 50%;
		}
	}
`
const DashboardCardContainer = styled.section`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 0.5em;
	@media (max-width: 576px) {
		flex-direction: column;
		flex-wrap: nowrap;
	}
`
const DashboardCard = styled.div`	
	width: 49%;
	@media (max-width: 576px) {
		width: 100%;
	}
	/* border: 2px solid black; */
	border-radius: 0.75rem;
	background-color: rgba(255, 255, 255, 1);

	box-shadow:  1px 0px 17px -1px rgba(215, 215, 215, 0.6);
	margin-bottom: 0.5em;
	padding: 0.8em;
	div {
		display: flex;
		justify-content: space-between;
	}
`
const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	label {

	}

	div {
		width: 100%;
		.ratio-measurement__container {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		.ratio-measurement__container--span {
			label {
				width: 100%;
				height: 100%;
			}
			display: flex;
			flex-direction: column;
		}
		}


	}
	.form__input--small {
			height: 2.5rem;
			width: 7rem; 
			/* background-color: #fff;
			padding: 1.25rem;
			border-radius: 0.75rem; */
			text-align: center;
		}
	.form__input--big {
			height: 2.5rem;
			width: 100%;
			/* background-color: #fff;
			padding: 1.25rem;
			border-radius: 0.75rem; */
			text-align: center;
		}
	.form__input--select {
		height: 2.5rem;
		width: 100%; 
		padding: 0;
		/* background-color: #fff;
		padding: 1.25rem;
		border-radius: 0.75rem; */
		text-align: center;
		resize: none;
	}
	.form__input--textarea {
		height: 10rem;
		width: 100%; 
		/* background-color: #fff;
		padding: 1.25rem;
		border-radius: 0.75rem; */
		text-align: center;
		resize: none;
	}
	.form__input--button {
		height: 2.5rem;
		width: 100%; 
		background-color: #000;
		color: #fff;

		border-radius: 0.75rem;
		text-align: center;
		}
	input, textarea, select {
		margin-bottom: 0.5em;
		background-color: #fff;
		padding: 1.25rem;
		border-radius: 0.75rem;
	}
`


export { Content, DashboardContent, DashboardCardContainer, DashboardCard, Form } 

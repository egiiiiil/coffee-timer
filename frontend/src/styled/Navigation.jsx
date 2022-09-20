import styled from 'styled-components'

const Header = styled.header`
	grid-column: span 3 / span 3;
	height: 4em;
	/* background: rgba(255, 255, 255, 0.6);
	margin-bottom: 0.6em; */
`

const Navigation = styled.nav`
`
const Ul = styled.ul`
	margin: 0.25em 1em;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	gap: 2em;
	align-items: center;
	
	li:not(:first-child) > a, button {
		display: flex;
		align-items: center;
		gap: 0.2em;
	}

	li:nth-child(1){
		width: 100%;
	}
	/* li:last-child {
		margin-right: 2em;
	} */
`


export { Header, Navigation, Ul }
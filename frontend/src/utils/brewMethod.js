const brewMethod = (method) => {
	switch (method) {
		case 'fench-press':
			return <p>French press</p>
		case 'cold-brew':
			return <p>Cold brew</p>
		case 'siphon':
			return <p>Siphon</p>
		case 'v60':
			return <p>V60</p>
		case 'kalita-wave':
			return <p>Kalita Wave</p>
		case 'chemex':
			return <p>Chemex</p>
		case 'clever-dripper':
			return <p>Clever Dripper</p>
		case 'espresso':
			return <p>Espresso</p>
		case 'moka-pot':
			return <p>Moka pot</p>
		case 'aeropress':
			return <p>AeroPress</p>
		default:
			return <p>V60</p>
	}
}

export default brewMethod

import '../styles/tailwind.css'

import { Toaster } from 'react-hot-toast'

function App({ Component, pageProps }) {
	return(<>
		<Toaster
			position="bottom-center"
			reverseOrder={false}
		/>
		<Component {...pageProps} />
	</>)
}

export default App

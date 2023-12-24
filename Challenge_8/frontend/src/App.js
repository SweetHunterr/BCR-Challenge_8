import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cars from './pages/Cars';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/cars' element={<Cars />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;

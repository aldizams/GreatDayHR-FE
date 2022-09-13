import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components';
import {
	DetailPage,
	JadwalPage,
	LoginPage,
	RuangPage,
	AdminPage,
} from './pages';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<JadwalPage />} />
				<Route path="/ruangan" element={<RuangPage />} />
				<Route path="/ruangan/detail" element={<DetailPage />} />
				<Route path="/admin/login" element={<LoginPage />} />
				<Route path="/admin" element={<AdminPage />} />
			</Routes>
		</>
	);
}

export default App;

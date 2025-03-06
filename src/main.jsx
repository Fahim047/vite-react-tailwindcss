import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import App from './App.jsx';
import './index.css';
createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/about" element={<div>About</div>} />
				<Route path="*" element={<div>404</div>} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
);

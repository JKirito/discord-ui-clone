import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import CreateAccount from './pages/CreateAccount'

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/login' element={<Login />}></Route>
					<Route path='/create-account' element={<CreateAccount />}></Route>
				</Routes>
			</Router>
		</div>
	)
}

export default App
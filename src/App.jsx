import { useState } from 'react'
import './App.css'

function App() {
	const initialFormData = {
		name: '',
		email: '',
		password: '',
		password2: '',
	}
	const [formData, setformData] = useState(initialFormData)

	const handleSubmit = e => {
		e.preventDefault()

		if (formData.password !== formData.password2)
			return alert('Passwords dont match')

		alert('registration successful')
	}
	const handleChange = e => {
		setformData(prev => ({
			...prev,
			[e.target.name]: e.target.value,
		}))
	}
	return (
		<section id='register-form'>
			<div className='container'>
				<h2 className='regis-title'>Sign up</h2>
				<form className='regis-form' onSubmit={handleSubmit}>
					<label htmlFor='name' className='regis-input'>
						<input
							type='text'
							placeholder='Enter your name'
							onChange={handleChange}
							name='name'
							value={formData.name}
						/>
					</label>
					<label htmlFor='email' className='regis-input'>
						<input
							type='email'
							placeholder='Enter your email'
							onChange={handleChange}
							name='email'
							value={formData.email}
						/>
					</label>
					<label htmlFor='password' className='regis-input'>
						<input
							type='password'
							placeholder='Enter your password'
							onChange={handleChange}
							name='password'
							value={formData.password}
						/>
					</label>
					<label htmlFor='password' className='regis-input'>
						<input
							type='password'
							placeholder='Repeat your password'
							onChange={handleChange}
							name='password2'
							value={formData.password2}
						/>
					</label>
					<button type='submit' className='regis-btn'>
						REGISTER
					</button>
				</form>
			</div>
		</section>
	)
}

export default App

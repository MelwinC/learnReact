import { useState } from 'react'
import '../styles/Footer.css'

const Footer = () => {
	const [inputValue, setInputValue] = useState('')

	function handleInput(e) {
		setInputValue(e.target.value)
	}

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<input
				placeholder='Entrez votre mail'
				onChange={handleInput}
				value={inputValue}
			/>
			<button className='btn'
				onClick={() =>
					isEmail(inputValue)
						? alert(inputValue)
						: alert("Veuillez respecter le format de mail SVP")
				}
			>Envoyer
			</button>
		</footer >
	)
}

function isEmail(val) {
	let valid = true;
	let regEmail =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!regEmail.test(val)) {
		valid = false;
	}
	return valid;
}
export default Footer

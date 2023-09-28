import React, { useState } from 'react'
import './App.css'

const niger = {
	band: 'balas',
	weapon: 'katana',
	friends: [{ name: 'Big Smouk' }, { name: 'Rider' }],
}
 
const App = () => (
	<>
		<div className='niger'>
			{niger.friends.map(({ name }) => (
				<NigerBand grove={name} />
			))}
		</div>
		<NigerBand grove={niger.band} />
		<div>
			{niger.friends.map(({ name }) => (
				<NigerBand grove={name} />
			))}
		</div>
		<NigerBand grove={niger.band} />
	</>
)

const NigerBand = ({ grove }) => <div>{grove}</div>

export default App

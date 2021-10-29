import './App.css';

function App(){
	return(
		<div className="wholepage">
			<div className="navbar">
				<ul>
					<li>CrypTop</li>
					<li>Search</li>
					<li>About</li>
				</ul>
			</div>
			<div className="wrapper">
				<div className="card">
					<img alt="coinlogo" src="https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png" />
					<div>
						<h3> Bitcoin </h3>
						<h2> 50,000 </h2>
					</div>
				</div>
				<div className="card">
					<img alt="coinlogo" src="https://assets.coingecko.com/coins/images/279/thumb/ethereum.png" />
					<div>
						<h3> Ethereum </h3>
						<h2> 3,000 </h2>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App;
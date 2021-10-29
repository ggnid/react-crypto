import './App.css';
import bitcoin_logo from './asset/bitcoin_logo.svg';
import ethereum_logo from './asset/ethereum_logo.svg';
import doge_logo from './asset/doge_logo.svg';
import polkadot_logo from './asset/polkadot_logo.svg';
import filecoin_logo from './asset/filecoin_logo.svg';
import uniswap_logo from './asset/uniswap_logo.svg';

function Card(props){
	return(
		<div className="card">
			<img alt='logo' src={props.img} className="card__img" />
			<div className="card__body">
				<h2 className="card__title">{props.title}</h2>
				<h3 className="card__price">{props.price}</h3>	
			</div>
		</div>
	)
}

function App() {
	return (
		<div className="wholepage">
			<div className="navbar">
				<ul>
					<li>CrypTop</li>
					<li>SearchBox</li>
					<li>About</li>
				</ul>	
			</div>
			<div className="wrapper">
				<Card
		          img={bitcoin_logo}
		          title="Bitcoin"
		          price="50000.11"
		        />
		        <Card
		          img={ethereum_logo}
		          title="Ethereum"
		          price="3000.22"
		        />
		        <Card
		          img={uniswap_logo}
		          title="Uniswap"
		          price="29.33"
		        />
		        <Card
		          img={doge_logo}
		          title="Dogecoin"
		          price="0.55"
		        />
		        <Card
		          img={filecoin_logo}
		          title="Filecoin"
		          price="33.11"
		        />
		        <Card
		          img={polkadot_logo}
		          title="Polkadot"
		          price="30.22"
		        />

	        </div>


	    </div>	
	)
}

export default App;
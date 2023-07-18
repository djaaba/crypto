import React from "react";
import axios from "axios";

import "./App.css";
import { ICoin } from "./types";
import { Row } from "./components";

function App() {
	const [coins, setCoins] = React.useState<ICoin[]>();
	const [loading, setLoading] = React.useState<boolean>(true);
	const [error, setError] = React.useState<boolean>(false);

	React.useEffect(() => {
		fetchCoins();
		console.log(coins);
	}, []);

	async function fetchCoins() {
		try {
			const { data } = await axios.get(
				"https://api.coinstats.app/public/v1/coins?limit=10"
			);
			setCoins(data.coins);
		} catch (error) {
			setError(true);
		} finally {
			setLoading(false);
		}
	}

	if (loading) {
		return <h3>Идет загрузка...</h3>;
	}

	if (error) {
		return <h3>Ошибка при получении данных</h3>;
	}

	if (!coins) {
		return <h3>Нет данных</h3>;
	}

	return (
		<>
			<ul>
				{coins.map((coin: ICoin) => (
					<li>
						<Row {...coin} />
					</li>
				))}
			</ul>
		</>
	);
}

export default App;

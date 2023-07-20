import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

import "./App.css";

import { ChooseUs, Join, Market, TopCoin } from "./components/modules";
import { Footer } from "./components/Layout/Footer/Footer";

import { socials } from "./stub";
import { Header } from "./components/Layout/Header/Header";

async function fetchCoins(skip: number) {
	const { data } = await axios.get(
		`https://api.coinstats.app/public/v1/coins?skip=${skip}&limit=10`
	);

	return data.coins;
}

function App() {
	const [page, setPage] = React.useState<number>(0);
	const { data, isLoading, isError } = useQuery(
		["coins", page],
		() => fetchCoins(page),
		{
			keepPreviousData: true,
			refetchOnWindowFocus: false,
		}
	);

	if (isLoading) {
		return <h3>Идет загрузка...</h3>;
	}

	if (isError) {
		return <h3>Ошибка при получении данных</h3>;
	}

	if (!data) {
		return <h3>Нет данных</h3>;
	}

	return (
		<>
			<Header />
			<TopCoin coins={data.slice(0, 4)} />
			<div className="wrapper">
				<Market page={page} setPage={setPage} coins={data} />
				<ChooseUs />
				<Join />
			</div>
			<Footer socials={socials} />
		</>
	);
}

export default App;

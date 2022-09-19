import React from "react";
import { useEffect, useState } from "react";
import TableRows from "./TableRows";

const CurrencyTable = () => {
  const [loadedDATA, setloadedDATA] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [limit, setLimit] = useState(50);

  function limitHandler() {
    setLimit(limit + 50);
  }

  useEffect(() => {
    setisLoading(true);
    fetch(`https://api.coincap.io/v2/assets?limit=${limit}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const assets = [];

        data.data.forEach((curr) => {
          const asset = {
            id: curr.id,
            ...curr,
          };
          assets.push(asset);
        });

        setisLoading(false);
        setloadedDATA([...assets]);
      });
  }, [limit]);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
        <div className="container btn-container">
          <button className="btn" onClick={limitHandler}>
            View More
          </button>
        </div>
      </section>
    );
  }
  /* const dummydata = [
    {
      id: "bitcoin",
      rank: "1",
      symbol: "BTC",
      name: "Bitcoin",
      supply: "17193925.0000000000000000",
      maxSupply: "21000000.0000000000000000",
      marketCapUsd: "119150835874.4699281625807300",
      volumeUsd24Hr: "2927959461.1750323310959460",
      priceUsd: "6929.8217756835584756",
      changePercent24Hr: "-0.8101417214350335",
      vwap24Hr: "7175.0663247679233209",
    },
    {
      id: "ethereum",
      rank: "2",
      symbol: "ETH",
      name: "Ethereum",
      supply: "101160540.0000000000000000",
      maxSupply: null,
      marketCapUsd: "40967739219.6612727047843840",
      volumeUsd24Hr: "1026669440.6451482672850841",
      priceUsd: "404.9774667045200896",
      changePercent24Hr: "-0.0999626159535347",
      vwap24Hr: "415.3288028454417241",
    },
  ];
  */
  return (
    <div className="container-fluid">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Rank</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">MarketCap</th>
            <th scope="col">VWAP (24hr)</th>
            <th scope="col">Supply</th>
            <th scope="col">Volume (24hr)</th>
            <th scope="col">Change (24hr)</th>
          </tr>
        </thead>
        <tbody>
          {loadedDATA.map((data) => {
            return (
              <TableRows
                key={data.id}
                rank={data.rank}
                name={data.id}
                symbol={data.symbol}
                price={data.priceUsd}
                marketCap={data.marketCapUsd}
                vwap={data.vwap24Hr}
                supply={data.supply}
                volume={data.volumeUsd24Hr}
                change={data.changePercent24Hr}
              />
            );
          })}
        </tbody>
      </table>
      <div className="container btn-container">
        <button className="btn" onClick={limitHandler}>
          View More
        </button>
      </div>
    </div>
  );
};

export default CurrencyTable;

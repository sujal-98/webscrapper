import './app.css';
import { useState, useEffect } from "react";
import Card from "./comp/card";
import Header from "./comp/header";

function App() {

  const [deals, setDeals] = useState([]);

  const getDeals = async () => {
    try {
      const resp = await fetch("http://localhost:3000/deals", {
        method: "GET"
      });
      const data = await resp.json();
      console.log(data); 
      setDeals(data);
    } catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getDeals();
  }, []);

  console.log(deals);

  return (
    <div className="app">
      <Header />
      <nav>
        <button className="primary">
          Amazon 
        </button>
        
        <button disabled className="primary">
          Aliexpress 
        </button>
        
        <button disabled className="primary">
          Ebay 
        </button>
        
        <button disabled className="primary">
          Etsy 
        </button>
      </nav>
      <div className='outer'>
        <h2>Best Deals</h2>
        <div className="feed">
          {deals.map(deal => (
            <Card key={deal.pos} item={deal} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

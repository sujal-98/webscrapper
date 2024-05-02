const port = 3000;
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/deals', async (req, res) => {
    try {
        const body = {
            "source": "amazon_search",
            "domain": "com",
            "query": "deal of the day",
            "parse": true,
            "pages": 1
        };

        const resp = await fetch("https://realtime.oxylabs.io/v1/queries", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Basic " + Buffer.from(`${user}:${password}`).toString("base64")
            }
        });

        const data = await resp.json();
        const results=data.results[0].content.results.organic
        const filter=results.filter(deal=>deal.price_strikethrough)
        const sorted=filter.sort((b,a)=>{
            ((a.price_strikethrough-a.price)/a.price_strikethrough*100)-((b.price_strikethrough-b.price)/b.price_strikethrough*100)
        })
        console.log(data);
        res.send(sorted); 
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message }); 
    }
});

app.listen(port, () => {
    console.log(`app is listening on ${port} port`);
});

import path from 'path';
import express from "express";
import { fileURLToPath } from 'url';
import data from './data.js';


const PORT = process.env.PORT || 3001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')))

app.get("/api/products/:id" , (req,res) => {
    const product = data.products.find((x) => x._id === req.params.id);
    if(product){
        res.json(product)
    }else{
        res.json({error})
    }
})

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
})

app.get("/api/products", (req, res) => {
    res.json(data.products);
  });

  // All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
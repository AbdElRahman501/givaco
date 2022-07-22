import path from 'path';
import express from "express";
import mongoose from 'mongoose';
import 'dotenv/config'
import { fileURLToPath } from 'url';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/produRouter.js';


const PORT = process.env.PORT || 3001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect('mongodb+srv://admin-abdelrahman:bedo4ahmed@realmcluster.eiosx.mongodb.net/givaco', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.static(path.resolve(__dirname, '../client/build')))



app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
})

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);


// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});


app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message })
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
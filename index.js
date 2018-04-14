//START UP
const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors');
const app = express()

const PORT = process.env.PORT || 3333

app.use(bodyparser.urlencoded({
  extended: false
}))
app.use(bodyparser.json())
app.use(cors()); //Access many ports are diffences
app.use(express.static('public')) //Get some images

let inputListed = [];

let inner1 = "";
let viewsX = inner1.innerHTML = `
<div>
  <h1>Server is running Now</h1>
  <h2>to Access API please use :</h2><a href=""><button type="submit">Client Area</button></a>
  <img src="server2.png">
</div>
`;

app.get('/', (req, res) => {

  res.send(viewsX);


})

app.post('/client', (req, res) => {
  let inputClient = req.body
  inputListed.push(inputClient)
  res.send("Data Sudah terupdate !!")
  console.log(inputListed);
})



//
app.listen(PORT, err => {
  if (err) return console.log(err)
  console.log(`You are Listening to Port : ${PORT}`);
})

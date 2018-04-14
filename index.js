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
<link rel="stylesheet" href="./bootstrap.min.css">
<link rel="stylesheet" href="./index.css">

<div class="jumbotron">
  <h1 class="display-4">Server is Runnning Now !!</h1>
  <p class="lead">You can access the Ali Kurniawan API.</p>
  <hr class="my-4">

  <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Client API</a>
  </p>

  <div class="container">
  <div class="row">
    <div class="col ">
      <img class="sizex" src="server2.png">
    </div>

  </div>
  </div>

</div>



<script src="./bootstrap/jquery-slim.min.js"></script>
<script src="./bootstrap/popper.min.js"></script>
<script src="./bootstrap/bootstrap.min.js"></script>
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

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

//-----------------------------------------------------------------------------------

let inputListed = [];

const urlPage1 = 'https://todo-express-2018.herokuapp.com';

let inner1 = "";
let htmlPageServer = inner1.innerHTML = `

  <link rel="stylesheet" href="./bootstrap.min.css">
  <link rel="stylesheet" href="./index.css">

  <div class="jumbotron">
    <h1 class="display-4">Server is Runnning Now !!</h1>
    <p class="lead">You can access the Ali Kurniawan API.</p>
    <hr class="my-4">

    <p class="lead">
      <label class="red animated invinite bounce">Press this :</label>
      <a id="btnClientApi" class="btn btn-primary btn-lg animated shake" href="${urlPage1}/index"  role="button">Client API</a>
    </p>

    <div class="container">
      <div class="row">
        <div class="col ">
          <img class="sizex" src="server2.png">
        </div>
      </div>
    </div>

  </div>

  <script src="./jquery-slim.min.js"></script>
  <script src="./popper.min.js"></script>
  <script src="./bootstrap.min.js"></script>

`;

//----------------------------------------------------------------------------------
let inner2 ="";
let htmlPageClient = inner2.innerHTML = `
    <!DOCTYPE html>

    <html lang="en" dir="ltr">

    <head>
      <meta charset="utf-8">

      <link rel="stylesheet" href="./bootstrap.min.css">
      <link rel="stylesheet" href="./index.css">
      <!-- <link rel="stylesheet" href="./assets/css/animate.css"> -->

      <title>Ali Kurniawan Profile</title>
    </head>

    <body>
      <div id="allBody" class="container-fluid">
        <h2>Hello Todo Express in HEROKU</h2>
        <div class="jumbotron jumbotron-fluid colorFluid1">

          <!--BLOK ATAS -->
          <nav class="navbar navbar-light bg-light justify-content-between">
            <a class="navbar-brand">Ali Kurniawan</a>
            <div class="d-flex">
              <input id="searchInput" class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
              <button onclick="searchTodo()" class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </div>
          </nav>

        </div>

        <div class="border1">

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-default">First Name</span>
            </div>
            <input id="objInput" type="text" class="form-control wid" aria-label="Default" aria-describedby="inputGroup-sizing-default">

            <button id="btnProses" type="submit" class="btn btn-success pad1">Input</button>
            <button id="clearProses" type="submit" class="btn btn-success pad1">Clear</button>
          </div>

          <ul id="showList" class="list-group">
            <!-- <li class="list-group-item active">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Morbi leo risus</li>
                <li class="list-group-item">Porta ac consectetur ac</li>
                <li class="list-group-item">Vestibulum at eros</li> -->
          </ul>

        </div>

      </div>
      <script src=”./node_modules/axios/dist/axios.min.js”></script>
      <script src="./jquery-slim.min.js"></script>
      <script src="./popper.min.js"></script>
      <script src="./bootstrap.min.js"></script>
      <script src="./index.js" type="text/javascript"></script>
      <script src="./client.js" type="text/javascript"></script>
    </body>

    </html>

`;

//----------------------------------------------------------------------------------

app.get('/', (req, res) => {
  res.send(htmlPageServer);
})

app.get('/index', (req, res) =>{
  res.send(htmlPageClient);
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

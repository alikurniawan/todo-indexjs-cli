// const axios = require('axios');

const objInput = document.getElementById("objInput");
const btnProses = document.getElementById("btnProses");

const objValue = objInput.value

function moveFaster(){
  const axios = require('axios');

  console.log(objValue);

  axios.post('http://localhost:3333/client', {

  }).then(response => {
    username : '${objValue}'
  })


}

btnProses.addEventListener('click', moveFaster);
// const showList = document.getElementById("showList");
// const btnClear = document.getElementById("clearProses");
//
// const searchInput = document.getElementById("searchInput");




  // axios.get("http://localhost:3333/").then(response => {
  //   console.log(response.data)
  // }).catch(err => {
  //   console.log(err)
  // })

  // axios.post('http://localhost:3333/client', {
  //   Username : 'Ali Kurniawan'
  //
  // }).then(response => {
  //   console.log(response.data);
  // }).catch(err => {
  //   console.log(err);
  // })

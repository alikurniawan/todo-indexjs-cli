// const objInput = document.getElementById("objInput");
// const btnProses = document.getElementById("btnProses");
// const showList = document.getElementById("showList");
// const btnClear = document.getElementById("clearProses");
//
// const searchInput = document.getElementById("searchInput");


  const axios = require('axios');

  // axios.get("http://localhost:3333/").then(response => {
  //   console.log(response.data)
  // }).catch(err => {
  //   console.log(err)
  // })

  axios.post('http://localhost:3333/client', {
    Username : 'Ali Kurniawan',
    Password : 'Password'
  }).then(response => {
    console.log(response.data);
  }).catch(err => {
    console.log(err);
  })

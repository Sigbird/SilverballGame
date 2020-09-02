//const axios = require('axios').default;

function getRequest() {
var resultado = document.getElementById("getResult1");
resultado.innerHTML ="";

axios.get('http://158.69.194.104:8082/vb/v1/abcd123/config/2')
.then(function(response){
    console.log(response.data.result.cards[2]);
})
.catch(function (error) {
    // handle error
    console.log(error);
  })
   
}


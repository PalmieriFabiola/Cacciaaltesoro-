else {
fetch('https://www.venditeOnline.org/login.php/loginIpad',{ //nome indirizzo server che si occupa di trattenere i dati riguardo le vendite di dispositivi
   method:'POST',
   headers:{
      'Content-Type'= 'application/json',
   }
   body: JSON.stringify({
    "username": username,
   "password" : password
})
})
.then(response=>response.json())
.then(data=>console.log(data))
.catch((error) => {
   console.error('Errore:', error),
})
}

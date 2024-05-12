else {
fetch('https://www.venditeOnline.org/login.php/loginIpad',{ //nome indirizzo server che trattiene i dati riguardo i dispositivi
   method:'POST',
   headers:{
      'Content-Type'= 'application/json',
   }
   body: JSON.stringify(
   { 
     "modello": "Galaxy s24",  // singolo oggetto 
     "prezzo" : 629.00
     "fotocamera":"camera tripla"
   }
   
[                                     // lista di oggetti di dispositivi Huawei
   { "modello": "Huawei P60 Pro"
      "prezzo": 999
      "fotocamera": "Fotocamera ultragrandangolare" 
      "processore": "Snapdragon 8+ Gen 1 4G"
      "batteria": 4815 mAh
   },
   { "modello": "Huawei P30 Lite"
      "prezzo": 136
      "fotocamera": "Tripla fotocamera"
      "processore": "Huawei HiSilicon Kirin 710"
      "batteria": 3340 mAh
   },
   { "modello": "Huawei P20"
      "prezzo": 200
      "fotocamera": "Doppia fotocamera"
      "processore": "Kirin 970"
      "batteria": 3320 mAh
   },
   { "modello": "Huawei P Smart"
      "prezzo": 110
      "fotocamera": "doppia fotocamera"
      "processore": "Hisilicon Kirin 659"
      "batteria": 3400 mAh
   }
]

{ "sistema_operativo": "Apple"   // oggetto che ha una proprietà di tipo lista di oggetti
   "dispositivi" : [ 
      { "nome": "Iphone 14", "anuscita": 2022 }
      { "nome": "Iphone 13", "anuscita": 2021 }
      { "nome": "Iphone 12", "anuscita": 2020 }
      { "nome": "Iphone 11", "anuscita": 2019 }
      { "nome": "Iphone X", "anuscita": 2017 }
    ]
      }
)
})
.then(response=>response.json())
.then(data=>console.log(data))
.catch((error) => {
   console.error('Errore:', error),
})
}

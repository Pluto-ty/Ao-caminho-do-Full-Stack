let url = "https://api.exchangeratesapi.io/latest?base=USD&symbols=BRL";

fetch(url)
   .then((res) => {
      return res.json();
   })
   .then((data) => {
      console.log(data);
   });

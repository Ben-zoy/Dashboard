

const url1 = "https://api.meteomatics.com"


const request = async () => {
    const response = await fetch(url1);
    const meteo = await response.json();
    console.log(meteo);
  };

  request();
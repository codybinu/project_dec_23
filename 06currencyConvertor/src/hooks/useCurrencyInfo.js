import { useEffect,useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then(res => setData(res[currency]))
        .catch((err)=>{console.log("Error: ", err)});
        console.log(data,'this is the api data we are getting');
    },[currency])
    console.log(data,'this is the api data we are getting');
    return data;
}

export default useCurrencyInfo;
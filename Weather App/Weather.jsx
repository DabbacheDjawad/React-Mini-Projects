import React,{useState} from "react"
function Weather(){

    const [city , setCity] = useState("");
    const [data , setData] = useState();
    const API_KEY = "c7dc24628fd3474f8cc143150240311";
    let a ="//cdn.weatherapi.com/weather/128x128/"
    let b ="/116.png"

    function handleCityName(event){
        setCity(event.target.value);  //to update the value of the input whenever the user types something
    }


    function fetchData(city){
        //function to make the request from the API    
        const API = `https://api.weatherapi.com/v1/current.json?key=c7dc24628fd3474f8cc143150240311&q=${city}&aqi=no`;


        fetch(API) //the function fetch
        .then(res => {
            if(!res.ok){
                throw new Error("couldnt fetch data");
            }
            return res.json(); //then we convert the results into json and return them
            })  
        .then(data => {setData(data)
                       console.log(data);
                        
        }) //then we get data
        .catch(error => console.log(error))  //in case an error occurs
    }


    return(


        <div className="container">
            <form className="form">
                <input type="text" placeholder="Enter a City name" value={city} onChange={handleCityName} />
                <button onClick={(event)=>
                    {
                        event.preventDefault();
                        fetchData(city);
                    }
                    }>Search</button>
            </form>   

                        {
                       data &&(  //IMPORTANT IMPORTANT  checks if the data exists (fetched) and then do the job the && is the letting us do the test of existance
                        
                        <div className="data">
                            <p>name :{data.location.name} - {data.location.region} - {data.location.tz_id}</p>
                            <p>it is {data.current.condition.text}</p>
                            <p>the humidity is {data.current.humidity}%</p>
                            <p>it is {data.current.is_day == 0?"day":"night"} out there</p>
                            <p>it is {data.current.temp_c} Celcius</p>
                            <p>it is {data.current.temp_f} Fernheit</p>
                        </div>
                    )
                    }
                    


        </div>
    )
}
export default Weather
//  https://api.weatherapi.com/v1/current.json?key=c7dc24628fd3474f8cc143150240311&q=London&aqi=no
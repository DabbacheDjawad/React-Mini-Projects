import React,{useState} from "react"
function Searcher(){

    const [results,setResults] = useState([]);//to control the results(because there may be many)
    const [inputSearch , setInputSearch] = useState("");//to retrive the value from the input
    const API = "https://api.github.com";

    //function  to retrieve data from the api
    async function fetchResults(inputSearch){

        try{
            const response = await fetch(`${API}/search/users?q=${inputSearch}`);//we await for the response from the api
            const json = await response.json();//covert it to json
            console.log(json.items);
            return json.items;
        }
        catch(e){
            throw new Error(e);
        }

    }

    function onSearch(event){
        setInputSearch(event.target.value);
    }

    async function onSubmit(event){
        event.preventDefault();
        const result = await fetchResults(inputSearch);
        setResults(result);
    }

    return(
        <>
            <h1>GitHub user Search</h1>

                <form>
                    <input type="text" placeholder="Enter Username or email" onChange={onSearch}/>
                    <button onClick={onSubmit}>Search</button>
                </form>
            <h1>Results</h1>

            {
                results.map(
                    (user)=>{
                        return(
                            <div className="results">
                                <div className="inner">
                                    <img src={user.avatar_url} alt="Avatar"/>
                                    <a href={user.html_url}>{user.login}</a>
                                </div>
                            </div>
                        )    
                    }
                )
            }
        </>
    )
}
export default Searcher
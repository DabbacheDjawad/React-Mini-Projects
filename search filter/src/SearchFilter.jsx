import React,{useState} from "react";
import jsonData from "./csv.json"
function SearchFilter(){
    
    const [search, setSearch] = useState("");
    function handleInputChange(event){
        setSearch(event.target.value);
    }


    return(
        <>
            <form>
                    <input type="text" placeholder="search for someone" onChange={handleInputChange}/>   
                    <div>
                        {
                            jsonData.filter(
                                element =>{
                                    if(element.first_name.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
                                        return element;
                                    }
                                }
                            ).map(
                            ((data , index) =>{
                                return(<p key={data.id}>{data.first_name} {data.last_name}</p>)
                            })
                            )
                        }
                    </div>

            </form>
        </>
    );
}
export default SearchFilter
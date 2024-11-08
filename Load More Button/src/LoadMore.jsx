import { useEffect } from "react"
import { useState } from "react"
function LoadMore(){

const [more , setMore] = useState(false);
const [products , setProducts] = useState([]);

    function fetchData(){
    fetch('https://dummyjson.com/products') //fetch data from the API
    .then(res => res.json())
    .then(response => {
        setProducts(response.products)  //set the products array of Objects to the products got the API
    })
}

    useEffect(fetchData,[more]);

    function handleMore(){
        setMore(!more)  //to change the value of the more button whenever it is clicked
    }


    return(
        <>
        <div className="container">

        {

            products.map((product, index) => {
            // Determine the condition for displaying the product
            const shouldDisplay = !more ? index < 8 : true;

            if (shouldDisplay) {
                return (
                    <div className="product" key={product.id}>
                        <div className="image">
                            <img src={product.images} alt="img" /> {/* Product image */}
                        </div>
                        <h2 className="title">{product.title}</h2> {/* Product name */}
                        <p className="desc">{product.description}</p> {/* Product description */}
                    </div>
                );
                }
                return null; // Explicitly return null for non-displayed products
            })
        }
        </div>
        <button onClick={handleMore}>{more == true ? "Hide" : "Load More"}</button>
        </>
    )
}
export default LoadMore
import React,{useState} from "react";
function Carousel(){

    const [current , setCurrent] = useState(0);

    const images = [
        "src/assets/5155990.jpg",
        "src/assets/berserkgutswallpaper.jpg",
        "src/assets/a.jpg",
        "src/assets/télécharger.jpg"
    ]


    function rightImage(){
        current>=images.length-1?setCurrent(0):setCurrent(current =>current+1);
    }

    function leftImage(){
        current<1?setCurrent(images.length-1):setCurrent(current =>current-1);
    }

    return(
        <div className="container">
            <div className="left">
                <button onClick={leftImage}>←</button>
            </div>

            <div className="img">
                <img src={images[current]} alt="images" />
            </div>

            <div className="right">
                <button onClick={rightImage}>→</button>
            </div>
        </div>
    )

}
export default Carousel
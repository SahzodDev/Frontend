

import {useState} from "react";
import { DATA_FAMOUS_ACTORS } from "../data";
import galleryStyle from "../components/Gallery.module.css";

const Page02 = () => {
    return (
        <section>
            <h1>Bir komponentin hafızası</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nihil consequatur, eius iste vero saepe earum, tempore iure odit corporis exercitationem suscipit doloribus voluptatum tenetur!</p>

            <Button/>

            <ButtonV2/>

            <Gallery data={DATA_FAMOUS_ACTORS}/>

            <GalleryV2 data={DATA_FAMOUS_ACTORS}/>
        </section>
    )
}

// rendering - rerendering
const Button = () => {

    let counter = 0;
    function handleClick() {
       // alert("Hello");
       counter++;
    }

    return <button onClick={handleClick}>{counter}</button>;
}

const ButtonV2 = () => {

    // [statefulValue, setterFunction] = useSate(initialValue);
    const [counter, setCounter] = useState(0); // returns an array consisting of a stateful value and a setter funciton
    function handleClick() {
        
        setCounter(counter + 1); // rerender talep eder.
     }

    return <button onClick={handleClick}>{counter}</button>;
}

const Gallery = ({data}) => {

    const [index, setIndex] = useState(0);
    let isEnd = index === DATA_FAMOUS_ACTORS.length - 1 ? true : false;
    let isBegin = index === 0 ? true : false;

    function handleNext() {
        if (isEnd) {
            return;
        } else {
            setIndex(index + 1);
        }
        
    }

    function handlePrevious() {
        if (isBegin) {
            return;
        } else {
            setIndex( index - 1);
        }
    }

    return (
        <div className={galleryStyle.Gallery}>
            <h2>Galeri</h2>
            <p>Toplam {data.length} içinde {index + 1}. gösteriliyor.</p>
            <button onClick={handlePrevious} disabled={isBegin}>önceki sanatçı</button>
            <button onClick={handleNext} disabled={isEnd}>sonraki sanatçı</button>
            
            <div>
                <figure>
                    <img src={data[index].src} alt={data[index].name}/>
                </figure>

                <h3>{data[index].name}</h3>

                <p>{data[index].descr}</p>
            </div>
        </div>
    );
}

const GalleryV2 = ({data}) => {

    const [index, setIndex] = useState(0);
    
    const [showContent, setShowContent] = useState(0);

    let isEnd = index === DATA_FAMOUS_ACTORS.length - 1 ? true : false;
    let isBegin = index === 0 ? true : false;
    
    

    function handleNext() {
        if (isEnd) {
            return;
        } else {
            setIndex(index + 1);
        }
        
    }

    function handlePrevious() {
        if (isBegin) {
            return;
        } else {
            setIndex( index - 1);
        }
    }

    function handleDetay() {
        if (showContent) {
            
            setShowContent(showContent - 1);
            
        } else {
            
            setShowContent(showContent + 1);
            
        }
    }

    return (
        <div className={galleryStyle.Gallery}>
            <h2>Galeri</h2>
            <p>Toplam {data.length} içinde {index + 1}. gösteriliyor.</p>
            <button onClick={handlePrevious} disabled={isBegin}>önceki sanatçı</button>
            <button onClick={handleNext} disabled={isEnd}>sonraki sanatçı</button>
            
            <div>
                <figure>
                    <img src={data[index].src} alt={data[index].name}/>
                </figure>

                <h3>{data[index].name}</h3>

                <button onClick={handleDetay}>{showContent ? "Detay Sakla" : "Detay Göster"}</button>
                {showContent ? <p >{data[index].descr}</p> : null}
                
                
            </div>
        </div>
    );
}

export default Page02;
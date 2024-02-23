

import { AlertButton, ButtonV1, ButtonV2, PlayButton, UploadButton } from "../components/Button";


const Page01 = () => {
    return (
        <section>
            <h1>Etkileşim</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis minima laborum architecto in, voluptatem alias illo ad doloribus. Nostrum minima, corrupti quam ad, atque expedita excepturi voluptatibus necessitatibus perspiciatis nisi, pariatur itaque est et praesentium. Sint unde dolore et hic consectetur repellat nisi quod quos laborum, in, nulla iure minima?</p>


            <ButtonV1/>
            <ButtonV2/>

             {/* AlertButton({message}) */}
            <AlertButton message="Ave Maria">Ave Maria</AlertButton>

            <PlayButton movieName= "The Shining"></PlayButton>

            <UploadButton fileName="./img01.jps"/>

            <Toolbar/>

            <EventPropagationTestComp/>

            <FrmContact/>

        </section>
    );
}

const Toolbar = () => {

    const toolbarStyle = {
        border: "2px solid red",
    }

    return (
        <div style={toolbarStyle}>
            Toolbar
            <BaseToolbarButton onSmash={ (e)=>{alert(e.target)} }>
                Filmi Oynat
            </BaseToolbarButton>
            <BaseToolbarButton onSmash={ (e)=>{alert(e.target)} }>
                Filmi Düzenle
            </BaseToolbarButton>
        </div>
    )
}

const BaseToolbarButton = ({onSmash, children}) => {
    function handleClick(e) {
        onSmash;
    }
    return (
        <button onClick={onSmash}>{children}</button>
    );
}

export default Page01;



const EventPropagationTestComp = ()=> {

    /* Buton tıklandığında nav üzerindeki click event'i de tetiklenir. */

    return (
        <nav style={{border: "2px solid red"}} onClick={(e)=>{alert("Ben nav elemanı")}}>
            <h1>Event propagation test component</h1>
            <button type="button" onClick={(e) => { e.stopPropagation(); alert("Ben buton")}}>Button 1</button>
            <button type="button" onClick={(e) => {e.stopPropagation(); alert("Ben buton")}}>Button 2</button>
            <button type="button" onClick={(e) => {e.stopPropagation(); alert("Ben buton")}}>Button 3</button>
            <button type="button" onClick={(e) => {e.stopPropagation(); alert("Ben buton")}}>Button 4</button>
        </nav>
    );
}


const FrmContact = () => {

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        console.log(formData.get("email")); // handle function'lar side effect yazabileceğiniz uygun yerlerdir.
    }

    return (
        <form style={{border:"4px solid blue"}} onSubmit={handleSubmit}>
            <input type="email" name="email" id="email" placeholder="E-postanız"/>

            <textarea placeholder="Mesajınız"></textarea>
            <button type="submit">Gönder</button>
        </form>
    );
}


function double(num) {
    // api call
    // document.getElement
    return 2 * num;
}
export default function Page04() {
    return (
        <section>
            <h1>Koşullu render etmek - conditional rendering</h1>

            <PackingList1/>
            <PackingList2/>
            <PackingList3/>
            <PackingList4/>
            <PackingList5/>
        </section>
    );
}

function PackingList1() {
    return (
        <div>
            <ul>
                <PackingList1Item content="Güneş gözlüğü" isPacked={false}/>
                <PackingList1Item content="Şapka" isPacked={true}/>
            </ul>
        </div>

    );
}

function PackingList1Item({content, isPacked}) {
    if (isPacked) {
        return <li>{content} - alındı</li>
    }
    return <li>{content}</li>
}

function PackingList2() {
    return (
        <div>
            <h2>Yanımıza alacaklarımız 2</h2>
            <ul>
                <PackingList2Item content="şapka" isPacked={false}/>
                <PackingList2Item content="defter" isPacked={true}/>
                <PackingList2Item content="kalem" isPacked={false}/>
            </ul>
        </div>
    );
}

function PackingList2Item({content, isPacked}) {
    if (!isPacked) {
        return null;
    }
    return <li>{content}</li>
}

function PackingList3() {
    return (
        <div>
            <h2>Yanımıza alacaklarımız 3</h2>
            <ul>
                <PackingList2Item content="macbook" isPacked={false}/>
                <PackingList2Item content="ipad" isPacked={true}/>
                <PackingList2Item content="iphone" isPacked={false}/>
            </ul>
        </div>
    );
}

function PackingList3Item({content, isPacked}) {
    
    return isPacked ? <li>{content}</li> : null;
}

function PackingList4() {
    return (
        <div>
            <h2>Yanımıza alacaklarımız 4</h2>
            <ul>
                <PackingList4Item content="macbook" isPacked={false}/>
                <PackingList4Item content="ipad" isPacked={true}/>
                <PackingList4Item content="iphone" isPacked={false}/>
            </ul>
        </div>
    );
}

function PackingList4Item({content, isPacked}) {
    
    return <li>{content} {isPacked && "-alındı"}</li>;
}

function PackingList5() {
    return (
        <div>
            <h2>Yanımıza alacaklarımız 5</h2>
            <ul>
                <PackingList5Item content="macbook" isPacked={false}/>
                <PackingList5Item content="ipad" isPacked={true}/>
                <PackingList5Item content="iphone" isPacked={false}/>
            </ul>
        </div>
    );
}

function PackingList5Item({content, isPacked}) {

    let jsxContent = content;

    if(isPacked) {
        jsxContent = content + " " + "- alındı";
    }
    
    return <li>{jsxContent}</li>;
}
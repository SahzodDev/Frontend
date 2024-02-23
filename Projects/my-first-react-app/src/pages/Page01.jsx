import RecipeList from "../components/RecipeList";
import { DATA_FAMOUS_PEOPLE, DATA_PRIMARCHS, recipes } from "../data";
import { Recipe } from "../components/RecipeList2";
import Poem from "../components/Poem";

const poem = {
    lines: [
        'I write, erase, rewrite',
        'Erase again, and then',
        'A poppy blooms.'
    ]
};


const myObj = { id: 0, name: "test" };

const Page01 = () => {

const recipe = recipes[2];


    return (
        <section>
            <h1>Liste Render Etmek</h1>

            <Primarchs primarchList={DATA_PRIMARCHS} />

            <OrdinaryPrimarchs />

            <OrdinaryPrimarchsV2 />

            <Chemists list={DATA_FAMOUS_PEOPLE} />

            <ChemistsV2 list={DATA_FAMOUS_PEOPLE} />

            <ChemistsV3 list={DATA_FAMOUS_PEOPLE} />

            <ChemistsV4 list={DATA_FAMOUS_PEOPLE} />

            <FilteredPersons list={DATA_FAMOUS_PEOPLE} filterKey={"physicist"} />

            <UniqueKeyedComp/>

            <RecipeList/>
            
            

            

            <Poem lines={poem.lines}/>

        </section>
    );
}

function Testing01() {

    const myList1 = [1, 2, 3, 4];
    const myjsxEl = <div></div>;
    const myJsxElList = [<p>hello</p>, <h1>Hi</h1>];

    return (
        <div>
            {myList1}
            {myJsxElList}
        </div>
    );
}
// 
function Primarchs({ primarchList }) {
    let jsxList = [];
    primarchList.forEach(element => {

        jsxList.push(<li>{element}</li>)
    }
    );
    return (
        <ul>
            {jsxList}
        </ul>
    );
}

//const betterPrimarchs = DATA_PRIMARCHS.map((p)=><li>{p}</li>)

function OrdinaryPrimarchs() {
    const jsxList = DATA_PRIMARCHS.map((p) => <li>{p}</li>);

    console.log(jsxList);

    return (
        <ul>
            {jsxList}
        </ul>
    )
}

function OrdinaryPrimarchsV2() {


    return (
        <ul>
            {DATA_PRIMARCHS.map((p) => <li>{p}</li>)}
        </ul>
    );
}

function Chemists({ list }) {

    const jsxList = [];

    list.forEach(element => {

        if (element.profession === "chemist") {

            const { id, name, profession } = element;

            jsxList.push(<li>{`id: ${id}, name: ${name}, profession: ${profession}`}</li>);
        }


    });

    console.log(jsxList);

    return (
        <div>
            <h2>Kimyagerler</h2>
            <ul>
                {jsxList}
            </ul>
        </div>

    );
}

function ChemistsV2({ list }) {
    const filteredList = list.filter((p) => p.profession === "chemist");

    const mappedJsxList = filteredList.map((p) => <li>{p.name}, {p.profession}</li>)

    return (
        <div>
            <h2>Kimyagerler V2</h2>
            {mappedJsxList}
        </div>
    )
}

function ChemistsV3({ list }) {
    const jsxList = list.filter((p) => p.profession === "chemist").map((p) => <li>{p.name}, {p.profession}</li>);



    return (
        <div>
            <h2>Kimyagerler V3</h2>
            {jsxList}
        </div>
    )
}

function ChemistsV4({ list }) {

    return (
        <div>
            <h2>Kimyagerler V4</h2>
            {list.filter((p) => p.profession === "chemist").map((p) => <li>{p.name}, {p.profession}</li>)}
        </div>
    )
}

function FilteredPersons({ list, filterKey }) {

    return (
        <div>
            <h2>{filterKey + "ler"}</h2>
            {list.filter((p) => p.profession === filterKey).map((p) => <li key={p.id}>{p.name}, {p.profession}</li>)}
        </div>
    )
}


function UniqueKeyedComp() {

    const ingredients = ["pirinç", "şeker", "su", "yağ"];

    const steps = [
        {id:1, content:"Birinci adımı at"},
        {id:2, content:"İkinci adımı at ve koşmaya başla"},
        {id:3, content:"Zıplayarak düş"},
        {id:4, content:"Gökyüzüne bak"},
    ]

    // dizinin içindeki çocuk jsx'ler için key olarak döngünün index'lerini kullanmak tavsiye edilmez.
    const ingredientsJsxList = ingredients.map( (ingredient, index) => <li key={index}>{ingredient}</li>)

    const stepsjsxList = steps.map( (step)=><li key={step.id}>{step.content}</li> )

    const products = [
        { content:"Hp laptop"},
        { content:"Lenovo desktop"},
        { content:"Porsche red car"},
        
    ]

    const productsWithUUIDs = products.map((p) => {
        /*
        const newP = {id: crypto.randomUUID(), content: p.content};
        */

        const newP = {...p, id: crypto.randomUUID()};

        return newP;
    })

    const productsJsxList = productsWithUUIDs.map( (product)=><li key={product.id}>{product.content}</li>)

    return (
        <div>
            <section>
                <h1>İçindekiler</h1>
                <ul>
                    {ingredientsJsxList}
                </ul>
            </section>

            <section>
                <h1>Adımları:</h1>
                <ul>
                    {stepsjsxList}
                </ul>
            </section>

            <section>
                <h1>Ürünler</h1>
                <ul>
                    {productsJsxList}
                </ul>
            </section>

        </div>
    );
}

export default Page01;





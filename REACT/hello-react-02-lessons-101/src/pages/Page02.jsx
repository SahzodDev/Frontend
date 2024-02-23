
import { MyBasicButton, MyRandomBtn, MyFancyBtn, MyFancyButton2, MyFancyButton3 } from "../components/Buttons";

import Avatar from "../components/Avatar";


export default function Page02() {
    return ( 
    <section>
          <h1>Jsx içerisinde süslü parantez ile js expression'ları yazmak</h1>
          {/* yorum böyle yazılır */}
          {3 + 4 /* js expression */}
          <MyBasicButton/>  
          <MyRandomBtn/>
          <MyFancyBtn/>
          <MyFancyButton2/>
          <MyFancyButton3/>
          <Avatar/>
    </section>
    );
}
import { BasicCard } from "../components/Card";
import { Avatar2 } from "../components/Avatar";
import { Avatar3 } from "../components/Avatar";
import {Modal} from "../components/Modal";

export default function Page03() {
    return (
        <section>
            <h1>Bir komponente özellik geçirebilmek - Passing props to a component.</h1>

            <ul>
                {/* Tag içine yazılan property'leri ilgili fonksiyona bir obje olarak gönderiyor ve o propertyler'e o objenin propertty'si olarak erişilebiliyor. */}
                <BasicCard cardTitle= "ürün1" cardContent="Açıklama1"/>
                <BasicCard cardTitle= "ürün2" cardContent="Açıklama2"/>
                <BasicCard cardTitle= "ürün3"  cardContent="Açıklama3"/>
                <BasicCard cardTitle= "ürün4" cardContent="Açıklama4"/>
                <BasicCard cardTitle= "ürün5" cardContent="Açıklama5"/>

                {BasicCard({cardTitle:"Hello me", cardContent:"asd"})} {/* Do not !!! */}
            </ul>

            

            <Avatar2 avatarUrl="https://i.redd.it/r2ydvensdqr81.jpg"
            avatarName="Sangunius"/>
            <Avatar2/>

            <Avatar3 url="https://i.redd.it/r2ydvensdqr81.jpg" name="Sangunius"/>

            <Avatar3/>

            
            {/*<Modal title="Üye olun" hasBorders={false}>
            
                <h1>Yeni üye</h1>
                <p>üyelik için bilgilerinizi giriniz.</p>
            
             </Modal>*/}

            
            
        
            
        </section>
    );
}

function FrmLogin() {
    return <h1>Login</h1>
}

function FrmRegister() {
    return <h1>Register</h1>
}
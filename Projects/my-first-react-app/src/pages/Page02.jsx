

const Page02 = () => {
    return (
        <section>
            <h1>Pure Functions - Saf Fonksiyonlar</h1>

            <TeaGathering/>
        </section>
    );
}

export default Page02;


let guestCount = 0;

function TeaGathering() {
    return (
        <div>
            <h1>Çay Toplantısı</h1>
            <ImpureCup/>
            <ImpureCup/>
            <ImpureCup/>

            <PureCup guestId={1}/>
            <PureCup guestId={2}/>
            <PureCup guestId={3}/>
        </div>
    )
}

function ImpureCup() {
    guestCount += 1;
    return <p> {guestCount} konuk için bardak.</p>
}

function PureCup({guestId}) {
    return <p> {guestId}. konuk için bardak. </p>
}


const ButtonV1 = () => {

    function handleClick() {
        console.log("Merhaba Sayın Düğme");
    }

    return (
        <button onClick={handleClick}>Merhaba Düğme</button>
    )
}

const ButtonV2 = () => {
    return (
        <button onClick={()=> {
            console.log("Ben v2 düğme")
            }
        }>
            Merhaba V2 Düğme
        </button>
    )
}

const AlertButton = ({message, children}) => {

    function handleClick() {
        alert(message);
    }

    return (
        <button onClick={handleClick}>{children}</button>
    )
}

const BaseButton = ({onClick, children}) => {
    return (
        <button onClick= {onClick}>
            {children}
        </button>
    )
}

const PlayButton = ({movieName}) => {
    
    function handlePlay() {
        alert(movieName + "yürütülüyor...");
    }
    
    return (
        <BaseButton onClick={handlePlay}>
            Filmi Oynat
        </BaseButton>
    )
}


const UploadButton = ({fileName}) => {
    function handleUpload() {
        alert(fileName + "yükleniyor...");
    }

    return (
        <BaseButton onClick= {handleUpload}>
            Dosya Yükle
        </BaseButton>
    )
}

export {ButtonV1, ButtonV2, AlertButton, PlayButton, UploadButton};



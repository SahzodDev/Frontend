

export default function Avatar() {

    const avatarUrl = "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSMj2zEQAZpoqJQe9LmFF6mOew2OgwPSpHOQMyYizMuD8JtrTyO";

    const avatarStyles = {
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        objectFit: "cover",
    }

    const avatarName = "Einstein";

    return (

        <figure>
            <img style={avatarStyles} src={avatarUrl} alt="Albert Einstein" />
            <figcaption>Einstein</figcaption>
        </figure>
    );
}

export function Avatar2(props) {

    let avatarUrl = props.avatarUrl;

    let avatarName = props.avatarName;

    const avatarStyles = {
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        objectFit: "cover",
    }

    console.log(props.avatarName, props.avatarUrl);

    if (!props.avatarName && !props.avatarUrl) {
        avatarName = "Einstein";
        avatarUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Albert_Einstein_1947.jpg/1200px-Albert_Einstein_1947.jpg";

        
    }


    return (

        <figure>
            <img style={avatarStyles} src={avatarUrl} alt={avatarName} />
            <figcaption>{avatarName}</figcaption>
        </figure>
    );
} 

export function Avatar3(props) {

    const {url="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Albert_Einstein_1947.jpg/1200px-Albert_Einstein_1947.jpg", name="Einstein"} = props;

    const avatarStyles = {
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        objectFit: "cover",
    }

    return (

        <figure>
            <img style={avatarStyles} src={url} alt={name} />
            <figcaption>{name}</figcaption>
        </figure>
    );
} 

export function Avatar4(props) {

    const {url="default url", name} = props;

    const avatarStyles = {
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        objectFit: "cover",
    }

    return (

        <figure>
            <img style={avatarStyles} src={url} alt={name} />
            <figcaption>{name}</figcaption>
        </figure>
    );
} 
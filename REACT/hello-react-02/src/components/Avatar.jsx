

export default function Avatar() {

    const avatarUrl = "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSMj2zEQAZpoqJQe9LmFF6mOew2OgwPSpHOQMyYizMuD8JtrTyO";

    const avatarStyles = {
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        objectFit: "cover",
    }

    const avatarName = "Einstein";

    return(

        <figure>
            <img style={avatarStyles} src={avatarUrl} alt="Albert Einstein" />
            <figcaption>Einstein</figcaption>
        </figure>
    );
} 


const Icon = ({name="fa-solid fa-bolt", color="white", size = "24"}) => {
    return (
        <i className={name} style={{color: color, fontSize: size}}></i>
    )
}

export {Icon};
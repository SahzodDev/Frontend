
import styles from "./Modal.module.css";

export const Modal = ({title = "Title", hasBorders, children}) => {
    console.log(title, hasBorders, children)
    return ( 
    <div className={styles.Modal}>
        <div className={styles.ModalContent}>
            {title} {children}
        </div>
        
    </div>
    )
}
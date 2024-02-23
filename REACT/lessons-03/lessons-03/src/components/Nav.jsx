import styles from "./Nav.module.css";


const MainNav = ({clickFunc}) => (
<nav className = {styles.MainNav}>
    <ul>
        <li>
            <NavLink to="/01" handleClick={clickFunc}>Interaction - Etkileşim</NavLink>
        </li>
        <li>
            <NavLink to="/02" handleClick={clickFunc}>Bir komponentin hafızası - State</NavLink>
        </li>
        <li>
            <NavLink to="/03" handleClick={clickFunc}>-</NavLink>
        </li>
    </ul>
</nav>

)


const NavLink = ({to, children, handleClick}) => {

    function handleClickk(e){
        
        e.preventDefault();
        handleClick(to);
    }
return (
    <a href={to} className={styles.NavLink} onClick={handleClickk}>{children}</a>
)


};

export {NavLink, MainNav};
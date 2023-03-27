import './Menu.css';
import {useEffect} from 'react';

const Menu = ({selected_element}) => {

    useEffect(() => {
        const element = document.getElementsByClassName(selected_element);
        element[0].classList.add("selected");
    })

    return (
        <div id="menu-container">
            <a className="all" href="/">전체</a>
            <a className="front" href="/front">프론트 엔드</a>
            <a className="back" href="/back">백 엔드</a>
        </div>
    )
}

export default Menu;
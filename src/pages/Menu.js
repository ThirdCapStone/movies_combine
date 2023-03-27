import './Menu.css';
import {useEffect} from 'react';

const Menu = ({selected_element}) => {

    useEffect(() => {
        const element = document.getElementsByClassName(selected_element);
        element[0].classList.add("selected");
    })

    return (
        <div id="menu-container">
            <a className="all" href="/movies_combine">전체</a>
            <a className="front" href="/movies_combine/front">프론트 엔드</a>
            <a className="back" href="/movies_combine/back">백 엔드</a>
        </div>
    )
}

export default Menu;
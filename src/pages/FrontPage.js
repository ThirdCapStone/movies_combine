import './Page.css';

const FrontPage = ({week}) => {
    week = Number(week.replace("주차", ""));
    const data = [
        ["1주차: 팀 구성", ["팀원들을 구하고, 주제와 팀명, 각자의 역할들을 정함", "test", "test2"]],
        ["2주차: ", ["test"]],
        ["3주차", ["3주차 내용"]],
        ["4주차", ["4주차 내용"]],
        ["5주차", ["5주차 내용"]],
        ["6주차", ["6주차 내용"]],
        ["7주차", ["7주차 내용"]],
        ["8주차", ["8주차 내용"]],
        ["9주차", ["9주차 내용"]],
        ["10주차", ["10주차 내용"]],
        ["11주차", ["11주차 내용"]],
        ["12주차", ["12주차 내용"]],
        ["13주차", ["13주차 내용"]],
        ["14주차", ["14주차 내용"]],
        ["15주차", ["15주차 내용"]],
        ["16주차", ["16주차 내용"]],
    ]
    
    const [todo_title, todo_data] = data[week - 1];

    const store_item = (key, value) => {
        localStorage.setItem(key, value);
    }

    const remove_item = (key) => {
        localStorage.removeItem(key);
    }

    const check_exist_item = (key) => {
        const value = localStorage.getItem(key);
        return value !== null;
    }

    const click_handler = (key) => {
        check_exist_item(key) ? remove_item(key) : store_item(key); 
        window.location.reload();
    }

    return (
        <div id="page-container">
            <div id="title">{todo_title}</div>
                <div id="data-container">
                    <div id="subtitle">해야할 것들</div>
                    {    
                        todo_data.map((data) => {
                            if (!check_exist_item(`${week} ${data}`)) {
                                return <form id="form-container" onClick={() => click_handler(`${week} ${data}`)}>
                                    <input 
                                        key={data}
                                        type="checkbox" 
                                        id={`todo-check ${data}`}
                                        checked={check_exist_item(`${week} ${data}`)}
                                    />
                                    <label key={`label ${data}`} htmlFor={`todo-check ${data}`}>{data}</label>
                                </form>
                            }
                        })
                    }
                </div>
                <div id="data-container">
                    <div id="subtitle">끝난 것들</div>
                    {
                        todo_data.map((data) => {
                            if (check_exist_item(`${week} ${data}`)) {
                                return <form id="form-container" onClick={() => click_handler(`${week} ${data}`)}>
                                    <input 
                                        key={data}
                                        type="checkbox" 
                                        id={`todo-check ${data}`}
                                        checked={check_exist_item(`${week} ${data}`)}
                                    />
                                    <label key={`label ${data}`} htmlFor={`todo-check ${data}`}>{data}</label>
                                </form>
                            }
                        })
                    }
                </div>
                
            </div>
    )
}

export default FrontPage;
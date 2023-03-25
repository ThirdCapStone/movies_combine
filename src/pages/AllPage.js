import './Page.css';

const AllPage = ({week}) => {
    week = Number(week.replace("주차", ""));
    const data = [
        ["1주차: 팀 구성", ["팀 정하기", "팀명 정하기", "과제명 정하기", "지도교수 정하기", "주제 정하기", "계획 정하기"]],
        ["2주차: 개발 이해하기", ["역할 정하기", "요구사항 분석하기", "시스템 이해하기", "개발 방향 잡기", "프레임워크 정하기"]],
        ["3주차: 고객관련 요청처리", ["로그인 구현하기", "회원가입 구현하기"]],
        ["8주차: 고객관련 요청처리2", ["로그인 구현하기", "회원가입 구현하기"]],
        ["5주차: 영화 관련 요청처리", ["로그인 구현하기", "회원가입 구현하기", "카카오맵과 연동하기", "영화관 정보 맵에 띄우기", "영화 정보 띄우기"]],
        ["6주차: 영화 관련 요청처리2", ["영화관 정보 맵에 띄우기", "영화 정보 띄우기"]],
        ["7주차: 영화 관련 요청처리3", ["영화관 정보 맵에 띄우기", "영화 정보 띄우기", "예매 시스템 구상하기", "결제 시스템 연동하기"]],
        ["8주차: 영화 관련 요청처리4", ["예매 시스템 구현하기", "결제 시스템 구현하기"]],
        ["9주차: 영화 관련 요청처리5", ["예매 시스템 구현하기", "결제 시스템 구현하기"]],
        ["10주차: 예매 예약 시스템 처리", ["예매 예약 시스템 구현"]],
        ["11주차: 예매 예약 시스템 처리2", ["예매 예약 시스템 구현"]],
        ["12주차: 테스트 및 디버깅", ["고객관련 요청처리 테스트 및 디버깅"]],
        ["13주차: 테스트 및 디버깅2", ["영화 관련 요청처리 테스트 및 디버깅"]],
        ["14주차: 테스트 및 디버깅3", ["예매 예약 시스템 처리 테스트 및 디버깅"]],
        ["15주차: 시험 파이팅!", ["시험 파이팅!"]],
        ["16주차: ???", ["???"]],
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

export default AllPage;
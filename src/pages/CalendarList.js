import './CalendarList.css';

const convert_date_to_string = (index) => {
    const start_date = new Date(Date.UTC(2023, 2, 2 + Number(index - 1) * 7, -9, 0, 0));
    const end_date = new Date(Date.UTC(2023, 2, 1 + Number(index) * 7, -9, 0, 0));

    const [start_month, start_day, ] = start_date.toLocaleDateString().split("/");
    const [end_month, end_day, ] = end_date.toLocaleDateString().split("/");

    return `(${start_month}월 ${start_day}일 ~ ${end_month}월 ${end_day}일)`
}

const CalendarList = ({current_page}) => {
    let week_list = [];
    
    for (let i = 1; i <= 16; i++) {
        week_list.push(`${i}주차 ${convert_date_to_string(i)}`);
    }

    return (
        <ul id="calendar-container">
            {
                week_list.map((week, idx) => {
                    return <a key={idx} id="week-box" href={`/${current_page}/${week.split("(")[0]}`}>{week}</a>
                })
            }
        </ul>
    )

}

export default CalendarList;
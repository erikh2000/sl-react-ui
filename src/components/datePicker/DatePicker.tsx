import styles from './DatePicker.module.css';
import Spinner from "../spinner/Spinner";
import { yearOptions, monthOptions, getDayOptions, getDaysInMonth, encodeDate, decodeDate } from "@/common/dateUtil";

type Props = {
    date:Date,
    onChange:(date:Date) => void
};

function DatePicker(props:Props) {
    const {date, onChange} = props;

    let [yearI, monthI, dayI] = decodeDate(date);
    const dayOptions = getDayOptions(yearI, monthI);

    function _onYearChange(nextYearI:number) {
        const daysInMonth = getDaysInMonth(nextYearI, monthI);
        if (dayI >= daysInMonth) dayI = daysInMonth - 1;
        const nextDate = encodeDate(nextYearI, monthI, dayI);
        onChange(nextDate);
    }

    function _onMonthChange(nextMonthI:number) {
        const daysInMonth = getDaysInMonth(yearI, nextMonthI);
        if (dayI >= daysInMonth) dayI = daysInMonth - 1;
        const nextDate = encodeDate(yearI, nextMonthI, dayI);
        onChange(nextDate);
    }

    function _onDayChange(nextDayI:number) {
        const nextDate = encodeDate(yearI, monthI, nextDayI);
        onChange(nextDate);
    }

    return (
        <div className={styles.container}>
            <Spinner options={monthOptions} selectedOptionNo={monthI} onChange={_onMonthChange} wrapAround/>
            <Spinner options={dayOptions} selectedOptionNo={dayI} onChange={_onDayChange} wrapAround/>
            <Spinner options={yearOptions} selectedOptionNo={yearI} onChange={_onYearChange} wrapAround/>
        </div>
    );
}  

export default DatePicker;
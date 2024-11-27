import {hourOptions, minuteOptions, amPmOptions, encodeTime, decodeTime} from '../../common/dateUtil';
import styles from './TimePicker.module.css';
import Spinner from "../spinner/Spinner";

type Props = {
    date:Date,
    onChange:(date:Date) => void
};

function TimePicker(props:Props) {
    const {date, onChange} = props;
    const [hourI, minuteI, amPmI] = decodeTime(date);

    function _onHourChange(nextHourI:number) {
      const nextDate = encodeTime(nextHourI, minuteI, amPmI);
      onChange(nextDate);
    }

    function _onMinuteChange(nextMinuteI:number) {
      const nextDate = encodeTime(hourI, nextMinuteI, amPmI);
      onChange(nextDate);
    }

    function _onAmPmChange(nextAmPmI:number) {
      const nextDate = encodeTime(hourI, minuteI, nextAmPmI);
      onChange(nextDate);
    }

    return (
        <div className={styles.container}>
            <Spinner options={hourOptions} selectedOptionNo={hourI} onChange={_onHourChange} wrapAround/>
            <Spinner options={minuteOptions} selectedOptionNo={minuteI} onChange={_onMinuteChange} wrapAround/>
            <Spinner options={amPmOptions} selectedOptionNo={amPmI} onChange={_onAmPmChange} wrapAround/>
        </div>
    );
}  

export default TimePicker;
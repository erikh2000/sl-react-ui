import styles from './Spinner.module.css';

type Props = {
    options: string[];
    selectedOptionNo:number,
    wrapAround?:boolean,
    onChange:(optionNo:number) => void
}

function Spinner(props:Props) {
    const {options, selectedOptionNo, wrapAround, onChange} = props;

    const useOptionNo = (selectedOptionNo < 0 || selectedOptionNo >= options.length) ? 0 : selectedOptionNo;
    const selectedOption = options[useOptionNo];

    function _onIncreaseClick() {
      let nextOptionNo = useOptionNo + 1;
      if (nextOptionNo >= options.length) { nextOptionNo = wrapAround ? 0 : options.length - 1; }
      onChange(nextOptionNo);
    }

    function _onDecreaseClick() {
      let nextOptionNo = useOptionNo - 1;
      if (nextOptionNo < 0) { nextOptionNo = wrapAround ? options.length - 1 : 0; }
      onChange(nextOptionNo);
    }

    return (
        <div className={styles.spinnerContainer}>
            <div className={styles.selectedOption}>{selectedOption}</div>
            <div className={styles.controls}>
                <button className={styles.arrow} aria-label="Increase value" onClick={() => _onIncreaseClick()}>▲</button>
                <button className={styles.arrow} aria-label="Decrease value" onClick={() => _onDecreaseClick()}>▼</button>
            </div>
        </div>
    );
}

export default Spinner;
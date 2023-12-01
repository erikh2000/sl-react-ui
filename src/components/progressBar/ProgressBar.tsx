import styles from './ProgressBar.module.css';
import StripedProgressImage from './images/stripedProgress.png';

const INNER_MARGIN = 1;
const INNER_WIDTH = 100 - (INNER_MARGIN * 2);
const INNER_HEIGHT = 100 - (INNER_MARGIN * 2);

function _percent(value:number) {
  return `${value}%`;
}

interface IProps {
  percentComplete: number
}

function ProgressBar(props:IProps) {
  const {percentComplete} = props;
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="<http://www.w3.org/2000/svg>" className={styles.container}>
      <defs>
        <pattern id="imgpattern" x="0%" y="0" width="1" height="1" viewBox="0 0 256 256" preserveAspectRatio="none">
          <image width="256" height="256" href={StripedProgressImage}/>
          <animate attributeName="x" values="0%;100%" dur="2s" repeatCount="indefinite" />
        </pattern>
      </defs>
      <rect
        x='0'
        y='0'
        width='100%'
        height = '100%'
        fill='#222'
      />
      <rect
        x={_percent(INNER_MARGIN)}
        y={_percent(INNER_MARGIN)}
        rx='1%'
        ry='3%'
        width={_percent(percentComplete * INNER_WIDTH)}
        height = {_percent(INNER_HEIGHT)}
        fill='url(#imgpattern)'
        stroke='#000000'
        strokeWidth={.1}
      />
    </svg>);
}

export default ProgressBar;
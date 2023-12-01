import styles from './LoadingBox.module.css';
import { useEffect, useRef, useState } from 'react';

interface IProps {
  className:string,
  text?:string
}

const ELLIPSIS_UPDATE_INTERVAL = 500;

function LoadingBox(props:IProps) {
  const [ellipsis, setEllipsis] = useState<string>('');
  const updateEllipsisTimer = useRef<number|null>(null);

  useEffect(() => {
    if (updateEllipsisTimer.current) return;
    updateEllipsisTimer.current = window.setInterval(() => { // Use window.setInterval() instead of setInterva() to avoid compiler expecting NodeJS.Timer. https://stackoverflow.com/questions/45802988/typescript-use-correct-version-of-settimeout-node-vs-window
      let nextEllipsis = ellipsis + '.';
      if (nextEllipsis.length > 3) nextEllipsis = '';
      setEllipsis(nextEllipsis);
    }, ELLIPSIS_UPDATE_INTERVAL);
    return () => {
      if(updateEllipsisTimer.current) {
        clearInterval(updateEllipsisTimer.current);
      }
      updateEllipsisTimer.current = null;
    }
  }, [ellipsis, updateEllipsisTimer]);

  const { className } = props;
  const text = props.text ?? 'loading';

  return (
    <div className={className}>
      <div className={styles.container}>
        <div className={styles.loadingText}>{ellipsis}{text}{ellipsis}</div>
      </div>
    </div>
  );
}

export default LoadingBox;
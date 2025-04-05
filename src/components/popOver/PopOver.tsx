import { useState, useRef } from 'react';

import styles from './Popover.module.css';

type Props = {
  children: React.ReactNode;
  content: React.ReactNode;
};

function _isContainerOnRightSide(containerRef: any) {
  if (!containerRef.current) {
    return false;
  }
  const containerRect = containerRef.current.getBoundingClientRect();
  const windowWidth = window.innerWidth;
  return containerRect.left + containerRect.width > windowWidth / 2;
}

function Popover({ children, content }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const showToRight = !_isContainerOnRightSide(containerRef);
  const contentBoxStyle = showToRight ? `${styles.contentBox} ${styles.contentBoxRight}` : `${styles.contentBox} ${styles.contentBoxLeft}`;
  const contentElement = isOpen ? <div className={contentBoxStyle} ref={contentRef} onMouseOut={_onMouseOut}>{content}</div> : null;

  function _onMouseOver(event: React.MouseEvent<HTMLDivElement>) {
    if (!containerRef.current) return;
    const relatedTarget = event.relatedTarget as HTMLDivElement | null;
    if (relatedTarget && containerRef.current.contains(relatedTarget)) return; // Ignore if moving within the container
    setIsOpen(true);
  };

  function _onMouseOut(event: React.MouseEvent<HTMLDivElement>) {
    if (!containerRef.current || !contentRef.current) return;
    const relatedTarget = event.relatedTarget as Node | null;
    const isInsideContent = contentRef.current.contains(relatedTarget);
    const isInsideContainer = containerRef.current.contains(relatedTarget);
    if (isInsideContainer || isInsideContent) return; // Don't hide if moving within the contentBox.
    setIsOpen(false);
  };

  return (
    <div className={styles.container} ref={containerRef}>
      <div onMouseOver={_onMouseOver} onMouseOut={_onMouseOut}>{children}</div>
      {contentElement}
    </div>
  );
}

export default Popover;
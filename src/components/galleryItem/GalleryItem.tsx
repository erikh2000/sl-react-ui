import styles from './GalleryItem.module.css';

import {useState, useRef, MouseEvent, PropsWithChildren} from "react";

type Props = {
  title:string,
  description?:string
}

function GalleryItem(props:PropsWithChildren<Props>) {
  const {title, description} = props;
  const _refOpen = useRef<HTMLDivElement>(null);
  const _refOpenH1 = useRef<HTMLHeadingElement>(null);
  const _refClosed = useRef<HTMLDivElement>(null);
  const _refClosedH1 = useRef<HTMLHeadingElement>(null);
  const [isOpen, setIsOpen] = useState(false);


  function _onOpenClick(e:MouseEvent) {
    if (e.target === _refClosed.current || e.target === _refClosedH1.current) setIsOpen(true);
  }

  function _onCloseClick(e:MouseEvent) {
    if (e.target === _refOpen.current || e.target === _refOpenH1.current)  setIsOpen(false);
  }
  
  if (!isOpen) return (
    <div ref={_refClosed} className={styles.closedItem} onClick={(e) => _onOpenClick(e)}>
      <h1 ref={_refClosedH1} onClick={(e) => _onOpenClick(e)}>{title}</h1>
    </div>
  );
  
  return (
    <div ref={_refOpen} className={styles.openItem} onClick={(e) => _onCloseClick(e) } >
      <h1 ref={_refOpenH1} onClick={(e) => _onCloseClick(e)}>{title}</h1>
      <p>{description}</p>
      {props.children}
    </div>
  );
}

export default GalleryItem;
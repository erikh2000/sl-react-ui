import { useState, useRef, useEffect } from 'react';

import styles from './SheetTable.module.css';
import SheetRow from "./SheetRow";
import SheetHeader from './SheetHeader';
import SheetFooter from './SheetFooter';
import HorizontalScroll from './types/HorizontalScroll';
import VerticalScroll from './types/VerticalScroll';
import GeneratedFooterText from './types/GeneratedFooterText';
import { getFooterText, getRowScrollContainerStyle, measureColumnWidths, setHorizontalScroll, setVerticalScroll, syncScrollableElements } from './interactions/table';

type Props = {
  columnNames:string[],
  rows:any[][],
  displayRowCount?:number,
  selectedColNo?:number,
  selectedRowNo?:number,
  horizontalScroll?:HorizontalScroll,
  verticalScroll?:VerticalScroll,
  onSelectCell?:(colNo:number, rowNo:number)=>void,
  generatedColNo?:number,
  footerText?:string|GeneratedFooterText
}

function SheetTable({columnNames, rows, footerText, displayRowCount, selectedRowNo, onSelectCell, generatedColNo, horizontalScroll, verticalScroll}:Props) {
  const sheetTableElementRef = useRef<HTMLDivElement>(null);
  const headerInnerElementRef = useRef<HTMLDivElement>(null);
  const rowsScrollElementRef = useRef<HTMLDivElement>(null);
  const [columnWidths, setColumnWidths] = useState<number[]>([]);

  useEffect(() => {
    if (!sheetTableElementRef.current) return;
    const nextColumnWidths:number[] = measureColumnWidths(sheetTableElementRef.current, columnNames, rows);
    setColumnWidths(nextColumnWidths);
  }, [columnNames, rows]);

  useEffect(() => {
    if (!rowsScrollElementRef.current) return;
    setHorizontalScroll(rowsScrollElementRef.current, horizontalScroll);
  }, [horizontalScroll]);

  useEffect(() => {
    if (!rowsScrollElementRef.current) return;
    setVerticalScroll(rowsScrollElementRef.current, verticalScroll);
  }, [verticalScroll]);

  const rowCount = rows.length;
  const rowsContent = columnWidths.length === 0 ? null : rows.map((row, rowI) => 
    <SheetRow key={rowI} row={row} rowNo={rowI+1} rowCount={rowCount} columnWidths={columnWidths} 
      isSelected={rowI+1===selectedRowNo} onSelectCell={onSelectCell} generatedColNo={generatedColNo}/>
  );
  
  const rowScrollContainerStyle = getRowScrollContainerStyle(displayRowCount, rowsScrollElementRef.current);
  const displayFooterText = getFooterText(footerText, rows);
  return (
    <div className={styles.sheetTable} ref={sheetTableElementRef}>
      <div className={styles.headerScrollContainer}>
        <SheetHeader columnNames={columnNames} columnWidths={columnWidths} ref={headerInnerElementRef}/>
      </div>
      <div className={styles.rowsScrollContainer} style={rowScrollContainerStyle} ref={rowsScrollElementRef} 
          onScroll={() => {
            if (!headerInnerElementRef.current || !rowsScrollElementRef.current) return;
            syncScrollableElements(headerInnerElementRef.current, rowsScrollElementRef.current)
          }}>
        <div className={styles.rowsInnerContainer}>
          {rowsContent}
        </div>
      </div><SheetFooter text={displayFooterText}/>
    </div>
  );
}

export default SheetTable;
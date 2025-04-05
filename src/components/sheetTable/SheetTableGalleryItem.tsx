import { useEffect, useState } from "react";

import GalleryItem from "@/components/galleryItem/GalleryItem";
import SheetTable from "./SheetTable";
import GeneratedFooterText from "./types/GeneratedFooterText";
import VerticalScroll from "./types/VerticalScroll";
import HorizontalScroll from "./types/HorizontalScroll";
import ContentButton from "../contentButton/ContentButton";

const columnNames = ['Name', 'Occupation', 'City/State of Origin', 'Likes', 'Dislikes'];
const rows = [
  ['John Henry', 'Steel-driving man', 'West Virginia', 'Hammering', 'Steam drills'],
  ['Casey Jones', 'Brave engineer', 'Missouri', 'Railroads', 'Cows on the tracks'],
  ['Paul Bunyan', 'Lumberjack', 'Minnesota', 'Blue oxen', 'Deforestation'],
  ['Pecos Bill', 'Cowboy', 'Texas', 'Lassoing', 'Tornadoes'],
  ['Virgil Caine', 'Railroad engineer', 'Georgia', 'The South', 'The North'],
  ['Jed Clampett', 'Oil tycoon', 'Beverly Hills', 'Black gold', 'Texas tea'],
  ['Jack Johnson', 'Able-bodied sailor', 'Galveston', 'Sailing', 'barnacles'],
  ['Mr. Tanner', 'cleaner from', 'a town in the Midwest', 'Cleaning', 'Dirt']
];

const genColumnNames = ['Name', 'Occupation'];
const genRows = [['George Costanza', 'Hmm...']]; 

function SheetTableGalleryItem() {
  const [selectedRowNo, setSelectedRowNo] = useState<number|undefined>(undefined);
  const [verticalScroll, setVerticalScroll] = useState<VerticalScroll>(VerticalScroll.CLEAR);
  const [horizontalScroll, setHorizontalScroll] = useState<HorizontalScroll>(HorizontalScroll.CLEAR);

  useEffect(() => {
    if (horizontalScroll === HorizontalScroll.CLEAR) return;
    setHorizontalScroll(HorizontalScroll.CLEAR);
  }, [horizontalScroll]);

  useEffect(() => {
    if (verticalScroll === VerticalScroll.CLEAR) return;
    setVerticalScroll(VerticalScroll.CLEAR);
  }, [verticalScroll]);

  return (
    <GalleryItem title="Sheet Table" description="Displays tabular read-only tabular data">
      <p>Test 1: full display</p>
      <SheetTable columnNames={columnNames} rows={rows} />
      <p>Test 2: limited to 3 rows</p>
      <SheetTable columnNames={columnNames} rows={rows} displayRowCount={3} />
      <p>Test 3: selectable row</p>
      <SheetTable columnNames={columnNames} rows={rows} displayRowCount={3} selectedRowNo={selectedRowNo} onSelectCell={(_colNo, rowNo) => setSelectedRowNo(rowNo)} />
      <p>Test 4: row count footer</p>
      <SheetTable columnNames={columnNames} rows={rows} displayRowCount={3} footerText={GeneratedFooterText.ROW_COUNT} />
      <p>Test 5: custom text footer</p>
      <SheetTable columnNames={columnNames} rows={rows} displayRowCount={3} footerText='Footy Foot' />
      <p>Test 6: force scroll</p>
      <ContentButton onClick={() => setVerticalScroll(VerticalScroll.TOP)} text="Scroll Top"/>
      <ContentButton onClick={() => setVerticalScroll(VerticalScroll.BOTTOM)} text="Scroll Bottom"/>
      <ContentButton onClick={() => setHorizontalScroll(HorizontalScroll.LEFT)} text="Scroll Left"/>
      <ContentButton onClick={() => setHorizontalScroll(HorizontalScroll.RIGHT)} text="Scroll Right"/>
      <SheetTable columnNames={columnNames} rows={rows} displayRowCount={3} verticalScroll={verticalScroll} horizontalScroll={horizontalScroll} />
      <p>Test 7: column with generating value</p>
      <SheetTable columnNames={genColumnNames} rows={genRows} displayRowCount={3} generatedColNo={2} />
    </GalleryItem>
  );
}

export default SheetTableGalleryItem;
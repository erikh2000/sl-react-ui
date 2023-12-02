import GalleryItem from "@/components/galleryItem/GalleryItem";
import Selector from "./Selector";

import { useState } from "react";

function SelectorGalleryItem() {
  const [test1OptionNo, setTest1OptionNo] = useState<number>(0);
  const [test2OptionNo, setTest2OptionNo] = useState<number>(0);
  
  return (
    <GalleryItem title="Selector" description="A selector component">
      <h2>Test 1: Selector with 3 options.</h2>
      <Selector label="Fruits" optionNames={["Apples", "Bananas", "Cantaloupes"]} selectedOptionNo={test1OptionNo} onChange={(optionNo) => setTest1OptionNo(optionNo)} />
      <h2>Test 2: Can click selected button.</h2>
      <Selector label="Animals" optionNames={["Apes", "Iguanas", "Antelopes"]} selectedOptionNo={test2OptionNo} onClick={() => {}} onChange={(optionNo) => setTest2OptionNo(optionNo)} />
    </GalleryItem>
  );
}

export default SelectorGalleryItem;
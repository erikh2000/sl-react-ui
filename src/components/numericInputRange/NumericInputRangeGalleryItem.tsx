import { useState } from "react";

import GalleryItem from "@/components/galleryItem/GalleryItem";
import NumericInputRange from "./NumericInputRange";

function NumericInputRangeGalleryItem() {
  const [range1, setRange1] = useState<[left:number, right:number]>([1,7]);
  const [range2, setRange2] = useState<[left:number, right:number]>([2,8]);

  return (
    <GalleryItem title="Numeric Input Range" description="An input that accepts two numbers defining a range.">
      <p>Test 1 - two numbers between 0 and 10, left value must be less than right.</p>
      <NumericInputRange minValue={0} maxValue={10} leftValue={range1[0]} rightValue={range1[1]} 
        onChange={(left, right) => {setRange1([left,right]);} }
      />
      <p>Test 2 - two numbers between 0 and 10, left value must be less than or equal to right.</p>
      <NumericInputRange minValue={0} maxValue={10} leftValue={range2[0]} rightValue={range2[1]} allowSameValues
        onChange={(left, right) => {setRange2([left,right]);} }
      />
    </GalleryItem>
  );
}

export default NumericInputRangeGalleryItem;
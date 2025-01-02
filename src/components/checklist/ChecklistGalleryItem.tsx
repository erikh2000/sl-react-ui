import { useState } from "react";

import GalleryItem from "@/components/galleryItem/GalleryItem";
import Checklist from "./Checklist";

function ChecklistGallery() {
  const [selectedOptionNos, setSelectedOptionNos] = useState<number[]>([]);
  const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew', 'Icaco', 'Jujube', 'Kiwi', 'Lemon', 'Mango', 'Nectarine', 'Orange', 'Papaya', 'Quince', 'Raspberry', 'Strawberry', 'Tangerine', 'Ugli', 'Vanilla', 'Watermelon', 'Xylocarp', 'Yuzu', 'Zucchini'];
  const vegetables = ['Artichoke', 'Broccoli', 'Cabbage', 'Dill', 'Eggplant', 'Fennel', 'Garlic', 'Horseradish', 'Iceberg', 'Jalapeno', 'Kale', 'Leek', 'Mushroom', 'Nopal', 'Onion', 'Pepper', 'Quinoa', 'Radish', 'Spinach', 'Tomato', 'Ulluco', 'Vinegar', 'Wakame', 'Xacuti', 'Yam', 'Zucchini'];
  return (
    <GalleryItem title="Checklist" description="A group of checkboxes.">
      <p><Checklist label="Fruits" options={fruits} selectedOptionNos={selectedOptionNos} onChange={setSelectedOptionNos}/></p>
      <p><Checklist label="Vegetables" options={vegetables} selectedOptionNos={[]} onChange={() => {}} disabled/></p>
    </GalleryItem>
  );
}

export default ChecklistGallery;
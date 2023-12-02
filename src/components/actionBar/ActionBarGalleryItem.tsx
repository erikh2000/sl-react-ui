import GalleryItem from "@/components/galleryItem/GalleryItem";
import ActionBar from "./ActionBar";

function ActionBarGalleryItem() {
  const buttons = [
    {
      groupNo: 0,
      text: "Apples",
      onClick: () => {},
      disabled: false
    },
    {
      groupNo: 0,
      text: "Bananas",
      onClick: () => {},
      disabled: true
    },
    {
      groupNo: 1,
      text: "Cacti",
      onClick: () => {},
      disabled: false
    },
    {
      groupNo: 1,
      text: "Donuts",
      onClick: () => {},
      disabled: true
    }
  ];
  
  return (
    <GalleryItem title="Action Bar" description="A top-of-screen bar that can have some buttons and a document name.">
      <h2>Test 1: No Document Name</h2>
      <ActionBar buttons={buttons} />
      <h2>Test 2: With Document Name</h2>
      <ActionBar documentName="Test Document" buttons={buttons} />
    </GalleryItem>
  );
}

export default ActionBarGalleryItem;
import WaitingEllipsis from "./WaitingEllipsis";
import GalleryItem from "@/components/galleryItem/GalleryItem";


function WaitingEllipsisGalleryItem() {
  return (
    <GalleryItem title="Waiting Ellipsis" description="A component for animating an ellipsis during a delay">
      <h2>Test 1: Sized like an icon.</h2>
      <div style={{ fontSize:"3rem", backgroundColor:"yellow", borderRadius:"1rem", width:"2.5rem", height:"3rem", padding:"1rem" }}><WaitingEllipsis /></div>
      <h2>Test 2: Matches text it is appended to.</h2>
      <div style={{ fontSize:".5rem"}}>Waiting<WaitingEllipsis /></div>
      <div style={{ fontSize:"1.5rem"}}>Waiting<WaitingEllipsis /></div>
      <div style={{ fontSize:"2.5rem"}}>Waiting<WaitingEllipsis /></div>
    </GalleryItem>
  );
}

export default WaitingEllipsisGalleryItem;
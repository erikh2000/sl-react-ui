import GalleryItem from "@/components/galleryItem/GalleryItem.tsx";
import ToastPane from "@/components/toasts/ToastPane.tsx";
import {infoToast, errorToast, importantToast}  from './toastUtil.ts';
function ToastGalleryItem() {
  function _showTest1(event:React.MouseEvent<HTMLHeadingElement>) { infoToast('Test 1'); event.stopPropagation();}
  function _showTest2(event:React.MouseEvent<HTMLHeadingElement>) { errorToast('Test 2'); event.stopPropagation();}
  function _showTest3(event:React.MouseEvent<HTMLHeadingElement>) { importantToast('Test 3'); event.stopPropagation();}
  
  return (
    <GalleryItem title="Toasts" description="Displays toasts">
      <ToastPane/>
      <h2 onClick={(e) => _showTest1(e)}>Test 1: Click to show info toast.</h2>
      <h2 onClick={(e) => _showTest2(e)}>Test 2: Click to show error toast.</h2>
      <h2 onClick={(e) => _showTest3(e)}>Test 3: Click to show important toast.</h2>
    </GalleryItem>
  );
}

export default ToastGalleryItem;
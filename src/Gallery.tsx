import style from './Gallery.module.css'
import CanvasGalleryItem from '@/components/canvas/CanvasGalleryItem.tsx'
import ToastGalleryItem from "@/components/toasts/ToastGalleryItem.tsx";
import WaveformVisualizerGalleryItem from "@/components/waveformVisualizer/WaveformVisualizerGalleryItem.tsx";
import ProgressBarGalleryItem from "@/components/progressBar/ProgressBarGalleryItem.tsx";
import SliderGalleryItem from "@/components/slider/SliderGalleryItem.tsx";
import SelectorGalleryItem from "@/components/selector/SelectorGalleryItem.tsx";
import LoadingBoxGalleryItem from "@/components/loadingBox/LoadingBoxGalleryItem.tsx";
import TextConsoleGalleryItem from "@/components/textConsole/TextConsoleGalleryItem.tsx";
import ModalDialogsGalleryItem from "@/components/modalDialogs/ModalDialogsGalleryItem.tsx";
import ContentButtonGalleryItem from "@/components/contentButton/ContentButtonGalleryItem.tsx";
import PaneGalleryItem from "@/components/pane/PaneGalleryItem.tsx";
import ActionBarGalleryItem from "@/components/actionBar/ActionBarGalleryItem.tsx";

function Gallery() {
  return (
    <div className={style.container}>
      <h1>Seespace Labs Component Gallery</h1>
      
      <ActionBarGalleryItem />
      <CanvasGalleryItem />
      <ContentButtonGalleryItem />
      <ModalDialogsGalleryItem />
      <LoadingBoxGalleryItem />
      <PaneGalleryItem />
      <ProgressBarGalleryItem />
      <SelectorGalleryItem />
      <SliderGalleryItem />
      <TextConsoleGalleryItem />
      <ToastGalleryItem />
      <WaveformVisualizerGalleryItem />
      
    </div>
  );
}

export default Gallery;

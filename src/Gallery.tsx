import style from './Gallery.module.css'
import CanvasGalleryItem from '@/components/canvas/CanvasGalleryItem'
import ToastGalleryItem from "@/components/toasts/ToastGalleryItem";
import WaveformVisualizerGalleryItem from "@/components/waveformVisualizer/WaveformVisualizerGalleryItem";
import ProgressBarGalleryItem from "@/components/progressBar/ProgressBarGalleryItem";
import SliderGalleryItem from "@/components/slider/SliderGalleryItem";
import SelectorGalleryItem from "@/components/selector/SelectorGalleryItem";
import LoadingBoxGalleryItem from "@/components/loadingBox/LoadingBoxGalleryItem";
import TextConsoleGalleryItem from "@/components/textConsole/TextConsoleGalleryItem";
import ModalDialogsGalleryItem from "@/components/modalDialogs/ModalDialogsGalleryItem";
import ContentButtonGalleryItem from "@/components/contentButton/ContentButtonGalleryItem";
import PaneGalleryItem from "@/components/pane/PaneGalleryItem";
import ActionBarGalleryItem from "@/components/actionBar/ActionBarGalleryItem";

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

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
import SpinnerGalleryItem from './components/spinner/SpinnerGalleryItem';
import TimePickerGalleryItem from './components/timePicker/TimePickerGalleryItem';
import DatePickerGalleryItem from './components/datePicker/DatePickerGalleryItem';
import WaitingEllipsisGalleryItem from './components/waitingEllipsis/WaitingEllipsisGalleryItem';
import CheckboxGalleryItem from './components/checkbox/CheckboxGalleryItem';
import ChecklistGalleryItem from './components/checklist/ChecklistGalleryItem';
import GeneratedTextGalleryItem from './components/generatedText/GeneratedTextGalleryItem';
import NumericInputGallery from './components/numericInput/NumericInputGalleryItem';

function Gallery() {
  return (
    <div className={style.container}>
      <h1>Seespace Labs Component Gallery</h1>
      
      <ActionBarGalleryItem />
      <CanvasGalleryItem />
      <CheckboxGalleryItem />
      <ChecklistGalleryItem />
      <ContentButtonGalleryItem />
      <DatePickerGalleryItem />
      <GeneratedTextGalleryItem />
      <ModalDialogsGalleryItem />
      <NumericInputGallery />
      <LoadingBoxGalleryItem />
      <PaneGalleryItem />
      <ProgressBarGalleryItem />
      <SelectorGalleryItem />
      <SliderGalleryItem />
      <SpinnerGalleryItem />
      <TextConsoleGalleryItem />
      <TimePickerGalleryItem />
      <ToastGalleryItem />
      <WaitingEllipsisGalleryItem />
      <WaveformVisualizerGalleryItem />
      
    </div>
  );
}

export default Gallery;

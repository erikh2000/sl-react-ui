import GalleryItem from '@/components/galleryItem/GalleryItem.tsx';
import WaveformVisualizer from "./WaveformVisualizer.tsx";
import styles from './WaveformVisualizerGalleryItem.module.css';
import TEST_SAMPLES from './testSamples.ts';

import {useEffect, useState} from 'react';
import IWaveformAmplitudeMarker from "@/components/waveformVisualizer/WaveformAmplitudeMarker.tsx";
import IWaveformBlockMarker from "@/components/waveformVisualizer/WaveformBlockMarker.tsx";
import IWaveformTimeMarker, {MarkerType} from "@/components/waveformVisualizer/WaveformTimeMarker.tsx";

function _createAmplitudeMarkers():IWaveformAmplitudeMarker[] {
  return [
    {
      amplitude: 0.5,
      isBackground: false
    },
    {
      amplitude: -0.5,
      isBackground: true
    },
  ];
}

function _createBlockMarkers(sampleCount:number):IWaveformBlockMarker[] {
  return [
    {
      amplitude: 0.5,
      isBackground: false,
      sampleNo: sampleCount * .1,
      toAmplitude: -0.5,
      toSampleNo: sampleCount * .2
    }
  ];
}

function _createTimeMarkers(sampleCount:number):IWaveformTimeMarker[] {
  return [
    {
      isBackground: false,
      sampleNo: sampleCount * .7,
      toSampleNo: sampleCount * .8,
      description: 'primary',
      markerType: MarkerType.Primary
    },
    {
      isBackground: false,
      sampleNo: sampleCount * .3,
      toSampleNo: sampleCount * .5,
      description: 'secondary',
      markerType: MarkerType.Secondary
    },
  ];
}

const BLOCK_MARKERS = _createBlockMarkers(TEST_SAMPLES.length);
const AMPLITUDE_MARKERS = _createAmplitudeMarkers();
const TIME_MARKERS = _createTimeMarkers(TEST_SAMPLES.length);

function WaveformVisualizerGalleryItem() {
  const [frameNo, setFrameNo] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setFrameNo(frameNo + 1);
    }, 1000 / 20);
    
    return () => {
      clearInterval(interval);
    };
  }, [frameNo, setFrameNo]);
  
  const needlePosition = (Date.now() % 6000) / 6000;
  
  return (
    <GalleryItem title="Waveform Visualizer" description="A waveform visualizer component.">
      <h2>Test 1: No samples.</h2>
      <WaveformVisualizer 
        amplitudeMarkers={[]}
        beginSampleNo={0}
        blockMarkers={[]}
        className={styles.waveformContainer}
        endSampleNo={0}
        needleSampleNo={null}
        samples={null}
        timeMarkers={[]}
      />
      <h2>Test 2: Some samples.</h2>
      <WaveformVisualizer
        amplitudeMarkers={[]}
        beginSampleNo={0}
        blockMarkers={[]}
        className={styles.waveformContainer}
        endSampleNo={TEST_SAMPLES.length}
        needleSampleNo={null}
        samples={TEST_SAMPLES}
        timeMarkers={[]}
      />
      <h2>Test 3: Zoom.</h2>
      <WaveformVisualizer
        amplitudeMarkers={[]}
        beginSampleNo={0}
        blockMarkers={[]}
        className={styles.waveformContainer}
        endSampleNo={Math.ceil(TEST_SAMPLES.length/10)}
        needleSampleNo={null}
        samples={TEST_SAMPLES}
        timeMarkers={[]}
      />
      <h2>Test 4: Markers.</h2>
      <WaveformVisualizer
        amplitudeMarkers={AMPLITUDE_MARKERS}
        beginSampleNo={0}
        blockMarkers={BLOCK_MARKERS}
        className={styles.waveformContainer}
        endSampleNo={TEST_SAMPLES.length}
        needleSampleNo={null}
        samples={TEST_SAMPLES}
        timeMarkers={TIME_MARKERS}
      />
      <h2>Test 5: Needle.</h2>
      <WaveformVisualizer
        amplitudeMarkers={AMPLITUDE_MARKERS}
        beginSampleNo={0}
        blockMarkers={BLOCK_MARKERS}
        className={styles.waveformContainer}
        endSampleNo={TEST_SAMPLES.length}
        needleSampleNo={Math.floor(needlePosition * TEST_SAMPLES.length)}
        samples={TEST_SAMPLES}
        timeMarkers={TIME_MARKERS}
      />
    </GalleryItem>
    
  );
}

export default WaveformVisualizerGalleryItem;
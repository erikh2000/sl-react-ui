import { useState } from "react";

import GalleryItem from "@/components/galleryItem/GalleryItem";
import GeneratedText from "./GeneratedText";
import ContentButton from "../contentButton/ContentButton";

const completeSentence = "You can't destroy the thing you hate. You can only create the thing you love.";
const words = completeSentence.split(' ');

function _addWord(words:string[], wordIndex:number, setText:(text:string) => void, setWordIndex:(wordIndex:number) => void) {
  if (wordIndex === words.length) {
    setText('');
    setWordIndex(0);
    return;
  }
  let nextText = '';
  for(let i = 0; i <= wordIndex; ++i) {
    if (i > 0) nextText += ' ';
    nextText += words[i];
  }
  if (nextText.length < completeSentence.length) nextText += (nextText.endsWith('.') ? '..' : '...');
  setText(nextText);
  setWordIndex(wordIndex + 1);
}

function GeneratedTextGalleryItem() {
  const [text, setText] = useState<string>('...');
  const [wordIndex, setWordIndex] = useState<number>(0);
  
  return (
    <GalleryItem title="Generated Text" description="For displaying text that is generated incrementally by something like an LLM.">
      <ContentButton onClick={() => _addWord(words, wordIndex, setText, setWordIndex)} text="Add a Word" /><br />
      <GeneratedText text={text} />
    </GalleryItem>
  );
}

export default GeneratedTextGalleryItem;
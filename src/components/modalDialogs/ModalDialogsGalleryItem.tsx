import GalleryItem from "@/components/galleryItem/GalleryItem.tsx";
import OkayDialog from "./OkayDialog.tsx";
import ConfirmCancelDialog from "./ConfirmCancelDialog.tsx";

import { useState } from "react";
import TextInputDialog from "@/components/modalDialogs/TextInputDialog.tsx";

export function _fixInputNoNumbers(value:string):string|null {
  let fixed = value.replace(/[0-9]/g, '');
  return fixed === value ? null : fixed;
}

export function _validateForFail(value:string):string[]|null {
  return value === 'fail' ? ['Failure is unacceptable.'] : null
}

function ModalDialogsGalleryItem() {
  const [modalDialog, setModalDialog] = useState<string|null>(null);
  
  return (
    <GalleryItem title='Modal Dialogs' description='A collection of modal dialogs.'>
      <h2 onClick={() => setModalDialog(OkayDialog.name)}>Test 1 - Click to open "okay" dialog.</h2>
      <h2 onClick={() => setModalDialog(ConfirmCancelDialog.name)}>Test 2 - Click to open "confirm/cancel" dialog.</h2>
      <h2 onClick={() => setModalDialog(TextInputDialog.name)}>Test 3 - Click to open "text input" dialog.</h2>
      <OkayDialog 
        isOpen={modalDialog === OkayDialog.name} 
        title='Test 1' description='This is a test of the okay dialog.' 
        onOkay={() => setModalDialog(null)} 
      />
      <ConfirmCancelDialog 
        isOpen={modalDialog === ConfirmCancelDialog.name} 
        title='Test 2' description='This is a test of the confirm/cancel dialog.' 
        onConfirm={() => setModalDialog(null)} 
        onCancel={() => setModalDialog(null)} 
      />
      <TextInputDialog
        isOpen={modalDialog === TextInputDialog.name} 
        title='Test 3' description='This is a test of the text input dialog. Try typing "fail" to see validation failure. Or anything with numbers in it to see the fix input behavior.'
        defaultValue='default value'
        onSubmitValidate={_validateForFail}
        onFixInput={_fixInputNoNumbers}
        onSubmit={() => setModalDialog(null)} 
        onCancel={() => setModalDialog(null)}
      />
    </GalleryItem>
  );
}

/*
cancelText?:string,
  defaultValue:string,
  description:string,
  isOpen:boolean,
  onCancel?:() => void,
  onFixInput?:IFixInputCallback,
  onSubmit:(value:string) => void,
  onSubmitValidate?:IValidateCallback,
  submitText?:string,
  title:string
 */

export default ModalDialogsGalleryItem;
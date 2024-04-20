import Toast, { ToastState } from "./Toast";
interface IProps {
    onDismiss: () => void;
    toast: Toast;
    toastState: ToastState;
}
declare function ToastMessage(props: IProps): import("react/jsx-runtime").JSX.Element;
export default ToastMessage;

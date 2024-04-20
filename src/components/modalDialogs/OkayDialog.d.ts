interface IProps {
    okayText?: string;
    description: string;
    isOpen: boolean;
    onOkay: () => void;
    title: string;
}
declare function OkayDialog(props: IProps): import("react/jsx-runtime").JSX.Element;
export default OkayDialog;

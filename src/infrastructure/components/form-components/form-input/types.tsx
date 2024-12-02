
export default interface FormInputProps {
    name: string;
    mask?: string;
    id: string;
    type: string
    className?: string;
    onClick?: () => void;
    onChange?: any;
    valueByDefault?: string
    imageBackground?: any;
    insertedValue?: any;
    placeholder?: string;
    cities?: any
  }
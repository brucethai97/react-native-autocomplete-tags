/// <reference types="react" />
import { PressableProps, TextStyle } from 'react-native';
export declare type TagProps = PressableProps & {
    label: string;
    textStyle?: TextStyle;
};
declare const Tag: ({ label, textStyle, ...props }: TagProps) => JSX.Element;
export default Tag;

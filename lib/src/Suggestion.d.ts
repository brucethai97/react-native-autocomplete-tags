/// <reference types="react" />
import { PressableProps, TextStyle } from 'react-native';
export declare type SuggestionProps = PressableProps & {
    label: string;
    textStyle?: TextStyle;
};
declare const Suggestion: ({ label, textStyle, ...props }: SuggestionProps) => JSX.Element;
export default Suggestion;

/// <reference types="react" />
import { FlatListProps, TextInputProps, TextStyle, ViewStyle } from 'react-native';
export declare type Tag = any;
export declare type Suggestion = any;
export declare type AutocompleteTagsProps = {
    /** array of tags to render */
    tags: Tag[];
    /** array of all possible suggestions that the autocomplete pulls from */
    suggestions?: Suggestion[];
    /** function called when tags needs to be updated */
    onChangeTags: (newTags: Tag[]) => void;
    /** given a tag, returns the string that should be rendered in a Tag */
    labelExtractor: (tag: Tag) => string;
    /** called when a tag is pressed, instead of calling `onChangeTags` with the pressed tag removed */
    onTagPress?: (tag: Tag) => void;
    /** an array of characters that should trigger a new tag and clear the TextInput
     * @default [',', ' ', ';', '\n']  */
    parseChars?: string[];
    /** called when the user types a character in parseChars and should therefore add a new tag
     * if undefined, will call `onChangeTags` with `[...tags, userInputText]`
     */
    onAddNewTag?: (userInput: string) => void;
    /** whether or not to allow the user to create a Tag that doesn't come from `suggestions`
     * @default true
     */
    allowCustomTags?: boolean;
    /** called when a suggestion is pressed
     * defaultly calls `onChangeTags` with `[...tags, pressedSuggestion]`
     */
    onSuggestionPress?: (suggestion: Suggestion) => void;
    onChangeText?: (text: string) => void;
    /** given a Suggestion, returns a string that can be compared to the user's search */
    suggestionExtractor?: (suggestion: Suggestion) => string;
    /** a function for filtering suggestions based on the TextInput value */
    filterSuggestions?: (text: string) => Suggestion[];
    /** a function that returns a custom tag component */
    renderTag?: (tag: Tag, onPress: (tag: Tag) => void) => JSX.Element;
    /** a function that returns a custom suggestion component */
    renderSuggestion?: (suggestion: Suggestion, onPress: (tag: Suggestion) => void) => JSX.Element;
    /** any custom TextInputProps */
    inputProps?: Partial<TextInputProps>;
    /** any additional FlatListProps */
    flatListProps?: Partial<FlatListProps<any>>;
    /** style for the outer-most View that houses both the tagContainer and suggestion list */
    containerStyle?: ViewStyle;
    /** styles for the container View that houses the tags and the input */
    tagContainerStyle?: ViewStyle;
    /** styles for the TextInput component */
    inputStyle?: TextStyle;
    /** styles for the FlatList that renders suggestions */
    flatListStyle?: ViewStyle;
};
export declare const AutocompleteTags: {
    ({ tags, suggestions, labelExtractor, suggestionExtractor, onChangeTags, onTagPress, parseChars, allowCustomTags, onAddNewTag, onSuggestionPress, filterSuggestions, renderTag, renderSuggestion, containerStyle, tagContainerStyle, inputStyle, flatListStyle, inputProps, flatListProps, }: AutocompleteTagsProps): JSX.Element;
    defaultProps: {
        parseChars: string[];
        allowCustomTags: boolean;
        suggestions: never[];
    };
};
export default AutocompleteTags;

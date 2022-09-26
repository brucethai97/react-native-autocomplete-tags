import React, { useRef, useState } from 'react';
import { FlatList, StyleSheet, TextInput, View, } from 'react-native';
import Suggestion from './src/Suggestion';
import Tag from './src/Tag';
export const AutocompleteTags = ({ tags, suggestions, labelExtractor, suggestionExtractor, onChangeTags, onTagPress, parseChars, allowCustomTags, onAddNewTag, onSuggestionPress, filterSuggestions, renderTag, renderSuggestion, containerStyle, tagContainerStyle, inputStyle, flatListStyle, inputProps, flatListProps, onChangeText}) => {
    const [text, setText] = useState('');
    const inputRef = useRef(null);
    const extractor = suggestionExtractor || labelExtractor;
    const handleTagPress = (tag) => {
        if (onTagPress) {
            onTagPress(tag);
        }
        else {
            onChangeTags(tags.filter((t) => labelExtractor(t) !== labelExtractor(tag)));
        }
    };
    const handleSuggestionPress = (suggestion) => {
        setText('');
        if (onSuggestionPress) {
            onSuggestionPress(suggestion);
        }
        else {
            onChangeTags([...tags, suggestion]);
        }
        inputRef.current?.focus();
    };
    const handleTextChange = (input) => {
        if (onChangeText) {
            onChangeText(input)
        }
        setText(input);
        const lastTyped = input.charAt(input.length - 1);
        if (parseChars && parseChars.indexOf(lastTyped) > -1) {
            setText('');
            if (allowCustomTags) {
                const label = input.slice(0, -1);
                if (onAddNewTag) {
                    onAddNewTag(label);
                }
                else {
                    onChangeTags([...tags, label]);
                }
            }
        }
    };
    const renderTagComponent = (tag) => {
        const onPress = () => handleTagPress(tag);
        if (renderTag) {
            return renderTag(tag, onPress);
        }
        return <Tag label={labelExtractor(tag)} key={labelExtractor(tag)} onPress={onPress}/>;
    };
    const renderSuggestionComponent = ({ item }) => {
        const onPress = () => handleSuggestionPress(item);
        if (renderSuggestion) {
            return renderSuggestion(item, onPress);
        }
        return <Suggestion label={extractor(item)} onPress={onPress}/>;
    };
    const onKeyPress = ({ nativeEvent: { key } }) => {
        if (text !== '' || key !== 'Backspace' || tags.length < 1) {
            return;
        }
        const updatedTags = [...tags];
        updatedTags.pop();
        onChangeTags(updatedTags);
    };
    const getSuggestions = () => {
        if (filterSuggestions) {
            return filterSuggestions(text);
        }
        if (!text || text === '') {
            return [];
        }
        const regex = new RegExp(`${text.trim()}`, 'i');
        return suggestions?.filter((item) => extractor(item).search(regex) >= 0);
    };
    return (<View style={[styles.container, containerStyle]}>
      <View style={[styles.tagContainer, tagContainerStyle]}>
        {tags.map((a) => renderTagComponent(a))}
        <TextInput value={text} onKeyPress={onKeyPress} ref={inputRef} onChangeText={handleTextChange} style={[styles.input, inputStyle]} {...inputProps}/>
      </View>
      <View>
        <FlatList data={getSuggestions()} keyExtractor={(a) => extractor(a)} renderItem={renderSuggestionComponent} keyboardShouldPersistTaps="handled" style={[styles.list, flatListStyle]} {...flatListProps}/>
      </View>
    </View>);
};
const styles = StyleSheet.create({
    container: {
        zIndex: 2000,
        width: '100%',
    },
    tagContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    input: {
        flex: 1,
        minWidth: 100,
    },
    list: {
        maxHeight: 100,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },
});
AutocompleteTags.defaultProps = {
    parseChars: [',', ' ', ';', '\n'],
    allowCustomTags: true,
    suggestions: [],
};
export default AutocompleteTags;

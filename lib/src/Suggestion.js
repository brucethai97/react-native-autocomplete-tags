import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
const Suggestion = ({ label, textStyle, ...props }) => (<Pressable style={styles.container} {...props}>
    <Text style={[styles.label, textStyle]}>{label}</Text>
  </Pressable>);
const styles = StyleSheet.create({
    container: {
        paddingVertical: 6,
        paddingHorizontal: 3,
        backgroundColor: 'white',
        borderColor: '#262626',
        borderWidth: 0.5,
    },
    label: {
        color: '#262626',
    },
});
export default Suggestion;

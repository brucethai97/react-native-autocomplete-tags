import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
const Tag = ({ label, textStyle, ...props }) => (<Pressable style={({ pressed }) => [
    {
        opacity: pressed ? 0.7 : 1,
    },
    styles.container,
]} {...props}>
    <Text style={[styles.label, textStyle]}>{label}</Text>
  </Pressable>);
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E2E8F0',
        marginRight: 8,
        marginBottom: 4,
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 6,
    },
    label: {
        color: '#171923',
        fontSize: 14,
    },
});
export default Tag;

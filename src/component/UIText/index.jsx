import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

function UIText({ style = {}, size = 'label', weight = 'normal', children }) {
  return <Text style={[styles.text, style, styles[size], styles[weight]]}>{children}</Text>;
};

export default UIText;

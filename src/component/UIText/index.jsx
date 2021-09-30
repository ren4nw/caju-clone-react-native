import React from 'react';
import { Text } from 'react-native';
import styles, { colors, sizes, weight as WeightStyle, transform as TransformStyle } from './styles';

function UIText({ style = {}, color = 'white', size = 'label', transform = 'none', weight = 'normal', children }) {
  return (
    <Text
      style={[
        styles.text,
        style,
        colors[color],
        sizes[size],
        TransformStyle[transform],
        WeightStyle[weight],
      ]}
    >{children}</Text>
  );
};

export default UIText;

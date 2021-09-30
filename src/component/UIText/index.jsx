import React from 'react';
import { Text } from 'react-native';
import styles, { colors, sizes, weight as WeightStyle, transform as TransformStyle } from './styles';

function UIText({
  style = {},
  lines = undefined,
  color = 'white',
  size = 'label',
  weight = 'normal',
  transform = 'none',
  children,
}) {
  return (
    <Text
      numberOfLines={lines}
      style={[
        styles.text,
        style,
        sizes[size],
        WeightStyle[weight],
        colors[color],
        TransformStyle[transform],
    ]}>{children}</Text>
  );
};

export default UIText;

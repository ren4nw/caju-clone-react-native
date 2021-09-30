import React from 'react';
import { View } from 'react-native';
import UIText from '../UIText';
import styles from './styles';

function ExtractItem({ extract: { description = '', value = '0,00', date = '00/00/0000 - 00:00' } }) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}></View>
      <View style={styles.extractDetails}>
        <UIText size="medium" color="mediumgray" transform="uppercase">
          {description.length > 20 ? `${description.substr(0, 20)}...` : description}
        </UIText>
        <UIText size="small" color="gray">{date}</UIText>
      </View>
      <View style={styles.valueContainer}>
        <UIText size="medium" color="mediumgray">-R$ </UIText>
        <UIText size="medium" color="mediumgray" weight="bold">{value}</UIText>
      </View>
    </View>
  );
}

export default ExtractItem;

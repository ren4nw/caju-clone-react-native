import React from 'react';
import { View } from 'react-native';
import UIText from '../UIText';
import styles from './styles';

function UICard({ label, value = 0 }) {

  return (
    <View style={styles.container}>
      <View>
        <UIText size="small" style={styles.sign}>R$</UIText>
        <UIText size="small">{value}</UIText>
      </View>
      <UIText size="small" style={styles.label}>{label}</UIText>
    </View>
  );
}

export default UICard;

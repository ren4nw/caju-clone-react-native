import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import UIText from '../UIText';
import styles from './styles';

function UICard({ label, icon, background, value = '0,00' }) {

  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: background }]}>
      <View>
        <FontAwesome5 name={icon} style={styles.icon} />
      </View>
      <View>
        <UIText color="gray" size="small" style={styles.sign}>R$</UIText>
        <UIText size="label">{value}</UIText>
      </View>
      <UIText size="small" weight="bold" transform="uppercase">{label}</UIText>
    </TouchableOpacity>
  );
}

export default UICard;

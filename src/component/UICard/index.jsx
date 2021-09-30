import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import UIText from '../UIText';
import styles from './styles';

function UICard({ background = '#fff', icon = '', label, value = 0 }) {

  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: background }]}>
      <View>
        <FontAwesome5 name={icon} style={styles.icon} />
      </View>
      <View>
        <UIText color="gray" size="small">R$</UIText>
        <UIText size="label">0,00</UIText>
      </View>
      <UIText weight="bold" size="small" transform="uppercase">{label}</UIText>
    </TouchableOpacity>
  );
}

export default UICard;

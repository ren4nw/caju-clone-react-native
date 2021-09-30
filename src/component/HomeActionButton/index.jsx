import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import UIText from '../UIText';
import styles from './styles';

function HomeActionButton({ label = '', icon = '' }) {

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.iconLabel}>
        <View style={styles.iconContainer}>
          <FontAwesome5 name={icon} style={styles.icon} />
        </View>
        <UIText color="black" style={styles.label}>{label}</UIText>
      </View>
      <FontAwesome5 name="chevron-right" style={styles.chevron} />
    </TouchableOpacity>
  )
}

export default HomeActionButton;

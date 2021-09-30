import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import UIText from '../UIText';
import styles from './styles';

function HomeActionButton({ label = '', icon = '' }) {

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.labelIcon}>
        <View style={styles.iconContainer}>
          <FontAwesome name={icon} style={styles.icon} />
        </View>
        <UIText color="black" style={styles.label}>{label}</UIText>
      </View>
      <FontAwesome name="chevron-right" style={styles.chevron} />
    </TouchableOpacity>
  );
}

export default HomeActionButton;

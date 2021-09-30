import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import styles from './styles';

function TabIcon({ focused = false, icon = '' }) {

  return (
    <FontAwesome5 name={icon} style={[styles.icon, focused && { color: '#3d6fdb' }]} />
  );
}

export default TabIcon;

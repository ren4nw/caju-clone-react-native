import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';
import mock from '../../mock';
import UIText from '../UIText';
import styles from './styles';

const getCard = category => {
  const card = mock.cards.find(item => item.label === category);

  return card;
};

function ExtractItem({ description = '', date = '', value = '', category = '' }) {
  const card = getCard(category);

  return (
    <View style={styles.container}>
      <View style={[styles.iconContainer, { backgroundColor: card.color }]}>
        <FontAwesome5 name={card.icon} style={styles.icon} />
      </View>
      <View style={styles.extractDetails}>
        <UIText color="mediumgray" size="medium">{description.length > 20 ? `${description.substr(0, 20)}...` : description}</UIText>
        <UIText color="gray">{date}</UIText>
      </View>
      <UIText color="mediumgray" size="medium" weight="bold">- R$ {value}</UIText>
    </View>
  );
}

export default ExtractItem

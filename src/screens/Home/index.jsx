import React from 'react';
import { FlatList, View } from 'react-native';
import UICard from '../../component/UICard';
import UIText from '../../component/UIText';
import mock from '../../mock';
import styles from './styles';

function Home() {

  return (
    <View style={styles.container}>
      <UIText size="title">Oi, <UIText weight="bold" size="title">Renan</UIText></UIText>
      
      <View style={styles.card}>
        <FlatList
          data={mock.cards}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.label}
          renderItem={({ item }) => <UICard label={item.label} value={item.value} />}
        />
      </View>
    </View>
  );
}

export default Home;

import React from 'react';
import { FlatList, ScrollView, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import ExtractItem from '../../component/ExtractItem';
import HomeActionButton from '../../component/HomeActionButton';
import UICard from '../../component/UICard';
import UIText from '../../component/UIText';
import mock from '../../mock';
import styles from './styles';

function Home() {

  return (
    <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <UIText size="title" color="black">Oi, </UIText>
        <UIText size="title" color="black" weight="bold">Renan</UIText>
      </View>
      
      <View style={styles.card}>
        <FlatList
          data={mock.cards}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.label}
          renderItem={({ item }) => <UICard background={item.color} icon={item.icon} label={item.label} value={item.value} />}
        />
      </View>
      <View style={styles.container}>
        <View>
          <UIText color="black" size="label" weight="bold" transform="uppercase">Ações</UIText>
          <HomeActionButton label="Transferir saldo entre benefícios" icon="random" />
          <HomeActionButton label="Pagar boleto" icon="file" />
        </View>
        <View style={[styles.extractContainer, { flex: 1 }]}>
          <UIText color="black" size="label" weight="bold" transform="uppercase">Extrato geral</UIText>
          <TouchableOpacity>
            {mock.extract.slice(0, 2).map(item => (
              <ExtractItem key={`${item.description}.${item.date}`} extract={item} />
            ))}
            <FontAwesome name="chevron-down" style={styles.chevron} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default Home;

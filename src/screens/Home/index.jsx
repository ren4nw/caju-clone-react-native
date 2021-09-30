import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { FlatList, ScrollView, TouchableOpacity, View } from 'react-native';
import ExtractItem from '../../component/ExtractItem';
import HomeActionButton from '../../component/HomeActionButton';
import UICard from '../../component/UICard';
import UIText from '../../component/UIText';
import mock from '../../mock';
import styles from './styles';

function Home() {

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.headerContainer}>
        <UIText color="black" size="title">Oi, </UIText>
        <UIText color="black" weight="bold" size="title">Renan</UIText>
      </View>
      
      <View style={styles.card}>
        <FlatList
          data={mock.cards}
          horizontal
          contentContainerStyle={{ backgroundColor: '#fff' }}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.label}
          renderItem={({ item }) => <UICard label={item.label} icon={item.icon} background={item.color} />}
        />
      </View>
      <View style={styles.container}>
        <View>
          <UIText color="black" size="label" transform="uppercase" weight="bold">Ações</UIText>
          <HomeActionButton label="Transferir saldo entre benéficios" icon="random" />
          <HomeActionButton label="Pagar boleto" icon="file" />
        </View>
        <View style={styles.extractContainer}>
          <UIText color="black" size="label" weight="bold" transform="uppercase">Extrato geral</UIText>
          <TouchableOpacity>
            {mock.extract.splice(0, 2).map(item => (
              <ExtractItem
                key={`${item.description}.${item.date}`}
                description={item.description}
                date={item.date}
                value={item.value}
                category={item.category}
              />
            ))}
          </TouchableOpacity>
          <FontAwesome5 name="chevron-down" style={styles.chevron} />
        </View>
      </View>
    </ScrollView>
  );
}

export default Home;

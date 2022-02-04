import React from 'react';
import {SafeAreaView, StatusBar, FlatList, View} from 'react-native';
import UserHeader from '../components/UserHeader';
import MenuItem from '../components/MenuItem';
import {firtSection, secondSection} from '../utils/menu-itens';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  const renderSeparator = () => (
    <View
      style={{
        borderBottomColor: '#cccccc88',
        borderBottomWidth: 1,
        width: '90%',
        marginLeft: '5%',
        marginTop: '5%',
      }}
    />
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        marginTop: StatusBar.currentHeight,
        backgroundColor: '#fff',
      }}
    >
      <UserHeader />
      <FlatList
        scrollEnabled={false}
        keyExtractor={(item) => String(item.id)}
        numColumns={1}
        data={firtSection}
        ListFooterComponent={renderSeparator}
        renderItem={({item}) => (
          <MenuItem title={item.title} icon={item.icon_name} size={item.size} />
        )}
      />
      <FlatList
        scrollEnabled={false}
        style={{height: '30%'}}
        keyExtractor={(item) => String(item.id)}
        numColumns={1}
        data={secondSection}
        renderItem={({item}) => (
          <MenuItem title={item.title} icon={item.icon_name} size={item.size} />
        )}
      />
      <Footer />
    </SafeAreaView>
  );
};

export default Home;

import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {FontAwesome5} from '@expo/vector-icons';

const Footer: React.FC = () => {
  return (
    <View
      style={{
        bottom: 0,
        flexDirection: 'row',
        width: '100%',
        height: '10%',
      }}
    >
      <TouchableOpacity
        activeOpacity={0.5}
        style={{width: '25%', height: '100%', justifyContent: 'center', alignItems: 'center'}}
      >
        <Feather name="home" size={30} color="#a5b0e8" />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        style={{width: '25%', height: '100%', justifyContent: 'center', alignItems: 'center'}}
      >
        <FontAwesome5 name="chart-bar" size={30} color="#a5b0e8" />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        style={{width: '25%', height: '100%', justifyContent: 'center', alignItems: 'center'}}
      >
        <Feather name="mail" size={30} color="#a5b0e8" />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        style={{width: '25%', height: '100%', justifyContent: 'center', alignItems: 'center'}}
      >
        <Feather name="user" size={30} color="#607aef" />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

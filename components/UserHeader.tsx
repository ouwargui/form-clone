import React from 'react';
import {Text, View, Image} from 'react-native';
import {
  useFonts,
  PTSans_400Regular,
  PTSans_400Regular_Italic,
  PTSans_700Bold,
  PTSans_700Bold_Italic,
} from '@expo-google-fonts/pt-sans';

const UserHeader: React.FC = () => {
  const [fontsLoaded] = useFonts({
    PTSans_400Regular,
    PTSans_400Regular_Italic,
    PTSans_700Bold,
    PTSans_700Bold_Italic,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View
      style={{
        height: '18%',
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#cccccc88',
        borderBottomWidth: 1,
      }}
    >
      <View
        style={{
          width: 80,
          height: 80,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,
          elevation: 2,
          borderRadius: 10,
        }}
      >
        <Image
          style={{width: '100%', height: '100%', borderRadius: 10}}
          source={require('../assets/me.jpg')}
        />
      </View>
      <View style={{marginLeft: '5%'}}>
        <Text
          style={{color: '#002851', fontFamily: 'PTSans_700Bold', fontSize: 16, marginBottom: '4%'}}
        >
          Guilherme Santos D&apos;Alessandro
        </Text>
        <Text style={{color: '#526d87', fontFamily: 'PTSans_700Bold', fontSize: 14}}>
          Software Developer
        </Text>
      </View>
    </View>
  );
};

export default UserHeader;

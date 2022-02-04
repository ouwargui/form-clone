import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {FontAwesome5, Entypo} from '@expo/vector-icons';
import {
  useFonts,
  PTSans_400Regular,
  PTSans_400Regular_Italic,
  PTSans_700Bold,
  PTSans_700Bold_Italic,
} from '@expo-google-fonts/pt-sans';
import {useNavigation} from '@react-navigation/native';

interface MenuItemProps {
  title: string;
  icon: string;
  size: number;
}

const MenuItem: React.FC<MenuItemProps> = ({title, icon, size}) => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    PTSans_400Regular,
    PTSans_400Regular_Italic,
    PTSans_700Bold,
    PTSans_700Bold_Italic,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  const handleTouch = () => {
    if (title !== 'Personal Data') return;

    navigation.navigate('PersonalData' as never);
  };

  return (
    <TouchableOpacity
      onPress={() => handleTouch()}
      activeOpacity={0.5}
      style={{
        marginTop: '5%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        height: 50,
      }}
    >
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'flex-start',
          width: '25%',
        }}
      >
        <View
          style={{
            backgroundColor: '#f6f7fd',
            marginLeft: '30%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            width: '50%',
            borderRadius: 10,
          }}
        >
          <FontAwesome5 name={icon} size={size} color="#002851" />
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{color: '#002851', fontFamily: 'PTSans_700Bold', fontSize: 16}}>{title}</Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end', marginRight: '5%'}}>
        <Entypo name="chevron-small-right" size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
};

export default MenuItem;

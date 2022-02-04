import {View, SafeAreaView, ScrollView, KeyboardAvoidingView, Platform} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  useFonts,
  PTSans_400Regular,
  PTSans_400Regular_Italic,
  PTSans_700Bold,
  PTSans_700Bold_Italic,
} from '@expo-google-fonts/pt-sans';
import Input from '../components/Input';
import EditPicture from '../components/EditPicture';
import DatePicker from '../components/DatePicker';

const PersonalData: React.FC = () => {
  const navigation = useNavigation();
  useFonts({
    PTSans_400Regular,
    PTSans_400Regular_Italic,
    PTSans_700Bold,
    PTSans_700Bold_Italic,
  });

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Personal Data',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        color: '#3c5978',
        fontFamily: 'PTSans_700Bold',
      },
    });
  }, []);

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={100}
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={{flex: 1}}>
          <ScrollView>
            <EditPicture />
            <Input label="Your Name" />
            <DatePicker label="Date of Birth" />
            <Input label="Your Job" />
            <Input label="Monthly Income" />
            <Input label="Gender" />
            <View style={{marginBottom: 20}} />
          </ScrollView>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default PersonalData;

import React from 'react';
import {View, Text, TextInput} from 'react-native';

interface InputParams {
  label: string;
}

const Input: React.FC<InputParams> = ({label}) => {
  return (
    <View
      style={{
        width: '80%',
        marginTop: '10%',
        marginLeft: '10%',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}
    >
      <Text
        style={{marginLeft: '2%', color: '#5c768f', fontFamily: 'PTSans_700Bold', fontSize: 16}}
      >
        {label}
      </Text>
      <TextInput
        style={{
          backgroundColor: '#f0f3fd',
          width: '100%',
          height: 60,
          borderRadius: 10,
          borderColor: '#ccc',
          borderWidth: 1,
          paddingLeft: '5%',
          marginTop: '3%',
          color: '#325274',
          fontFamily: 'PTSans_700Bold',
          fontSize: 14,
        }}
      />
    </View>
  );
};

export default Input;

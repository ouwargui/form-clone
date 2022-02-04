import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';

interface DatePickerParams {
  label: string;
}

const DatePicker: React.FC<DatePickerParams> = ({label}) => {
  const [date, setDate] = useState('');

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
      <View
        style={{
          backgroundColor: '#f0f3fd',
          width: '100%',
          height: 60,
          borderRadius: 10,
          borderColor: '#ccc',
          borderWidth: 1,
          paddingLeft: '5%',
          marginTop: '3%',
          justifyContent: 'center',
        }}
      >
        <TextInputMask
          keyboardType="numeric"
          placeholder="DD/MM/YYYY"
          type={'datetime'}
          options={{
            format: 'DD/MM/YYYY',
          }}
          value={date}
          onChangeText={(text) => setDate(text)}
          style={{color: '#325274', fontFamily: 'PTSans_700Bold', fontSize: 14}}
        />
      </View>
    </View>
  );
};

export default DatePicker;

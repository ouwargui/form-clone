import React from 'react';
import {View, Image} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

const EditPicture: React.FC = () => {
  return (
    <View style={{marginTop: '10%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
      <Image
        style={{width: 100, height: 100, borderRadius: 10}}
        source={require('../../assets/me.jpg')}
      />
      <View
        style={{
          backgroundColor: '#d8defc',
          width: 40,
          justifyContent: 'center',
          alignItems: 'center',
          height: 40,
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 3,
          position: 'absolute',
          top: '75%',
          left: '55%',

          elevation: 5,

          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        }}
      >
        <FontAwesome name="camera" size={24} color="#778df8" />
      </View>
    </View>
  );
};

export default EditPicture;

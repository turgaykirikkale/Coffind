import React, {useState} from 'react';
import {View, TextInput, Text, Image, TouchableOpacity} from 'react-native';

function CFTextInput({
  onChangeText,
  value,
  containerStyle,
  textStyle,
  placeholder,
  secureTextEntry,
  type,
}) {
  const [controlShowPassword, setControlShowPassword] = useState(true);
  return (
    <View
      style={[
        containerStyle,
        {
          flexDirection: placeholder === 'Password' ? 'row' : null,
          height: 40,
          justifyContent: 'center',
        },
      ]}>
      <TextInput
        autoCorrect={false}
        autoCapitalize="none"
        value={value}
        onChangeText={changeValue => onChangeText && onChangeText(changeValue)}
        placeholder={placeholder}
        placeholderTextColor={'white'}
        style={[
          textStyle,
          {flex: placeholder === 'Password' ? 1 : 0, fontSize: 12},
        ]}
        secureTextEntry={controlShowPassword && secureTextEntry}
      />
      {placeholder === 'Password' ? (
        <View style={{justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() => setControlShowPassword(!controlShowPassword)}>
            <Image
              style={{
                width: 20,
                height: 20,
                tintColor: 'white',
              }}
              source={
                !controlShowPassword
                  ? require('../../../Assets/Icons/eyeIcon.png')
                  : require('../../../Assets/Icons/eyeSlash3.png')
              }
            />
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
}

export default CFTextInput;

import React from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';

function CFLoginAndRegisterModal({modalVisible, text, setModalVisible, error}) {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <TouchableOpacity
        onPress={() => setModalVisible && setModalVisible()}
        activeOpacity={0.96}
        style={{
          flex: 1,
          backgroundColor: 'rgba(52, 52, 52, 0.8)',
          justifyContent: 'center',
        }}>
        <View
          style={{
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            height: 100,
            backgroundColor: 'white',
            marginHorizontal: 18,
          }}>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                color: error ? 'red' : 'green',
                letterSpacing: 0.8,
                fontSize: 10,
              }}>
              {text}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

export default CFLoginAndRegisterModal;

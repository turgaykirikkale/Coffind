import React from 'react';
import {View, Text, Modal, TouchableOpacity, Dimensions} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

function CFQrModal({modalVisible, setModalVisible}) {
  const windowWidth = Dimensions.get('window').width;

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
            height: windowWidth / 1.1,
            backgroundColor: 'white',
            marginHorizontal: 18,
          }}>
          <View style={{alignItems: 'center'}}>
            <QRCode value="http://awesome.link.qr" size={windowWidth / 1.13} />
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

export default CFQrModal;

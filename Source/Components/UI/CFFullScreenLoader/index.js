import React from 'react';
import {View, Text, Modal, ActivityIndicator} from 'react-native';

function CFFullScreenLoader({modalVisible}) {
  return (
    <Modal visible={modalVisible}>
      <ActivityIndicator size="large" color="#00ff00" />
    </Modal>
  );
}

export default CFFullScreenLoader;

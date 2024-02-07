import React from 'react';
import { Platform, } from 'react-native';
import { IconButton } from 'react-native-paper';

export default function HamburgerIcon({ navigation, ...iconProps }) {
  return (
    <IconButton
      icon='menu'
      onPress={() => navigation.openDrawer()}
      size={24}
    />
  );
}

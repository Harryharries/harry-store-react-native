import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import { Menu } from 'react-native-paper';
import I18n from 'i18n-js';

export default AbpBottomSheet = React.forwardRef(
  ({ onSnap, onClose, headerText, editOnPress, removeOnPress }, ref) => {
    const sheetRef = useRef(null);

    const handleSnap = index => {
      onSnap(index);
    };

    const handleClose = () => {
      if (onClose) {
        onClose();
      }
    };

    React.useImperativeHandle(ref, () => ({
      openBottomSheet: () => {
        sheetRef.current.snapTo(2);
      },
      closeBottomSheet: () => sheetRef.current.snapTo(-1),
    }));

    return (
      <BottomSheet
        ref={sheetRef}
        snapPoints={[200, 200, 0]}
        renderHeader={() => (
          <View style={styles.header}>
            <Text style={styles.header.text}>{headerText}</Text>
          </View>
        )}
        renderContent={() => (
          <View style={styles.content}>
            <Menu.Item
              key={0}
              leadingIcon="pencil"
              title={I18n.t('AbpUi::Edit')}
              onPress={() => editOnPress()}
            />

            <Menu.Item
              key={1}
              leadingIcon="delete"
              title={I18n.t('AbpUi::Delete')}
              onPress={() => removeOnPress()}
            />
          </View>
        )}
        onSnap={handleSnap}
        onClose={handleClose}
        enabledContentGestureInteraction={false}
        enabledBottomClamp={true}
        springConfig={{ stiffness: 1000, damping: 500, mass: 5 }}
      />
    );
  },
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    padding: 16,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    text: {
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 'bold',
    },
  },
  content: {
    backgroundColor: '#fff',
    padding: 16,
    height: '100%',
  },
});

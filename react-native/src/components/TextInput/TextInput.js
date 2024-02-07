import React from 'react';
import { TextInput } from 'react-native-paper';
import i18n from 'i18n-js';

export default AbpTextInput = React.forwardRef(
  (
    {
      mode,
      formik,
      control,
      returnKeyType,
      onSubmitEditing,
      onChangeText,
      onBlur,
      value = null,
      autoCapitalize,
      label,
      styles,
      ...props
    },
    ref,
  ) => {
    React.useImperativeHandle(ref, () => ({}));
    return (
      <TextInput
        mode={mode || 'flat'}
        ref={ref}
        error={!!formik.errors[control] && !!formik.touched[control]}
        returnKeyType={returnKeyType || 'next'}
        onSubmitEditing={onSubmitEditing}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value || formik.values[control]}
        autoCapitalize={autoCapitalize || 'none'}
        label={i18n.t(label)}
        style={styles}
        {...props}
      />
    );
  },
);

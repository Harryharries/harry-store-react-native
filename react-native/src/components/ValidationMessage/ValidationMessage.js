import i18n from 'i18n-js';
import React, { forwardRef } from 'react';
import { HelperText } from 'react-native-paper';

const ValidationMessage = ({ children, ...props }) =>
  children ? (
    <HelperText type="error" {...props} visible={!!children}>
      {i18n.t(children)}
    </HelperText>
  ) : null;

const Forwarded = forwardRef((props, ref) => <ValidationMessage {...props} forwardedRef={ref} />);

export default Forwarded;

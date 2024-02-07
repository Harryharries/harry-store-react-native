import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { getUserById, createUser, updateUser } from '../../api/IdentityAPI';
import LoadingActions from '../../store/actions/LoadingActions';
import { createLoadingSelector } from '../../store/selectors/LoadingSelectors';
import { connectToRedux } from '../../utils/ReduxConnect';
import CreateUpdateUserForm from './CreateUpdateUserForm';
import { getUserRoles } from '../../api/IdentityAPI';

function CreateUpdateUserScreen({ navigation, route, startLoading, clearLoading }) {
  const [user, setUser] = useState();
  const [userRoles, setUserRoles] = useState([]);
  const userId = route.params?.userId;

  useEffect(() => {
    if (userId) {
      Promise.all([getUserById(userId), getUserRoles(userId)]).then(
        ([userData = {}, userRolesData = []]) => {
          setUser(userData);
          setUserRoles(userRolesData);
        },
      );
    }
  }, []);

  const submit = data => {
    startLoading({ key: 'saveUser' });

    (data.id ? updateUser(data, userId) : createUser(data))
      .then(() => navigation.goBack())
      .finally(() => clearLoading());
  };

  const renderForm = () => (
    <CreateUpdateUserForm editingUser={user} ownedRoles={userRoles} submit={submit} />
  );

  if ((userId && user) || !userId) {
    return renderForm();
  }

  return null;
}

CreateUpdateUserScreen.propTypes = {
  startLoading: PropTypes.func.isRequired,
  clearLoading: PropTypes.func.isRequired,
};

export default connectToRedux({
  component: CreateUpdateUserScreen,
  stateProps: state => ({ loading: createLoadingSelector()(state) }),
  dispatchProps: {
    startLoading: LoadingActions.start,
    clearLoading: LoadingActions.clear,
  },
});

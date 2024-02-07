import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddIcon from '../components/AddIcon/AddIcon';
import CancelButton from '../components/CancelButton/CancelButton';
import HamburgerIcon from '../components/HamburgerIcon/HamburgerIcon';
import { LocalizationContext } from '../contexts/LocalizationContext';
import CreateUpdateTenantScreen from '../screens/CreateUpdateTenant/CreateUpdateTenantScreen';
import TenantsScreen from '../screens/Tenants/TenantsScreen';

const Stack = createNativeStackNavigator();

export default function TenantsStackNavigator() {
  const { t } = React.useContext(LocalizationContext);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Navigator initialRouteName="Tenants">
        <Stack.Screen
          name="Tenants"
          component={TenantsScreen}
          options={({ navigation }) => ({
            title: t('Saas::Tenants'),
            headerLeft: () => <HamburgerIcon navigation={navigation} marginLeft={-3} />,
            headerRight: () => (
              <AddIcon onPress={() => navigation.navigate('CreateUpdateTenant')} />
            ),
          })}
        />
        <Stack.Screen
          name="CreateUpdateTenant"
          component={CreateUpdateTenantScreen}
          options={({ navigation, route }) => ({
            title: t(route.params?.tenantId ? 'Saas::EditTenant' : 'Saas::NewTenant'),
            headerRight: () => <CancelButton onPress={() => navigation.navigate('Tenants')} />,
          })}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
}

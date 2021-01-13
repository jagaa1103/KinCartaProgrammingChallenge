import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ContactListPage from "./components/ContactListPage";
import ContactDetailPage from "./components/ContactDetailPage";

const Stack = createStackNavigator();


const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ContactList"
            component={ContactListPage}
            options={{ title: 'Contacts' }}
          />
          <Stack.Screen
            name="ContactDetail"
            component={ContactDetailPage}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FeedScreen from './screens/FeedScreen';
import PostDetailScreen from './screens/PostDetailScreen';
import { Provider, createStore } from 'jotai';

const Stack = createNativeStackNavigator();
const store = createStore()
function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator initialRouteName="feed">
          <Stack.Screen
            name="feed"
            component={FeedScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="post-detail"
            component={PostDetailScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>

  );
}

export default App;

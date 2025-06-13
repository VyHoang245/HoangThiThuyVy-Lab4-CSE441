import { Tabs } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Provider } from 'react-redux';
import { store } from '../store/store';

export default function Layout() {
  return (
    <Provider store={store}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#fff',
          tabBarStyle: { backgroundColor: 'blue' },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{ tabBarIcon: () => <Icon name="list" color="white" size={24} /> }}
        />
        <Tabs.Screen
          name="favorites"
          options={{ tabBarIcon: () => <Icon name="star" color="white" size={24} /> }}
        />
        <Tabs.Screen
          name="contact-detail"
          options={{ tabBarIcon: () => <Icon name="star" color="white" size={24} />, href: null }}
        />
      </Tabs>
    </Provider>
  );
}

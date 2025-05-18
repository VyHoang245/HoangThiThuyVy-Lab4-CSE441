import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import Contacts from "./FileContact";
import ProfileContact from "./ProfileContact";
const Stack = createStackNavigator();
export default function Index() {
  return (
    <TabNavigator />
  );
}

export function ContactScreen() {
  return (
    <Stack.Navigator
      initialRouteName="Contacts"
      screenOptions={
        {
          headerShown: true
        }
      }>
      <Stack.Screen name="Contacts" component={Contacts}
        options={{ title: "Contacts" }} />
      <Stack.Screen name="ProfileContact" component={ProfileContact}
        options={{ title: "Profile Contact" }} />
    </Stack.Navigator>
  )

}

const Tab = createBottomTabNavigator();
export function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="ContactScreens">
      <Tab.Screen name="Contacts" component={ContactScreen}
      // options={{ tabBarIcon: 'format-list-bulleted', }}
      />
    </Tab.Navigator>
  )
}

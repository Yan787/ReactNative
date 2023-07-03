import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./HomeScreen";
import { FullPost } from "./FullPost";

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Новости" }}
        />
        <Stack.Screen
          name="FullPost"
          component={FullPost}
          options={{ title: "Статья" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

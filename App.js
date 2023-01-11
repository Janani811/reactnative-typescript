import React from "react";
// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider } from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Provider>
        <Stack.Navigator
          initialRouteName="Index"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#FFB100",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen
            name="Index"
            component={IndexScreen}
            options={({ navigation }) => ({
              title: "Blogs",

              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                  <Feather name="plus" size={30} />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="Show"
            component={ShowScreen}
            options={({ navigation, route }) => ({
              headerRight: () => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.push("Edit", { id: route.params.id })
                  }
                >
                  <EvilIcons name="pencil" size={35} />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen name="Create" component={CreateScreen} />
          <Stack.Screen name="Edit" component={EditScreen} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

export default App;

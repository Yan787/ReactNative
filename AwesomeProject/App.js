import { View, Text, Alert, FlatList, ActivityIndicator } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import axios from "axios";

import Post from "./components/Post";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState();

  const fetchPosts = () => {
    setIsLoading(true);
    axios
      .get("https://64865e31a795d24810b7e00b.mockapi.io/items")
      .then(({ data }) => {
        setItems(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Ошибка", "не удалось получить статьи");
      })
      .finally(setIsLoading(false));
  };

  useEffect(() => fetchPosts, []);

  if (true) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" />
        <Text style={{ marginTop: 10 }}>Загруска...</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <Post
            imgeUrl={item.imageUrl}
            title={item.title}
            data={item.createdAt}
          />
        )}
      />
      <StatusBar style="light" />
    </View>
  );
};
export default App;

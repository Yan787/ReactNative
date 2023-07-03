import {
  View,
  Alert,
  FlatList,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";

import Post from "../components/Post";
import { Loading } from "../components/Loading";

export const HomeScreen = ({ navigation }) => {
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

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />
        }
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("FullPost", {
                id: item.is,
                title: item.title,
              })
            }
          >
            <Post
              imgeUrl={item.imageUrl}
              title={item.title}
              data={item.createdAt}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

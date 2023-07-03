// import axios from "axios";
// import { View, Text } from "react-native";
// import { useEffect, useState } from "react";
// import styled from "styled-components/native";
// import { Loading } from "../components/Loading";

// const PostImage = styled.Image`
//   border-radius: 10px;
//   width: 100%;
//   height: 250px;
//   margin-bottom: 20px;
// `;

// const PostText = styled.Text`
//   font-size: 18px;
//   line-height: 24px;
// `;

// export const FullPost = ({ route, navigation }) => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [dataA, setData] = useState();
//   const { id, title } = route;
//   useEffect(() => {
//     setIsLoading(true);
//     axios
//       .get(`https://64865e31a795d24810b7e00b.mockapi.io/items${id}`)
//       .then(({ data }) => {
//         setData(dataA);
//       })
//       .catch((err) => {
//         console.log(err);
//         Alert.alert("Ошибка", "не удалось получить статью");
//       })
//       .finally(setIsLoading(false));
//   }, []);

//   if (isLoading) {
//     return <Loading />;
//   }

//   return (
//     <View style={{ padding: 20 }}>
//       <PostImege
//         source={{
//           url: data.imageUrl,
//         }}
//       />
//       <PostText>{dataA.text}</PostText>
//     </View>
//   );
// };

import axios from "axios";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import { useEffect, useState } from "react";

const PostImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`;
const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;

export const FullPost = ({ route, navigation }) => {
  const [dataPost, setData] = useState();

  const { id, title } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title,
    });
    axios
      .get(`https://64865e31a795d24810b7e00b.mockapi.io/items/2`)
      .then(({ dataPost }) => {
        setData(dataPost);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Ошибка", "Не удалось получить статью");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <View>
      <PostImage source={{ uri: dataPost.imageUrl }} />
      {/* <PostText>{}</PostText> */}
    </View>
  );
};

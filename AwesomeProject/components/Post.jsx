import React from "react";

import styled from "styled-components/native";

const PostView = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;
const PostImege = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  margin-right: 12px;
`;
const PostDetails = styled.View`
  flex: 1;
  justify-content: center;
`;
const PostTitke = styled.Text`
  font-size: 17px;
  font-weight: 700;
`;
const PostData = styled.Text`
  font-size: 17px;
  margin-top: 2px;
  color: rgba(0, 0, 0, 0.4);
`;

const Post = ({ imgeUrl, title, data }) => {
  return (
    <PostView>
      <PostImege
        source={{
          uri: imgeUrl,
        }}
      />
      <PostDetails>
        <PostTitke>{title}</PostTitke>
        <PostData>{data}</PostData>
      </PostDetails>
    </PostView>
  );
};

export default Post;

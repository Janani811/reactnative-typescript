import React, { useContext } from "react";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";
import { View, StyleSheet } from "react-native";

const EditScreen = ({ navigation, route }: any) => {
  const id = route.params.id;

  const { state, editBlogPost }: any = useContext(Context);
  const blogPost = state.find((blogPost: { id: any }) => blogPost.id === id);

  return (
    <View style={styles.layout}>
      <BlogPostForm
        initialValues={{ title: blogPost.title, content: blogPost.content }}
        onSubmit={(title: any, content: any) => {
          editBlogPost(id, title, content, () => navigation.pop());
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    marginTop: 40,
    paddingHorizontal: 20,
  },
});

export default EditScreen;

import React, { useContext } from "react";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";
import { View, StyleSheet } from "react-native";

const CreateScreen = ({ navigation }: any) => {
  const { addBlogPost }: any = useContext(Context);
  return (
    <View style={styles.layout}>
      <BlogPostForm
        onSubmit={(title: any, content: any) => {
          addBlogPost(title, content, () => navigation.navigate("Index"));
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

export default CreateScreen;

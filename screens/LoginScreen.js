import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";

const LoginScreen = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}>
      <View>
        <Image
          style={{ width: 150, height: 100 }}
          source={{
            uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png",
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});

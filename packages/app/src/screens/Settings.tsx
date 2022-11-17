import { View, StyleSheet, Text, Button } from "react-native";
import React from "react";
import { useRouter } from "solito/router";

export const SettingsScreen = () => {
  const { back } = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings</Text>
      <Button title="Back" onPress={back} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#111",
  },
  text: {
    color: "#fff",
  },
});

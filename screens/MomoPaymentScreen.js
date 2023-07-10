import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";
export default function MomoPaymentScreen({ navigation, route }) {
  const { payUrl } = route.params;
  console.log(payUrl);
  checkUrlState = (url) => {
    if (url.includes("specific/part/of/your/url")) {
      console.log("checked");
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <WebView
          source={{ uri: payUrl }}
          onLoad={console.log("loaded")}
          onNavigationStateChange={(state) => this.checkUrlState(state.url)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});

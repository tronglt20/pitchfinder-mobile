import { Provider } from "react-redux";
import { StyleSheet, SafeAreaView, View } from "react-native";
import Store from "./stores/index";
import AppContainer from "./container/AppContainer";

export default function App() {
  return (
    <Provider store={Store}>
      <View style={styles.rootScreen}>
        <SafeAreaView style={styles.rootScreen}>
          {/* Content here */}
          <AppContainer />
        </SafeAreaView>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});

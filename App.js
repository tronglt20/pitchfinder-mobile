import { Provider } from "react-redux";
import { StyleSheet, SafeAreaView, View } from "react-native";
import store from "./stores/index";
import AppContainer from "./container/AppContainer";
import { AppNavigation } from "./navigation/appNavigation";
import { NativeWindStyleSheet } from "nativewind";
NativeWindStyleSheet.setOutput({
	default: "native",
});

export default function App() {
	return (
		<Provider store={store}>
			<View style={styles.rootScreen}>
				<AppNavigation />
			</View>
		</Provider>
	);
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
	},
});

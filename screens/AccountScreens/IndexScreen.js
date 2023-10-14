import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Button from "../../components/Button";
import OrderHistory from "../../components/OrderHistory";
import Background from "../../components/Background";
import { useDispatch, useSelector } from "react-redux";
import { AuthActions } from "../../stores/AuthReducer";
import { GetOrdersAPI } from "../../services/OrderService";
import AsyncStorage from "@react-native-async-storage/async-storage";

const IndexScreen = ({ navigation }) => {
	const userData = useSelector((state) => state.auth.user);
	const [orderHistoryData, setOrderHistoryData] = useState(null);
	const [shouldRender, setShouldRender] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		var request = GetOrdersAPI();
		request
			.then((response) => {
				if (response.status == 200) {
					setOrderHistoryData(response.data);
				} else {
					setIsAuth(false);
				}
			})
			.finally(() => {
				setShouldRender(true);
			});
	}, []);

	const handleLogout = () => {
		AsyncStorage.removeItem("accessToken");
		dispatch(AuthActions.logout());
		navigation.navigate("LoginScreen");
	};

	if (!shouldRender) {
		return null;
	}

	return (
		<Background>
			<View style={styles.container}>
				{/* User Information */}
				<View style={styles.userInfo}>
					<Text style={styles.userName}>{userData.name.split("@")[0]}</Text>
					<Text style={styles.userEmail}>{userData.email}</Text>
				</View>

				{/* Order History */}
				<OrderHistory orderHistoryData={orderHistoryData} />

				<Button style={styles.btn} title="Logout" onPress={handleLogout} />
			</View>
		</Background>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		paddingTop: 300,
	},
	avatarContainer: {
		borderWidth: 2,
		borderColor: "white",
		borderRadius: 100,
		overflow: "hidden",
	},
	avatar: {
		width: 100,
		height: 100,
		borderRadius: 50,
	},
	userInfo: {
		alignItems: "center",
	},
	userName: {
		fontSize: 20,
		fontWeight: "bold",
	},
	userEmail: {
		fontSize: 16,
		color: "gray",
	},
	btn: {
		color: "white",
		width: 200,
		height: 50,
		borderRadius: 10,
		backgroundColor: "red",
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 300,
	},
});

export default IndexScreen;

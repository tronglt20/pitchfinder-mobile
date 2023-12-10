import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import OrderHistory from "../../components/OrderHistory";
import Background from "../../components/Background";
import { useDispatch, useSelector } from "react-redux";
import { AuthActions } from "../../stores/AuthReducer";
import { GetOrdersAPI } from "../../services/OrderService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ArrowLeftOnRectangleIcon as LogoutIconOutline } from "react-native-heroicons/outline";
import { CurrentUserAPI } from "../../services/IAMService";

const IndexScreen = ({ navigation }) => {
	const [user, setUser] = useState({
		name: "",
		email: "",
	});
	const [orderHistoryData, setOrderHistoryData] = useState([]);
	const dispatch = useDispatch();

	const getUserData = async () => {
		try {
			const response = await CurrentUserAPI();
			if (response.status === 200) {
				setUser(response.data);
			}
		} catch {
			console.log("Error while taking user data");
		}
	};

	const getOrderData = async () => {
		try {
			const response = await GetOrdersAPI();
			if (response.status === 200) {
				setOrderHistoryData(response.data);
			}
		} catch {
			console.log("Error while taking order history");
		}
	};

	useEffect(() => {
		getUserData();
		getOrderData();
	}, []);

	const handleLogout = async () => {
		await AsyncStorage.clear();
		dispatch(AuthActions.logout());
		navigation.navigate("LoginScreen");
	};

	return (
		<Background>
			<View className="h-screen">
				<Text className="text-center text-3xl font-bold text-primary">
					User Profile
				</Text>
				<View className="flex justify-center items-center">
					<View className="mb-5 w-24 h-24 shadow-lg rounded-full">
						<Image
							className="w-full h-full rounded-full"
							source={require("../../assets/user.webp")}
						/>
					</View>
					<Text className="font-bold text-xl">{user.name.split("@")[0]}</Text>
					<Text className="text-lg">{user.email}</Text>
				</View>
				<OrderHistory orderHistoryData={orderHistoryData} />
				<View className="absolute top-[-10px] w-full mt-2">
					<TouchableOpacity
						onPress={handleLogout}
						className="flex self-end items-center w-12 p-2 mr-2 rounded-full bg-red-500 shadow-sm"
					>
						<LogoutIconOutline size="30" color="#ffffff" />
					</TouchableOpacity>
				</View>
			</View>
		</Background>
	);
};

export default IndexScreen;

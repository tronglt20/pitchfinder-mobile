import React from "react";
import { View, Text, FlatList } from "react-native";

const statusEnums = {
	1: "Pending",
	2: "Succesed ",
	3: "Failed",
	4: "Canceled",
};

const OrderHistory = ({ orderHistoryData }) => {
	const formateDate = (createAt) => {
		const date = new Date();
		return date.toDateString(createAt);
	};
	return (
		<View className="h-screen">
			<Text className="ml-2 text-2xl font-bold text-primary">
				Order History
			</Text>
			{orderHistoryData.length === 0 ? (
				<View className="w-fit mx-2 mt-5 border border-primary">
					<Text className="text-2xl text-center mt-20 h-[350px]">
						Is empty!
					</Text>
				</View>
			) : (
				<View className="w-fit">
					<FlatList
						data={orderHistoryData}
						keyExtractor={(item) => item.orderId}
						renderItem={({ item }) => (
							<View
								key={item.orderId}
								className="w-[95%] rounded border p-4 bg-secondary mt-2 mx-2 flex flex-row justify-between"
							>
								<Text className="text-white font-bold">
									Date: {formateDate(item.createdOn)}
								</Text>
								<Text className="text-white font-bold">
									{statusEnums[item.status]}
								</Text>
								<Text className="text-primary font-bold">
									Total: {item.price}vnd
								</Text>
							</View>
						)}
					/>
				</View>
			)}
		</View>
	);
};

export default OrderHistory;

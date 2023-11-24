import React from "react";
import Background from "../../components/Background";
import { Text, Card, Title } from "react-native-paper";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { StarIcon as StarIconSolid } from "react-native-heroicons/solid";

import BackButton from "../../components/BackButton";
import { theme } from "../../core/theme";

export default function PitchsScreen({ navigation }) {
	const pitches = useSelector((state) => state.pitch.pitches);
	console.log(pitches);

	const goBack = () => {
		navigation.navigate("FilterOptionScreen");
	};

	const renderPitchItem = (pitch) => {
		const handlePitchPress = () => {
			navigation.navigate("PitchDetailScreen", { pitch });
		};

		return (
			<TouchableOpacity
				className="h-fit"
				key={pitch.storeId}
				onPress={handlePitchPress}
			>
				<View className="w-[98%] h-[300px] mx-1 p-2 bg-white rounded-2xl shadow-md">
					<Card.Cover
						source={
							pitch.backgroundUrl === null
								? require("../../assets/pitchImage.png")
								: pitch.backgroundUrl
						}
						className="rouded-lg h-[200px]"
					/>
					<Card.Content className="py-2">
						<View className="flex flex-row justify-between items-center">
							<Title className="font-bold text-lg text-primary">
								{pitch.name}
							</Title>
							<View className="flex flex-row justify-center items-center w-10 h-10 bg-secondary rounded-full">
								<StarIconSolid size="15" color={theme.colors.primary} />
								<Text className="text-xs text-primary">{`${pitch.rating}/5`}</Text>
							</View>
						</View>
						<View className="flex flex-row justify-between items-center">
							<Text
								className="text-lg text-secondary"
								numberOfLines={1}
								ellipsizeMode="tail"
							>
								{pitch.address.length > 100
									? `${pitch.address.substring(0, 100)}...`
									: pitch.address === ""
									? "Da nang"
									: pitch.address}
							</Text>
							<Text className="text-lg  text-secondary">{`${pitch.price}vnđ/hour`}</Text>
						</View>
					</Card.Content>
				</View>
			</TouchableOpacity>
		);
	};

	return (
		<Background>
			<BackButton goBack={goBack} />
			<ScrollView className="absolute z-1 top-3 w-full flex gap-2">
				<Text className="text-2xl self-center text-primary font-bold">
					Suitable Pitchs
				</Text>
				<View className="h-screen mt-5 z-0">
					{pitches.length > 0 ? (
						pitches.map(renderPitchItem)
					) : (
						<Text>Not Found</Text>
					)}
				</View>
			</ScrollView>
		</Background>
	);
}

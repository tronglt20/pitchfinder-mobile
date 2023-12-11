import React, { useState } from "react";
import Background from "../../components/Background";
import CalenderPicker from "../../components/CalenderPicker";
import TimePicker from "../../components/TimePicker";
import PitchTypePicker from "../../components/PitchTypePicker";
import { useDispatch } from "react-redux";
import { View, Alert, Text, TouchableOpacity } from "react-native";
import { FilterStoresAPI } from "../../services/PitchService";
import { PitchActions } from "../../stores/PitchReducer";
import { MagnifyingGlassIcon as SearchIconOutline } from "react-native-heroicons/outline";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthActions } from "../../stores/AuthReducer";

export default function FilterOptionScreen({ navigation }) {
	const dispatch = useDispatch();

	const [selectedDate, setSelectedDate] = useState(null);
	const [selectedTime, setSelectedTime] = useState({
		startTime: null,
		endTime: null,
	});
	const [selectedPitchType, setSelectedPitchType] = useState(null);

	const validateForm = () => {
		let missingFields = [];

		if (!selectedPitchType) {
			missingFields.push("Pitch Type");
		}
		if (!selectedDate) {
			missingFields.push("Date");
		}

		return missingFields;
	};

	const handleSearch = async () => {
		const missingFields = validateForm();

		if (missingFields.length > 0) {
			const missingFieldsMessage = `Please fill in the following field(s): ${missingFields.join(
				", "
			)}`;
			Alert.alert(missingFieldsMessage);
			return;
		}

		var response = await FilterStoresAPI(
			selectedPitchType,
			`${selectedTime.startTime}:00:00`,
			`${selectedTime.endTime}:00:00`,
			selectedDate
		);

		if (response.status == 200) {
			dispatch(PitchActions.setPitches(response.data));
			dispatch(PitchActions.setSelectedPitchType(selectedPitchType));
			dispatch(PitchActions.setSelectedDate(selectedDate));
			dispatch(PitchActions.setSelectedTime(selectedTime));

			navigation.navigate("PitchsScreen");
		} else {
			console.log(`error`);
		}
	};

	return (
		<Background>
			<View className="mt-5 h-full">
				<Text className="mb-5 font-bold text-2xl text-center text-primary pb-2">
					Pitch Finder
				</Text>
				<CalenderPicker onSelect={setSelectedDate} />
				<PitchTypePicker onSelect={setSelectedPitchType} />
				<TimePicker onSelect={setSelectedTime} />
				<View className="absolute top-[-20px] right-[10px] w-full mt-2">
					<TouchableOpacity
						onPress={handleSearch}
						className="flex self-end items-center w-12 p-2 rounded-full bg-primary shadow-sm "
					>
						<SearchIconOutline size="30" color="#ffffff" />
					</TouchableOpacity>
				</View>
			</View>
		</Background>
	);
}

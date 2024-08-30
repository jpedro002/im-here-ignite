import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

interface LineNamePeopleWithDeleteButtonProps {
	text: string
	onRemove: () => void
}

export const LineNamePeopleWithDeleteButton = ({
	text,
	onRemove,
}: LineNamePeopleWithDeleteButtonProps) => {
	return (
		<View className="flex-row items-center w-full mb-4">
			<Text className="flex-1 text-white bg-[#1F1E25] p-3 rounded-lg mr-2">
				{text}
			</Text>

			<TouchableOpacity
				className="w-12 h-12 bg-red-500 rounded-lg justify-center items-center"
				onPress={onRemove}
			>
				<Text className="text-white text-xl">X</Text>
			</TouchableOpacity>
		</View>
	)
}

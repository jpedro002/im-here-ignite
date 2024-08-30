import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

interface FormType {
	people: string
}

interface FormCreatePeopleProps {
	onSubmit: (data: FormType) => void
}

export const FormCreatePeople = ({ onSubmit }: FormCreatePeopleProps) => {
	const {
		control,
		handleSubmit,
		reset,
		setError,
		formState: { errors },
	} = useForm<FormType>()

	return (
		<View className="mt-8">
			<View className="flex-row items-center w-full">
				<Controller
					control={control}
					name="people"
					defaultValue=""
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							className="flex-1 border border-transparent focus:border-gray-300 rounded-lg p-3 mr-2 bg-[#1F1E25] text-white"
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
							placeholderTextColor="#6b6b6b"
							placeholder="Digite algo..."
						/>
					)}
				/>

				<TouchableOpacity
					className="w-12 h-12 bg-green-500 rounded-full justify-center items-center"
					onPress={handleSubmit((data) => {
						if (data.people.trim()) {
							onSubmit(data)
							reset()
						} else {
							setError('people', {
								type: 'manual',
								message: 'O campo é obrigatório',
							})
						}
					})}
				>
					<Text className="text-white text-2xl">+</Text>
				</TouchableOpacity>
			</View>
			{errors.people && (
				<Text className="text-red-500 mt-4">O campo é obrigatório</Text>
			)}
		</View>
	)
}

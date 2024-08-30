import { FormCreatePeople } from '@/components/FormCreatePeople'
import { LineNamePeopleWithDeleteButton } from '@/components/LineNamePeopleWithDeleteButton'
import constants from 'expo-constants'
import { useState } from 'react'
import { SafeAreaView, Text, View } from 'react-native'

const { statusBarHeight } = constants

export default function HomeScreen() {
	const [people, setPeople] = useState<string[]>([])

	const onSubmit = (data: { people: string }) => {
		setPeople((prev) => [...prev, data.people])
	}

	const handleRemovePeople = (person: string) => {
		const filterPeoples = people.filter((p) => p !== person)

		setPeople(filterPeoples)
	}

	return (
		<SafeAreaView
			className="flex-1 bg-[#131016] p-6"
			style={{
				paddingTop: 24 + statusBarHeight,
			}}
		>
			<View className="">
				<Text className="text-2xl font-bold text-white">Nome do Evento</Text>
				<Text className="text-base font-bold text-[#6b6b6b]">
					terça-feira, 29 de agosto de 2024
				</Text>
			</View>
			<FormCreatePeople onSubmit={onSubmit} />
			<View className="mt-8">
				{people.map((person) => (
					<LineNamePeopleWithDeleteButton
						text={person}
						onRemove={() => handleRemovePeople(person)}
						key={person}
					/>
				))}
			</View>
			{people.length === 0 && (
				<View className="flex-1  items-center">
					<Text className="text-white">Nenhuma pessoa cadastrada</Text>
				</View>
			)}
		</SafeAreaView>
	)
}

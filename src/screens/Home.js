import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function Home() {
	return (
		<View style={style.container}>
			<Text style={style.mainText}>Todays Appointments</Text>
			<Text style={style.mainText}>Calendar</Text>
		</View>
	)
}

const style = StyleSheet.create({
	container: {
	  marginTop: 10,
	  padding: 10
	},
	mainText: {
		fontSize: 30,
		textAlign: 'center',
	}
  })
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../Colors/colors';

export default class Header extends Component {
	render() {
		const { leftButtonIcon, leftButtonAction, rightButtonIcon, rightButtonAction, title } = this.props;

		return (
			<SafeAreaView style={{ backgroundColor: Colors.white, }}>
				<View style={{ height: 44, backgroundColor: Colors.white }}>
					<StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
					<View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
						<View style={styles.iconButtonContainer}>
							{leftButtonIcon && leftButtonAction && (
								<TouchableOpacity style={styles.iconButton} onPress={leftButtonAction}>
									<Image source={leftButtonIcon} />
								</TouchableOpacity>
							)}
						</View>
						<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
							<Text maxFontSizeMultiplier={1.5} numberOfLines={1} style={{ fontSize: 20, color: Colors.black }}>
								{title}
							</Text>
						</View>
						<View style={styles.iconButtonContainer}>
							{rightButtonIcon && rightButtonAction && (
								<TouchableOpacity style={styles.iconButton} onPress={rightButtonAction}>
									<Image source={rightButtonIcon} />
								</TouchableOpacity>
							)}
						</View>
					</View>
					<View style={{ height: 1, backgroundColor: '#d0cec4' }} />
				</View>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	iconButtonContainer: {
		width: 60,
		height: 60,
		marginHorizontal: 5,
	},

	iconButton: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

Header.propTypes = {
	leftButtonIcon: PropTypes.any,
	leftButtonAction: PropTypes.func,
	rightButtonIcon: PropTypes.any,
	rightButtonAction: PropTypes.func,
	title: PropTypes.string,
};

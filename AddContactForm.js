import React from 'react';
import { Button, View, TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Constants } from 'expo';

export default class AddContactForm extends React.Component {
	static propTypes = {
		addContact: PropTypes.func,
	}

	state = {
		name: '',
		phone: '',
		validForm : false,
	}

	handleNameChange = name => {
		this.setState({name}, this.validForm)
	}

	handlephoneChange = phone => {
		if (+phone >= 0 && phone.length <= 10) {
			this.setState({phone}, this.validForm)
		}
	}

	validForm =() =>{
		if (+this.state.phone >= 0 && this.state.phone.length === 10 && this.state.name.length >= 4) {
			return this.setState({validForm: true})
		} else {
			return this.setState({validForm: false})
		}
	}

	// you can use this code
	// this.props.onSubmit({name: this.state.name, phone: this.state.phone})
	submitForm = () => {
		if (+this.state.phone >= 0 && this.state.phone.length === 10 && this.state.name.length >= 4){
			this.props.onSubmit({name: this.state.name, phone: this.state.phone})
		}
	} 

	render() {
		return(
			<View style={{paddingTop: Constants.statusBarHeight}}>
				<TextInput style={styles.input}
					value={this.state.name}
					onChangeText={this.handleNameChange}
					placeholder="Name"/>
				<TextInput style={styles.input} 
					value={this.state.phone}
					onChangeText={this.handlephoneChange}
					keyboardType='numeric'
					placeholder="phone"/>
				<Button title="Add Contact" onPress={this.submitForm} disabled={!this.state.validForm}/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	input: {
		padding: 5,
		borderColor: 'black',
		borderWidth: 1,
		minWidth: 100,
	}
})
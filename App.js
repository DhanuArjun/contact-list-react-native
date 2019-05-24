import React from 'react';
import { StyleSheet, Button, View, Text, SectionList } from 'react-native';
import { Constants } from 'expo';

import contacts from './contacts';
import ContactList from './ContactsList'

// set state to the app
export default class App extends React.Component {
	state = {
		showContacts : false,
		contacts: contacts,
	}

	// set opposite state to the showContacts
	toggleContacts = () => {
		this.setState(prevState => ({ showContacts: !prevState.showContacts }))
	}

	// sort function take 2 arguments you have to specify the return type
	sort = () => {
		this.setState(prevState => ({ 
			contacts: prevState.contacts.sort(function(contact1, contact2){return contact1.name > contact2.name}),
		}))
	}

	render() {
		return (
			<View style={styles.container}>
				<Button title="toggle contacts" onPress={this.toggleContacts} />
				{/* add a button to the sort contacts */}
				<Button title="sort contacts" onPress={this.sort} />
				{/* change the contacts state based on onPress button */}
				{/* if showContacts state is true show contacts list otherwise return null */}
				{this.state.showContacts &&
					<ContactList
						contacts={this.state.contacts}
					/>
				}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingTop: Constants.statusBarHeight,
	},
});
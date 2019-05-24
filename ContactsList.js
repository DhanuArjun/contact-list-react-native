import React from 'react';
import { SectionList, Text } from 'react-native'
import { PropTypes } from 'prop-types'

import Row from './Row'
	// take obj and return all key value pairs of that object 
	// we can use renderItem = obj -> <row name={obj.item.name} phone={obj.n=item.phone} />
	// for short hand we take item and return all items in the array ...item
const renderItem = ({item}) => <Row {...item} />
const renderSectionHeader = obj => <Text>{obj.section.title}</Text>

// implement the code for divide contacts into sections based on their first letter
const ContactList = props => {
		const contactsByLetter = props.contacts.reduce((obj, contact) => {
		const firstLetter = contact.name[0].toUpperCase()
		return {
				...obj,
				[firstLetter]: [...(obj[firstLetter] || []), contact],
			}
	}, {})

const sections = Object.keys(contactsByLetter).sort().map(letter => ({
	title: letter,
	data: contactsByLetter[letter],
}))
	return(
		<SectionList
			renderItem={renderItem}
			renderSectionHeader={renderSectionHeader}
			sections={sections}
		/>
	)
}

// we can give propTypes for the CoantactList this ensure that 
// we have to pass right props the the this function
ContactList.propTypes = {
	renderItem: PropTypes.func,
	renderSectionHeader: PropTypes.func,
	contacts: PropTypes.array, 
}

export default ContactList;
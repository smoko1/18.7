const createSingleContact = function (contact) {
	return <Contact item= {contact} key= {contact.id} />
}

const Contacts = React.createClass({
	propTypes: {
		items: React.PropTypes.array.isRequired,
	},

	render: function () {
		const contacts = this.props.items.map(createSingleContact);

		return (
			<ul className= {'contactsList'}> 
				{contacts}
			</ul>
		);
	}
});
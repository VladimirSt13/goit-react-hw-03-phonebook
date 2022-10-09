import PropTypes from 'prop-types';
import { List } from './ContactList.styled';
import { Contact } from 'components/Contact/Contact';

export const ContactList = ({ outputContacts, onDeleteContact }) => {
  return (
    <List>
      {outputContacts.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  outputContacts: PropTypes.shape({
    id: PropTypes.string.isRequired,
    contact: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

import PropTypes from 'prop-types';
import { Item } from './Contact.styled';

export const Contact = ({ contact: { id, name, number }, onDeleteContact }) => {
  return (
    <Item>
      <div>
        <span>{name}:</span> <span>{number}</span>
      </div>
      <button onClick={() => onDeleteContact(id)}>Delete</button>
    </Item>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

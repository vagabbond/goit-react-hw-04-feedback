import PropTypes from 'prop-types';

import { FeedbackButtonWrap, FeedbackButton } from './Feedback.styled';

const ButtonList = ({ options, hadleClick }) => {
  return (
    <FeedbackButtonWrap>
      {options.map(el => (
        <FeedbackButton key={el} onClick={hadleClick}>
          {el}
        </FeedbackButton>
      ))}
    </FeedbackButtonWrap>
  );
};

ButtonList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  hadleClick: PropTypes.func.isRequired,
};

export default ButtonList;

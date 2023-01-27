import PropTypes from 'prop-types';

import { FeedbackStatistics, FeedbackStatisticsItem } from './Feedback.styled';

const Statistics = ({ options, feedbackArr, total, positivePercentage }) => {
  return (
    <FeedbackStatistics>
      {options.map((element, i) => (
        <FeedbackStatisticsItem key={element}>
          {element}: {feedbackArr[i]}
        </FeedbackStatisticsItem>
      ))}
      <FeedbackStatisticsItem>Total Feedback: {total}</FeedbackStatisticsItem>
      {total !== 0 && (
        <FeedbackStatisticsItem>
          Precent of positive Feedback: {positivePercentage} %
        </FeedbackStatisticsItem>
      )}
    </FeedbackStatistics>
  );
};

Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  feedbackArr: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;

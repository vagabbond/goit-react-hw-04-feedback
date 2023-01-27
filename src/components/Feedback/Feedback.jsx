import { useState } from 'react';

import ButtonList from './ButtonsList';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

import { FeedbackContainer } from './Feedback.styled';

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const state = { good, neutral, bad };

  const hadleClick = e => {
    const { textContent } = e.target;
    console.log(textContent);
    switch (textContent) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / (good + neutral + bad));
  };
  return (
    <FeedbackContainer>
      <Section title="Please leave feedback">
        <ButtonList
          options={Object.keys(state)}
          hadleClick={hadleClick}
        ></ButtonList>
      </Section>
      {countTotalFeedback() === 0 ? (
        <Notification message="There is no feedback"></Notification>
      ) : (
        <Section title="Statistics">
          <Statistics
            options={Object.keys(state)}
            feedbackArr={[good, neutral, bad]}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        </Section>
      )}
    </FeedbackContainer>
  );
};

export default Feedback;

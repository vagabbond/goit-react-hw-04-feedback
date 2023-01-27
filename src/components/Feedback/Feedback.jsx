import React, { Component } from 'react';

import ButtonList from './ButtonsList';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

import { FeedbackContainer } from './Feedback.styled';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hadleClick = e => {
    const { textContent } = e.target;
    this.setState(prevState => {
      return {
        [textContent.toLowerCase()]: prevState[textContent.toLowerCase()] + 1,
      };
    });
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round((good * 100) / (good + neutral + bad));
  };
  render() {
    return (
      <FeedbackContainer>
        <Section title="Please leave feedback">
          <ButtonList
            options={Object.keys(this.state)}
            hadleClick={this.hadleClick}
          ></ButtonList>
        </Section>
        {this.countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Section title="Statistics">
            <Statistics
              options={Object.keys(this.state)}
              feedbackArr={[
                this.state.good,
                this.state.neutral,
                this.state.bad,
              ]}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          </Section>
        )}
      </FeedbackContainer>
    );
  }
}

export default Feedback;

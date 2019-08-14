import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useTheme } from '../theme-provider';
import styles from './deterministic-pass-phrase.scss';

const timeouts = {
  completion: 500,
  shuffleBlur: 750,
};

/**
 * Randomize array from a given array.
 * Using Durstenfeld shuffle algorithm.
 * @returns {array} - New shuffled array
 * @param {array} originalArray - array to base shuffled array from
 */
function shuffleArray(originalArray) {
  const array = [...originalArray];

  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

/**
 * Function to toggle a css class via useState and then after a given
 * time, set the class to hide, to allow a fading transition
 * @returns {undefined}
 * @param {string} className - css class to toggle
 * @param {func} setter - useState setter to call
 * @param {int} hideDelay - delay before setting 'hide' class
 * @param {int} triggerDelay - delay before toggling initial class
 */
function toggleThenHide(className, setter, hideDelay = 100, triggerDelay = 0) {
  setTimeout(() => {
    setter(className);
  }, triggerDelay);

  setTimeout(() => {
    setter('hide');
  }, hideDelay);
}

const WordButton = ({
  blurType,
  currentWord,
  isShuffled,
  phraseComplete,
  selectionIndex,
  setSelectionIndex,
  theme,
  word,
  index,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const [feedBackClass, setFeedbackClass] = useState(null);
  const backgroundColor = isSelected ? theme.bgFocus : theme.bgBlur;

  useEffect(() => {
    if (phraseComplete) {
      toggleThenHide('complete', setFeedbackClass, timeouts.completion);
    }
  }, [phraseComplete]);

  function handleClick() {
    if (isSelected || !isShuffled) {
      return;
    }

    if (currentWord !== word) {
      toggleThenHide('error', setFeedbackClass);

      return;
    }

    setSelectionIndex(selectionIndex + 1);
    setIsSelected(true);

    if (selectionIndex !== 23) {
      toggleThenHide('success', setFeedbackClass);
    }
  }

  return (
    <>
      <div
        className={classNames(
          styles['pass-phrase__item'],
          feedBackClass && `pass-phrase-feedback__${feedBackClass}`
        )}
        onClick={handleClick}
        onKeyPress={handleClick}
        role="button"
        tabIndex={index}
      >
        <p className={
          classNames(
            styles['pass-phrase__word'],
            blurType && `pass-phrase-blur__${blurType}`
          )}
        >
          {word}
        </p>
      </div>
      <style jsx>
        {`
          @import 'styles/colors.scss';

          .${styles['pass-phrase__item']} {
            background: ${backgroundColor};
            color: ${theme.textColor};
          }

          .pass-phrase-feedback {
            &__success {
              background: ${theme.success};
            }

            &__error {
              background: ${theme.error};
            }

            &__complete {
              background: ${theme.success};
              transition: background .5s ease-in;
            }

            &__hide {
              background: ${backgroundColor};
              transition: background .5s ease-in;
            }
          }
        `}
      </style>
      <style jsx>
        {`
          .pass-phrase-blur {
            &__show {
              filter: blur(5px);
              transition: filter .75s ease-in;
            }
          
            &__hide {
              filter: none;
              transition: filter .75s ease-out;    
            }
          }
        `}
      </style>
    </>
  );
};


export const DeterministicPassPhrase = ({
  isBlurred,
  isShuffled,
  onCompletion,
  wordArray,
}) => {
  const [wordArrayToRender, setWordArrayToRender] = useState(wordArray);
  const [blurType, setBlurType] = useState('show');
  const [selectionIndex, setSelectionIndex] = useState(0);
  const theme = useTheme('passPhrase');
  const phraseComplete = selectionIndex === 24;

  useEffect(() => {
    const blur = isBlurred ? 'show' : 'hide';

    setBlurType(blur);
  }, [isBlurred]);

  useEffect(() => {
    if (phraseComplete) {
      onCompletion();
    }
  }, [phraseComplete]);

  useEffect(() => {
    const array = isShuffled ? shuffleArray(wordArray) : wordArray;

    if (isShuffled) {
      toggleThenHide('show', setBlurType, timeouts.shuffleBlur);
    }

    setTimeout(() => {
      setWordArrayToRender(array);
    }, timeouts.shuffleBlur);
  }, [isShuffled, wordArray]);

  return (
    <>
      <div className={classNames(styles['pass-phrase'])}>
        {wordArrayToRender.map((word, index) => (
          <WordButton
            blurType={blurType}
            currentWord={wordArray[selectionIndex]}
            isShuffled={isShuffled}
            phraseComplete={phraseComplete}
            selectionIndex={selectionIndex}
            setSelectionIndex={setSelectionIndex}
            theme={theme}
            word={word}
            key={`word-${index}`}
          />
        ))}
      </div>
    </>
  );
};

DeterministicPassPhrase.propTypes = {
  isBlurred: PropTypes.bool,
  isShuffled: PropTypes.bool,
  onCompletion: PropTypes.func.isRequired,
  wordArray: PropTypes.arrayOf(PropTypes.string).isRequired,
};

DeterministicPassPhrase.defaultProps = {
  isBlurred: true,
  isShuffled: false,
};

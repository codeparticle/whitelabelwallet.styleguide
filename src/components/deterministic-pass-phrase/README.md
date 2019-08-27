# Deterministic Pass Phrase

## Usage

Here's a normal usage flow:
1. isBlurred begins as true, isShuffled is false
  - This means a user can accept a privacy disclaimer before revealing their pass-phrase
2. isBlurred is toggled to false, isShuffled remains false
  - Now the user may store / save their recovery phrase before having to enter it
3. isShuffled is toggled true
  - Shuffles the words w/ blur effect
  - Now the user must click on the words in the correct order
  - When each word has been entered, the component will flash success, and trigger the onCompletion callback

```jsx
function generateArray() {
const arr = [];

for (let i = 0; i < 24; i += 1) {
  arr.push(`Word: ${i + 1}`);
}

return arr;
}

const wordArray = generateArray();
const onCompletion = completion => console.log(completion);

return (
  <DeterministicPassPhrase
    isBlurred={hasAcceptedDisclaimer}
    isShuffled={isShuffled}
    onCompletion={onCompletion}
    wordArray={wordArray}
  />
);
```

## Props

| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| dataSelector | string | '' | Optional e2e data-selector attr |
| isBlurred | bool | true | Allows to blur pass phrase |
| isShuffled | bool | false | Setting to true shuffles words and allows to be clicked |
| onCompletion* | func |  | Handles when phrase is completed |
| wordArray* | arrayOf(string) |  | Required array of 24 unique words. 4-6 chars per word is preferred |
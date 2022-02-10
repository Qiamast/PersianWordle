import { getGuessStatuses } from './statuses'
import { solutionIndex } from './words'

export const shareStatus = (guesses: string[]) => {
  navigator.clipboard.writeText(
    '#وردل_فارسی\n' +
      'شماره' +
      solutionIndex +
      '\n' +
      guesses.length +
      '/6\n' +
      generateEmojiGrid(guesses) +
      '\n\n' +
      'https://PersianWordle.github.io'
  )
}

export const generateEmojiGrid = (guesses: string[]) => {
  return guesses

    .map((guess) => {
      const status = getGuessStatuses(guess)
      return guess
        .split('')
        .map((letter, i) => {
          switch (status[i]) {
            case 'correct':
              return '🟩'
            case 'present':
              return '🟨'
            default:
              return '⬜'
          }
        })
        .join('')
    })
    .join('\n')
}

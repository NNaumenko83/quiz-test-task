import { TOPICS } from '../constants/topics'
import { getQuizFromLocalStorage } from './getQuizFromLocalStorage'

export function getTopicsByAge() {
    const quiz = getQuizFromLocalStorage()
    switch (quiz.age) {
        case '18-29':
            return TOPICS
        case '30-39':
            return TOPICS.filter(topic =>
                [
                    'werewolf',
                    'romance',
                    'action',
                    'royal_obsession',
                    'bad_boy',
                    'billionaire',
                ].includes(topic.type),
            )
        case '40-49':
            return TOPICS.filter(topic =>
                [
                    'werewolf',
                    'romance',
                    'action',
                    'royal_obsession',
                    'billionaire',
                ].includes(topic.type),
            )
        case '50+':
            return TOPICS.filter(topic =>
                [
                    'werewolf',
                    'romance',
                    'action',
                    'royal_obsession',
                    'billionaire',
                ].includes(topic.type),
            )
        default:
            return []
    }
}

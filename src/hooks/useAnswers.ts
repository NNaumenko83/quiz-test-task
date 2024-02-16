import { useTranslation } from 'react-i18next'
import { getLangFromLocalStorage } from '../helpers/getLangFromLocalStorage'
import { getQuizFromLocalStorage } from '../helpers/getQuizFromLocalStorage'

export const useAnswers = () => {
    const quiz = getQuizFromLocalStorage()
    const lang = getLangFromLocalStorage()

    const { t } = useTranslation()

    const answers = {
        [t('what_is_your_preffered_language')]: {
            type: t('single_select'),
            answer: lang,
        },
        [t('what_gender_do_you_identify_with')]: {
            type: t('single_select_image'),
            answer: t(quiz.gender),
        },
        [t('what_is_your_age')]: {
            type: t('single_select'),
            answer: t('years', { years: quiz.age }),
        },
        [t('what_do_you_hate_the_most_in_a_book')]: {
            type: t('multiple_select'),
            answer: quiz.hates.map((hate: string | string[]) => t(hate)),
        },
        [t('what_are_your_favorite_topics')]: {
            type: t('bubble'),
            answer: quiz.topics.map((topic: string | string[]) => t(topic)),
        },
        Email: {
            type: 'email',
            answer: quiz.email,
        },
    }

    console.log('answers:', answers)
    return answers
}

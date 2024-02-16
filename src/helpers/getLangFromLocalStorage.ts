export const getLangFromLocalStorage = () => {
    const lang = localStorage.getItem('i18nextLng')
    switch (lang) {
        case 'de':
            return 'German'
        case 'en':
            return 'English'
        case 'es':
            return 'Spanish'
        case 'fr':
            return 'French'

        default:
            'English'
    }
}

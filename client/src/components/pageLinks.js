
export const goToHome = (history) => history.push('/')

export const goToMen = (history) => history.push('/all/men')

export const goToWomen = (history) => history.push('/all/women')

export const goToLogin = (history) => history.push('/login')

export const goToSignup = (history) => history.push('/signup')

export const logoutHandler = (history) => {
    localStorage.removeItem('authorization')
    history.push('/')
}

export const goToMyAccount = (history) =>  history.push('/myAccount')
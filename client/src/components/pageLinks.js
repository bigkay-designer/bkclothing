
export const goToHome = (history) => history.push('/')

export const goToMen = (history) => history.push('/page/mens')

export const goToWomen = (history) => history.push('/page/womens')

export const goToSkirts = (history) => history.push('/page/womens/skirts')
export const goToJackets = (history) => history.push('/page/womens/jackets')
export const goToShirts = (history) => history.push('/page/mens/shirts')
export const goToSuits = (history) => history.push('/page/mens/suits')

export const goToLogin = (history) => history.push('/login')

export const goToSignup = (history) => history.push('/signup')

export const logoutHandler = (history) => {
    localStorage.removeItem('authorization')
    localStorage.removeItem('user')
    history.push('/')
}

export const goToMyAccount = (history) =>  history.push('/myAccount')
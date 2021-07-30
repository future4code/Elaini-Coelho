export const goToLogin = (history) => {
    history.push("/login")
}

export const goToSingUp = (history) => {
    history.push("/cadastro")
}

export const goToAddRecipes = (history) => {
    history.push("/Adicionar-receita" )
}

export const goToRecipeDetals = (history, id) => {
    history.push(`detalhe/${id}`)
}

export const goToRecipeList = (history) => {
    history.push("/")
}
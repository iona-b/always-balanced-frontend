export const addUserRelaxationCategory = (userId, relaxationCategory) => {
    let data = {
        user_id: userId,
        relaxation_category_id: relaxationCategory.id
    }
    return (dispatch) => {

        // dispatch({ type: 'LOADING_USER'})
        fetch('http://localhost:3000/user_relaxation_categories',{
        method:"POST",
        headers:{
        'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
        })
        .then(response => response.json())
        .then(responseJSON => {
            if(!responseJSON.error){
                dispatch({ type: 'ADD_USER_RELAXATION_CATEGORY', userRelaxationCategory: relaxationCategory })
            } else {
                alert(responseJSON.error)
            }
        })
    .catch(err => console.log('App.js Login Error:', err))
    }
}
export const updateUserRelaxationCategory = (userId, relaxationCategory) => {

    let data = {
        user_id: userId,
        relaxation_category_id: relaxationCategory.id
    }

    return (dispatch) => {

        fetch('https://cors-anywhere.herokuapp.com/https://always-balanced-backend.herokuapp.com/user_relaxation_categories',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(response => response.json())
        .then(responseJSON => {
            if(!responseJSON.error){
                dispatch({ type: 'ADD_USER_RELAXATION_CATEGORY', userRelaxationCategory: responseJSON, relaxationCategory: relaxationCategory })
            } else {
                alert(responseJSON.error)
            }
        })
    .catch(err => console.log('updateUserRelaxationCategory error:', err))
    }
    
}
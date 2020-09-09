export const addUserRelaxationCategory = (userId, relaxationCategory) => {

    let data = {
        user_id: userId,
        relaxation_category_id: relaxationCategory.id
    }

    return (dispatch) => {
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
                dispatch({ type: 'ADD_USER_RELAXATION_CATEGORY', userRelaxationCategory: responseJSON, relaxationCategory: relaxationCategory })
            } else {
                alert(responseJSON.error)
            }
        })
    .catch(err => console.log('addUserRelaxationCategory error:', err))
    }

}
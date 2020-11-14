export const signUpUser = (user) => {

    return (dispatch) => {
        dispatch({ type: 'LOADING'})
        fetch('https://cors-anywhere.herokuapp.com/https://always-balanced-backend.herokuapp.com/users',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(response => response.json())
        .then(responseJSON => {
            if(!responseJSON.error){
                if(responseJSON.user){
                    localStorage.token = responseJSON.token
                    dispatch({ type: 'SET_TOKEN_AND_USER_ID', user: responseJSON }) 
                }else {
        
                    alert(responseJSON.error)
                }
            } else {
                alert(responseJSON.error)
            }
        })
        .catch(err => console.log('signUpUser error:', err))
    }
    
}
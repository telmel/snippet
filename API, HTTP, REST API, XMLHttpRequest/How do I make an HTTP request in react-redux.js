//So what you would doing is in your action creator you can call an API using any of the above.

//FETCH

function fetchData(){
    const url = '//you url'
    fetch(url)
    .then((response) => {//next actions})
    .catch((error) => {//throw error})
}

//So that was for the API call, now coming to the state. In redux there is one state which handles your app. I would suggest you should go through redux basics which you can find here . So once your api call succeeds you need to update your state with the data.

//Action to fetch data

 function fetchData(){
    return(dispatch,getState) =>{ //using redux-thunk here... do check it out 
        const url = '//you url'
        fetch(url)
        .then (response ) => {dispatch(receiveData(response.data)} //data being your api response object/array
        .catch( error) => {//throw error}
    }
  }

//Action to update state

   function receiveData(data) {
      return{
        type: 'RECEIVE_DATA',
        data
     }
   }

//Reducer

   function app(state = {},action) {
      switch(action.types){
          case 'RECEIVE_DATA':
                 Object.assign({},...state,{
                   action.data 
                     }
                  }) 
          default:
             return state
      }
   }

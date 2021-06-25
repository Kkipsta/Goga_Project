import axios from 'axios'
import { FETCH_RESOURCES_REQUEST,FETCH_RESOURCES_SUCCESS,FETCH_RESOURCES_FAILURE } from './ResourcesTypes'




export const fetchResources = () => {
  return (dispatch) => {
    dispatch(fetchResourcesRequest())
    
    axios
      .get('https://reqres.in/api/unknown')
      .then(response => {
        const resources = response.data
        console.log(resources.data)
        
        dispatch(fetchResourcesSuccess(resources.data))
      })
      .catch(error => {
        dispatch(fetchResourcesFailure(error.message))
      })
  }
}




export const fetchResourcesRequest = () => {
  return {
    type: FETCH_RESOURCES_REQUEST
  }
}

export const fetchResourcesSuccess = resources => {
  return {
    type: FETCH_RESOURCES_SUCCESS,
    payload: resources
  }
}



export const fetchResourcesFailure = error => {
  return {
    type: FETCH_RESOURCES_FAILURE,
    payload: error
  }
}
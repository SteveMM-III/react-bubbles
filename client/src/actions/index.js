import axios from 'axios';

export const LOGIN_LOADING        = 'LOGIN_LOADING';
export const LOGIN_SUCCESS        = 'LOGIN_SUCCESS';
export const LOGIN_FAILED         = 'LOGIN_FAILED';

export const FETCH_COLORS_LOADING = 'FETCH_COLORS_LOADING';
export const FETCH_COLORS_SUCCESS = 'FETCH_COLORS_SUCCESS';
export const FETCH_COLORS_FAILED  = 'FETCH_COLORS_FAILED';

export const ADD                  = 'ADD';
export const ADD_FAILED           = 'ADD_FAILED';

export const EDIT                 = 'EDIT';
export const EDIT_FAILED          = 'EDIT_FAILED';

export const DELETE               = 'DELETE';
export const DELETE_FAILED        = 'DELETE_FAILED';



export const loginLoading   = () => ( { type: LOGIN_LOADING } );
export const colorsLoading = () => ( { type: FETCH_COLORS_LOADING } );

export const loginSuccess = data => ( {
  type: LOGIN_SUCCESS,
  payload: data
} );

export const loginFailure = error => ( {
  type: LOGIN_FAILED,
  payload: error
} );

export const colorsLoadSuccess = data => ( {
  type: FETCH_COLORS_SUCCESS,
  payload: data
} );

export const colorsLoadFailure = error => ( {
  type: FETCH_COLORS_FAILED,
  payload: error
} );

export const colorAddSuccess = data => ( {
  type: ADD,
  payload: data
} );

export const colorAddFailure = error => ( {
  type: ADD_FAILED,
  payload: error
} );

export const colorEditSuccess = data => ( {
  type: EDIT,
  payload: data
} );

export const colorEditFailure = error => ( {
  type: EDIT_FAILED,
  payload: error
} );

export const colorDeleteSuccess = data => ( {
  type: DELETE,
  payload: data
} );

export const colorDeleteFailure = error => ( {
  type: DELETE_FAILED,
  payload: error
} );

const axiosWithAuth = () => {
  return axios.create( {
    headers: {
      authorization: sessionStorage.getItem( 'token' )
    }
  } );
};

export function LoginFunction( name, pass ) {
  return function( dispatch ) {
    dispatch( loginLoading() );

    return axios
      .post( 'http://localhost:5000/api/login', { username: name, password: pass } )
      .then ( res   => dispatch( loginSuccess( res.data.payload ) ) )
      .catch( error => dispatch( loginFailure( error            ) ) );
  }
}

export function FetchColors( header ) {
  return function( dispatch ) {
    dispatch( colorsLoading() );

    const authAxios = axiosWithAuth();

    return authAxios
      .get( 'http://localhost:5000/api/colors' )
      .then ( res   => dispatch( colorsLoadSuccess( res.data ) ) )
      .catch( error => dispatch( colorsLoadFailure( error    ) ) );
  }
}


export function AddColor( color ) {
  return function( dispatch ) {

    const authAxios = axiosWithAuth();

    return authAxios
      .post( 'http://localhost:5000/api/colors', color   )
      .then ( res   => dispatch( colorAddSuccess( color  ) ) )
      .catch( error => dispatch( colorAddFailure( error  ) ) );
  }
}

export function EditColor( color ) {
  return function( dispatch ) {
    const authAxios = axiosWithAuth();

    return authAxios
      .put( `http://localhost:5000/api/colors/${ color.id }`, color )
      .then ( res   => dispatch( colorEditSuccess( res.data ) ) )
      .catch( error => dispatch( colorEditFailure( error    ) ) );
  }
}

export function DeleteColor( id ) {
  return function( dispatch ) {
    const authAxios = axiosWithAuth();
    console.log( id );

    return authAxios
      .delete( `http://localhost:5000/api/colors/${ id }` )
      // .then( res => console.log( res ) )
      .then ( res   => dispatch( colorDeleteSuccess( res ) ) )
      .catch( error => dispatch( colorDeleteFailure( error    ) ) );
  }
}

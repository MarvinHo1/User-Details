import {combineReducers} from 'redux';
import userReducers from './reducers-users';
//import movieList from './listOfMovies' (just an example)

//redux will only all you to work with one big object.  The goal of allReducers is to combine all your objects  into one big object.
const allReducers = combineReducers({
  users: userReducers
  // if you have another .js file you can import it to this file and add it to this allReducer function. (example below:)
  //movies: movieList
});

export default allReducers
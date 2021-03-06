/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './navbar'
export {default as UserHome} from './userHome'
export {default as HomePage} from './homePage'
export {default as AllDestinations} from './allDestinations'
export {default as DestinationPage} from './destinationPage'
export {default as Cart} from './cart'
export {default as OrderHistory} from './orderHistory'
export {Login, Signup} from './authForm'

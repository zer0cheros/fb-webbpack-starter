import {auth, app, db} from './config'
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut} from 'firebase/auth'
import {collection, addDoc} from 'firebase/firestore'
const signIn = document.getElementById('sign')
const provider = new GoogleAuthProvider()

const pokeRef = collection(db, 'pokemon')

signIn.addEventListener('click', (e)=>{
    e.preventDefault()
    signInWithPopup(auth, provider).
    then(cred=> {
        console.log('signed in ' + cred)
    }).catch(err=>console.log(err))
})

onAuthStateChanged(auth, (user)=>{
    if(user){
        console.log(`Signed in as ${user.displayName}`);
        //console.log(user)
    }
    else {
        console.log('Not signed in')
    }
})


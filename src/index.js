import {auth, app, db} from './config'
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut} from 'firebase/auth'
import {collection, addDoc, onSnapshot} from 'firebase/firestore'
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

//hämtar från db
onSnapshot(pokeRef, (snap)=>{
    snap.forEach(doc=>{
        document.getElementById('content').innerHTML += `
        <div class="min-h-32 w-32 shadow-lg rounded-lg text-center text-bold p-3">
            <h1>${doc.data().p.name}</h1>
            <h2>${doc.data().p.weight}</h2>
            <img class="bg-transparent rounded drop-shadow-xl m-auto" height="40px" width="40px" src="https://img.pokemondb.net/artwork/large/${doc.data().p.name}.jpg" >
        </div>`
    })
})

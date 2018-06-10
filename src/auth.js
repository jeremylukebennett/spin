import { googleProvider, rebase }  from './firebaseInfo';

export function logout() {
    return rebase.initializeApp.auth().signOut()
}

export function loginWithGoogle(update) {
    return rebase.initializedApp.auth().signInWithPopup(googleProvider)
    .then((data) => {
        console.log('user data', data);

        

    });
}
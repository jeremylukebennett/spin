import { googleProvider, rebase }  from './firebaseInfo';
// import 

export function logout() {
    return rebase.initializedApp.auth().signOut()
}


// 'update' here = changeAuth() function call in App.js. How is this working..?
export function loginWithGoogle(updateUserInApp) {
    return rebase.initializedApp.auth().signInWithPopup(googleProvider)
    .then((data) => {
        // Need to send this 'data' object back to App. Use it to set state?
        console.log('user data', data);
        updateUserInApp(data);
    });
}

// This simply needs to store the user (uid) so that when in the library adding/viewing modes I can filter through firebase entries by uid.
// Should I define this in App and then pass it through to here as a prop?
export function storeUserInfo(user) {
    console.log("did i get user info? ", user);
    console.log("did i get user info uid? ", user.user.uid);
    // let userInfo = user;
    // return user;
    
    // This will push information up to firebase. Use .update instead of .push when you want to edit track info
    // return rebase.initializedApp.database().ref().child('tracks')
    // .push({
    //     uid: user.user.uid,
    //     // title: "test",
    // });    
}

// export default userInfo;
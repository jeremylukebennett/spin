import { googleProvider, rebase }  from './firebaseInfo';
// import 


// This simply needs to store the user (uid) so that when in the library adding/viewing modes I can filter through firebase entries by uid.
// Should I define this in App and then pass it through to here as a prop?
export function storeTrackInfo(trackInfo) {
    console.log("did i get track info? ", trackInfo);
    // console.log("did i get user info uid? ", user.user.uid);
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
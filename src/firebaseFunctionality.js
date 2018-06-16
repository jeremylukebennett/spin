import { rebase }  from './firebaseInfo';

// This simply needs to store the user (uid) so that when in the library adding/viewing modes I can filter through firebase entries by uid.
export function pushTrackInfo(trackInfo, uid) {
    console.log("did i get track info? ", trackInfo);
    console.log("did i get track uid? ", uid);
    // Need to get the uid in here too
    // trackInfo is an object

    // This will push information up to firebase. Use .update instead of .push when you want to edit track info
    return rebase.initializedApp.database().ref().child('tracks')
    .push({
        title: trackInfo.track,
        artist: trackInfo.artist,
        album: trackInfo.album,
        genre: trackInfo.genre,
        bpm: trackInfo.bpm,
        notes: trackInfo.notes,
        uid: uid,
    });
}


export function updateTrackInfo(trackInfo) {
    // trackInfo is an object

    return rebase.initializedApp.database().ref().child('tracks').child(trackInfo.fbID)
    .update({
        title: trackInfo.track,
        artist: trackInfo.artist,
        album: trackInfo.album,
        genre: trackInfo.genre,
        bpm: trackInfo.bpm,
        notes: trackInfo.notes,
    });
}


export function deleteTrackInfo(entryToDelete){
    console.log("Entry to delete: ", entryToDelete);
    return rebase.initializedApp.database().ref().child('tracks').child(entryToDelete)
    .remove()
}
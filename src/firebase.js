import firebase from 'firebase';

const config = {
	apiKey: "AIzaSyBVEzjy6JxkJcIbI-ng8fAyvrux9IC_-KI",
	projectId: "sound-of-text-3ba84",
	storageBucket: "sound-of-text-3ba84.appspot.com",
};

const firebaseApp = firebase.initializeApp(config);

export const storage = firebaseApp.storage();

export default firebaseApp;

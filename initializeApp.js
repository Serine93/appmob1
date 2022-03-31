import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  signInWithCredential,
} from 'firebase/auth';

initializeApp(config);

const auth = getAuth();

// Listen for authentication state to change.
onAuthStateChanged(auth, user => {
  if (user != null) {
    console.log('We are authenticated now!');
  }

  // Do other things
});

async function login() {
    await Facebook.initializeAsync('<FACEBOOK_APP_ID>');
  
    const { type, token } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ['public_profile'],
    });
  
    if (type === 'success') {
      // Build Firebase credential with the Facebook access token.
      const facebookAuthProvider = new FacebookAuthProvider();
      const credential = facebookAuthProvider.credential(token);
  
      // Sign in with credential from the Facebook user.
      signInWithCredential(auth, credential).catch(error => {
        // Handle Errors here.
      });
    }
  }
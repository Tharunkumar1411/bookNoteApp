import { FacebookAuthProvider, GoogleAuthProvider, OAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";

export const handleGoogleAuth = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log("check user::", user, token)
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log("check error::", error)
    });
}

export const handleAppleAuth = () => {
    const provider = new OAuthProvider('apple.com');
    signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
    const credential = OAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;
    const idToken = credential.idToken;

    console.log("check urser::", user, idToken)
  })
  .catch((error) => {

    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = OAuthProvider.credentialFromError(error);

    console.log("error::", error)

  });
}


export const handleFbAuth = () => {
  const provider = new FacebookAuthProvider();

  signInWithPopup(auth, provider) 
  .then((result) => {
    const user = result.user;
    const credential = OAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;
    const idToken = credential.idToken;

    console.log("check urser::", user, idToken)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = OAuthProvider.credentialFromError(error);
    console.log("error::", error)
  });
}
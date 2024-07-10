import { FacebookAuthProvider, GoogleAuthProvider, OAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export const handleGoogleAuth = () => {
    const nav = useNavigate(); 
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        nav(`/kicks`);
        localStorage.setItem("token", token)
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


export const handleEmailAuth = async(email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    return userCredential;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}
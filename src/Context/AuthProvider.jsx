/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  getAdditionalUserInfo,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import { isEmptyOrNull, onNotifyError, onNotifySuccess } from "../utils/helper";

import fireBaseApp from "../config/firebase-config";
import {
  addUserUsingAPI,
  createNewLoginUserUsingAPI,
  createUserViaAPI,
  getAccessToken,
  getSignOut,
} from "../utils/apiAction";

export const AuthContext = createContext(null);
const AuthProvider = ({ children, ...props }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth(fireBaseApp);
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then((resp) => {
        onNotifySuccess("You are logout");
        getSignOut();
      })
      .catch((error) => {
        onNotifyError("Log Out failed!! ", error.message);
      });
  };

  const updateUser = ({ displayName, photoURL }) => {
    setIsLoading(true);

    updateProfile(user, { displayName, photoURL })
      .then((value) => {
        onNotifySuccess("User Profile updated");
      })
      .catch((error) => {
        onNotifyError("User update failed ", error.message);
      });
  };

  const createUser = (nUser, callBack = () => {}) => {
    setIsLoading(true);

    const { email, password, name, picture } = nUser;

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user, ...props }) => {
        onNotifySuccess("Registration successful");

        if (isEmptyOrNull(picture)) {
          nUser.picture = user.photoURL;
        }

        createUserViaAPI(nUser);

        updateProfile(user, { displayName: name, photoURL: user.picture })
          .then((update) => {
            // console.log("Update Success ", update);
          })
          .catch((error) => {
            // console.log("Update Error ", error);
          });

        //TODO: Enable Email Verification after result
        // sendEmailVerification(user).then((res) => {
        //   onNotifySuccess("Please, check you email and verify you account");
        // });
        signOut(auth);
        setTimeout(() => {
          callBack();
        }, 700);
      })
      .catch(({ message, code }) => {
        if ("auth/email-already-in-use" === code) {
          onNotifyError(`Registration failed !!, Email Already in-use`);
        } else {
          onNotifyError(`Registration failed !!, ${message}`);
        }
      });
  };

  const loginWithGoogle = (callBack = () => {}) => {
    setIsLoading(true);

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const userInfo = getAdditionalUserInfo(result);
        if (userInfo.isNewUser) {
          createNewLoginUserUsingAPI(userInfo.profile);
        }
        onNotifySuccess(`${userInfo?.profile?.name} you are login`);

        callBack();
      })
      .catch((error) => {
        onNotifyError(`Login failed, ${error.message}`);
      });
  };

  const loginWithGitHub = (callBack = () => {}) => {
    setIsLoading(true);

    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        const userInfo = getAdditionalUserInfo(result);
        const { user } = result;

        if (userInfo.isNewUser) {
          createNewLoginUserUsingAPI(userInfo.profile);
        }

        onNotifySuccess(`${user.displayName} you are login`);

        callBack();
      })
      .catch((error) => {
        onNotifyError(`Login failed, ${error.message}`);
      });
  };

  const loginUserPass = ({ username, password }, callBack = () => {}) => {
    setIsLoading(true);

    signInWithEmailAndPassword(auth, username, password)
      .then(({ user, ...userCredential }) => {
        onNotifySuccess(`${user.displayName} you are login :)`);
        callBack();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if ("auth/invalid-credential" === errorCode) {
          onNotifyError("Username Or password not correct !!");
        } else {
          onNotifyError("Login failed ", errorMessage);
        }
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
      const userEmail = currentUser?.email || user?.email;
      if (!isEmptyOrNull(currentUser)) {
        getAccessToken(userEmail);
      } else {
        console.log("User Not Found");
      }
    });

    return () => {
      unSubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        logOut,
        createUser,
        loginUserPass,
        loginWithGoogle,
        loginWithGitHub,
        updateUser,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

import { auth } from "./firebase";
export const signInWithEmailAndPassword = async (email, password) => {
  try {
    let user = await auth.signInWithEmailAndPassword(email, password);
    return user;
  } catch (err) {
    console.error(err);
    return err;
  }
};

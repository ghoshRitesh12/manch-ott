import { auth, googleProvider } from "@/config/firebase";
import { signInWithPopup } from "firebase/auth";
import { Button } from "@/components/ui/button";

export default function Auth() {
  async function signInWithGoogle() {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <div>auth component</div>
      <Button onClick={signInWithGoogle}>Sign in with Google</Button>
    </div>
  );
}

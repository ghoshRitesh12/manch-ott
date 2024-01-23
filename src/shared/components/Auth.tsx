import { auth, googleProvider } from "@/shared/config/firebase";
import { signInWithPopup } from "firebase/auth";
import { Button } from "@/shared/components/ui/button";

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

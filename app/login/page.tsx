import { signIn } from "@/auth";

function LoginPage() {
  return (
    <form className=" grid place-items-center" action={ async () => {
        "use server";
        await signIn("google");
    }}>
        <button>login with google</button>
    </form>
  )
}

export default LoginPage

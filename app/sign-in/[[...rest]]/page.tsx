import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[90vh]">
      <SignIn />
    </main>
  );
}

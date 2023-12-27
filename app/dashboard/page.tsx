import { auth } from "@/auth";

async function DashboardPage() {
  const session = await auth();
  return (
    <div>
      <h1>hello dashboard page welcome to the {session?.user?.name}</h1>
      <h3>also his email: {session?.user?.email}</h3>
    </div>
  );
}

export default DashboardPage;

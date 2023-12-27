import { auth } from "@/auth";
import LogoutButton from "../component/LogoutButton";

async function DashboardPage() {
  const session = await auth();
  return (
    <div>
      <div>
        {session?.user && (
          <div>
            <h1>hello dashboard page welcome to the {session?.user?.name}</h1>
            <h3>also his email: {session?.user?.email}</h3>
          </div>
        )}
      </div>
      {session?.user && (
        <LogoutButton />
      )}
    </div>
  );
}

export default DashboardPage;

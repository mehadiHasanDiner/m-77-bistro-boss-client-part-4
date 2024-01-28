import useAuth from "../../../hooks/useAuth";

const AdminHome = () => {
  const { user } = useAuth();
  return (
    <div className="m-4 w-full">
      <h2 className="text-3xl">Welcome back, {user.displayName}</h2>
    </div>
  );
};

export default AdminHome;

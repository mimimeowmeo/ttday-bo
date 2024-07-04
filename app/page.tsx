import { redirect } from "next/navigation";

const HomePage = () => {
  redirect("/admin/dashboard");
};

export default HomePage;

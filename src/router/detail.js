import Home from "../components/Home"
import HomeAdmin from "../views/HomeAdmin"
import User from "../views/users/List"
export default [
	{
    path: "/",
    component: Home,
    redirect: "admin",
    children: [
      {
        path: "/admin",
        name: "homePage",
        component: HomeAdmin
      },
      {
        path: "/user",
        name: "userPage",
        component: User
      }
    ]
  }
]
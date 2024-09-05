
// profile menu component
const navLinksUser = [
  {
    
    title: "Home",
    href: "/dashboard/",
    current: true,
  },
  {
    
    title: "Profile",
    href: "/dashboard/my-profile",
    current: true,
  },
  {
    
    title: "News",
    href: "/dashboard/news",
    current: false,
    
  },
  {
    
    title: "Contact",
    href: "/dashboard/sendEmail",
    current: false,
    
  },
];

const navLinksDropdown = [
  {
    
    title: "My profile",
    href: "/dashboard/my-profile",
    current: true,
  },
  {
    
    title: "News",
    href: "/dashboard/news",
    current: false,
    
  },
  {
    
    title: "Settings",
    href: "/dashboard/info",
    current: false,
  },
  {
    
    title: "Info",
    href: "/dashboard/info",
    current: false,
  },
  {
    
    title: "Logout",
    href: "/api/auth/signout",
    current: false,
  },

]

const navLinksGlobal = [
   {
    
    title: "Home",
    href: "/",
    current: true,
  },
  {
    
    title: "About us",
    href: "/dashboard/news",
    current: false,
    
  },
  {
    
    title: "Policy",
    href: "#",
    current: false,
  },
]

export { navLinksUser, navLinksGlobal, navLinksDropdown };
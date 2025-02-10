'use client';
import Link from "next/link"
import { usePathname } from "next/navigation"
const NavLink = [
    {name : 'register ', href : '/register'},
    {name : 'Login' , href : '/login'},
    {name : "forgotPassword" , href : '/forgot-password'},
]
export default function AuthLayout({children ,} : {children : React.ReactNode}){
    const pathname = usePathname();
    return(
        <div>
    {NavLink.map((link) =>{
        const IsActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/')
return(
    <Link className={IsActive ? "font-bold text-blue-500 m-2" : "text-black m-2"} href={link.href} key={link.name}>{link.name}</Link>
)
    })}
    
    {children}
        </div>
    )
}
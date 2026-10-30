import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title:"Split Signal — Escape together",description:"Different screens. One mission. A cooperative space escape for 2–6 players." };
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}

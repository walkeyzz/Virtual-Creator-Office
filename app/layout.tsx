import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'Keiko’s Creator Office',description:'A little office for your big ideas. Brand deliverables, scripts & content planning.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="id"><body>{children}</body></html>;}

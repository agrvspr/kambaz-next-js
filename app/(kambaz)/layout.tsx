import { ReactNode } from "react";
import KambazNavigation from "./Navigation";
import "./styles.css";
export default function KambazLayout({ children }: Readonly<{ children: ReactNode }>) {
 return (
   <div className="d-flex">
    <div>
      <KambazNavigation />
    </div>
    <div style={{ marginLeft: "110px", padding: "20px" }}>
      {children}
    </div>
  </div>
);}

import { Outlet } from "react-router-dom";

export default function RootPage() {
  return (
    <div id="root-page" className="component">
      <Outlet />
    </div>
  );
}
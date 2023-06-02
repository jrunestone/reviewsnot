import { Outlet } from "react-router-dom";

const goToRandomItem = () => window.location = '/';

export default function RootPage() {
  return (
    <div id="root-page" className="component" onClick={goToRandomItem}>
      <Outlet />
    </div>
  );
}
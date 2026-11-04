import Sidebar from "./_components/Sidebar";
import type { ChildrenProps } from "@/types/components";

const DashboardLayout = ({ children }: ChildrenProps) => {
  return (
    <div className="min-h-screen bg-muted/40 lg:flex">
      <Sidebar />

      <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
        {children}
        </main>
    </div>
  );
};

export default DashboardLayout;

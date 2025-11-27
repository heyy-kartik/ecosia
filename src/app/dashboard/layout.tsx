"use client";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#f5f3f0] dark:bg-black">


      {/* Main Content Area */}
      <div className="flex flex-col flex-1 overflow-hidden bg-transparent">
        <main className="px-8 py-8 overflow-y-auto bg-[#f5f3f0] dark:bg-black">
          {children}
        </main>
      </div>
    </div>
  );
}
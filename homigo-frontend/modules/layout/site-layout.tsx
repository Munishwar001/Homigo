export function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[#f4f7fb]">
      <div className="flex min-h-screen w-full flex-col">
        {children}
      </div>
    </div>
  );
}
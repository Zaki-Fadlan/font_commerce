export default function NewsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 w-full">
      {children}
    </div>
  );
}

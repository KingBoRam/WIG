export default function MainLayout({ children }) {
  return (
    <>
      <div>
        <header style={{ background: "lightgray", padding: 16, fontSize: 24 }}>
          Header
        </header>
      </div>
      {children}
    </>
  );
}

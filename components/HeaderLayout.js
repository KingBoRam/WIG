export default function HeaderLayout({ children }) {
  return (
    <>
      <div>
        <header style={{ background: "lightgray", padding: 16, fontSize: 24 }}>
          WIG
        </header>
      </div>
      {children}
    </>
  );
}

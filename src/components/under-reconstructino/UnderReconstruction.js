// Under reconstruction page component
const UnderConstruction = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          color: "#333",
          marginBottom: "20px",
        }}
      >
        🚧 Under Construction 🚧
      </h1>
      <p
        style={{
          fontSize: "1.2rem",
          color: "#666",
          maxWidth: "600px",
          lineHeight: "1.6",
        }}
      >
        We're working hard to improve this page. Please check back soon!
      </p>
      <div
        style={{
          marginTop: "30px",
          animation: "spin 2s linear infinite",
        }}
      >
        ⚙️
      </div>
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default UnderConstruction;

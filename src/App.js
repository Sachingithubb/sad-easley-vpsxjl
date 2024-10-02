import Register from "./Register";
import "./styles.css";

export default function App() {
  const [userData, setUserData] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div className="App">
      <h1>Ultimez Technology</h1>
      <h2>Building Digital Products For The Future</h2>

      {!userData ? (
        <>
          <button onClick={() => setIsRegistering(!isRegistering)}>
            {isRegistering ? "Switch to Login" : "Switch to Register"}
          </button>
          {isRegistering ? (
            <Register setUserData={setUserData} />
          ) : (
            <Login setUserData={setUserData} />
          )}
        </>
      ) : (
        <Dashboard userData={userData} />
      )}
    </div>
  );
}

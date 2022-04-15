import './App.css';
import Users from "./Users"
import ErrorBoundary from "./ErrorBoundary"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ErrorBoundary>
          <Users />
        </ErrorBoundary>
      </header>
    </div>
  );
}

export default App;

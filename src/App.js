import './App.css';
import Dashboard from './dashboard/Dashboard';
import Header from './header/Header';
import Sidenav from './sidenav/Sidenav';
import { Calendar } from './dashboard/Calendar';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
// import Layouts from './Layouts/Layouts';
function App() {
  return (
    <div>
      <Header />      
      <div className="container">
        <aside className="drawer">
        <Sidenav />
        </aside>
        <main className="main">
          <Dashboard />
        </main>
        <Calendar />
      </div>
    </div>
    // <Layouts />
  );
}

export default App;

<<<<<<< HEAD
import './App.css';
import { Test } from './component/test';
=======
import Route from './Route'
import EnrollCard from './modules/EnrollCard'
import Login from './Route/Login'
import DetailCard from './modules/DetailCard'
>>>>>>> master

const App = () => {
  return (
    <div style={{fontFamily: 'kanit'}}>
      {/* <Route /> */}
      {/* <DetailCard /> */}
      <EnrollCard />
      {/* <Login /> */}
    </div>
  );
}

export default App;

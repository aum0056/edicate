import Route from './Route'
import EnrollCard from './modules/EnrollCard'
import Login from './Route/Login'
import DetailCard from './modules/DetailCard'
import EnrollClick from './modules/EnrollClick'
import Custom from './Route/Custom'
import data from './testdata.json'
import DetailPage from './Route/DetailPage'
import ChooseButton from './modules/ChooseButton'
import SearchPage from './Route/SearchPage'
import SearchDetail from './modules/SearchDetail'
import GroupDetail from './modules/GroupDetail'
import RenderGroup from './modules/RenderGroup'

const App = () => {
  return (
    <div style={{fontFamily: 'kanit'}}>
      <Route />
      {/* <SearchPage /> */}
      {/* <SearchDetail /> */}
      {/* <GroupDetail /> */}
      {/* <ChooseButton /> */}
      {/* <DetailCard /> */}
      {/* <EnrollCard /> */}
      {/* <Login /> */}
      {/* <Custom/> */}
      {/* <EnrollClick /> */}
      {/* <DetailPage /> */}
      {/* <RenderGroup /> */}
    </div>
  );
}

export default App;

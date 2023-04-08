import logo from './logo.svg';
import './App.css';
import Card from './CardComponents/Card';
import User from './CardComponents/Users';

const DUMMY_USERS=[
  {
    id: 1,
    name: 'Lebron James',
    image: 'https://lalweb.blob.core.windows.net/public/lakers/product-marketing/web/player-page/2022-2023/2223_PlayerImage_James_1920x2304.jpg'
  },
  {
    id: 2,
    name: 'Anthony Davis',
    image: 'https://lalweb.blob.core.windows.net/public/lakers/product-marketing/web/player-page/2022-2023/2223_PlayerImage_Davis_1920x2304.jpg'
  },
  {
    id: 3,
    name: 'Derrick Rose',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Derrick_Rose_2.jpg/220px-Derrick_Rose_2.jpg'
  }
]

function App() {
  return (
      <>
        <User user_list={DUMMY_USERS}> </User>
      </>
  );
}

export default App;

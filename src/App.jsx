import './styles/App.css';
import DetailSection from './DetailSection';
import MainSection from './MainSection';
import Header from './Header';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className='container'>
        <DetailSection />
        <MainSection />
      </div>
    </>
  );
}

export default App;

import Footer from './components/Footer';
import Header from './components/Header';
import MainContents from './components/MainContents';
import MainText from './components/MainText';
import TopBar from './components/TopBar';
import TopMessage from './components/TopMessage';

function App() {
  return (
    <div className="App">
      <Header />
      <TopBar />
      <MainContents />
      <Footer />
    </div>
  );
}

export default App;

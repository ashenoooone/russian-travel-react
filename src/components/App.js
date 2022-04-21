import Cover from './Cover/Cover';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Intro from './Intro/Intro';
import Lead from './Lead/Lead';
import Photos from './Photos/Photos';
import Places from './Places/Places';

function App() {
  return (
    <div className='page'>
      <Header />
      <Lead />
      <Intro />
      <Photos />
      <Places />
      <Cover />
      <Footer />
    </div>
  );
}

export default App;

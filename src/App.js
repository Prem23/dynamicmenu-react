import './App.css';
import Navbar from './Navbar';
import ImageCarousel from './Imagecarousel';
import Image1 from'./image1.png';
import Image2 from'./image2.png';
import Image3 from'./image3.png';
import Image4 from'./image4.png';
import Image5 from'./image5.png';



const App = () => {
  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5
  ];

  return (
    <div className="App">
      <header className="App-header">
       <Navbar />
      </header>
      <ImageCarousel images={images} />
    </div>
  );
}

export default App;

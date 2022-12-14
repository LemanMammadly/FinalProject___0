import './App.css';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AddSlider from './adminpanel/slider/AddSlider';
import UpdateSlider from './adminpanel/slider/UpdateSlider';
import SliderDetail from './adminpanel/slider/SliderDetail';
import Admins from './adminpanel/Admins';
import AddPhotos from './adminpanel/photos/AddPhotos';
import PhotosDetail from './adminpanel/photos/PhotosDetail';
import UpdatePhotos from './adminpanel/photos/UpdatePhotos';
import AddProducts from './adminpanel/products/AddProducts';
import ProductDetail from './adminpanel/products/ProductDetail';
import UpdateProducts from './adminpanel/products/UpdateProducts';
import Lookbook from './pages/Lookbook/Lookbook';
import AddInstagram from './adminpanel/instagram/AddInstagram';
import InstagramDetail from './adminpanel/instagram/InstagramDetail';
import UpdateInstagram from './adminpanel/instagram/UpdateInstagram';
import LogoDetail from './adminpanel/Logo/LogoDetail';
import UpdateLogo from './adminpanel/Logo/UpdateLogo';
import SetingsDetail from './adminpanel/settingss/SetingsDetail';
import UpdateSetting from './adminpanel/settingss/UpdateSetting';
import SideBarDrop from './components/SideBarDropdown/SideBarDrop';
import About from './pages/About/About';
import Header from './components/Header/Header.jsx'
import Contact from './pages/Contact/Contact';
import AdressDetail from './adminpanel/adress/AdressDetail';
import UpdateAdress from './adminpanel/adress/UpdateAdress';
import MessageDetail from './adminpanel/message/MessageDetail';
import Fag from './pages/Fag/Fag';
import AddFags from './adminpanel/fags/AddFags';
import FagsDetail from './adminpanel/fags/FagsDetail';
import UpdateFags from './adminpanel/fags/UpdateFags';
import ScrollTop from './components/ScrollTop/ScrollTop';
import ShopPage from './pages/ShopPage/ShopPage';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Blog from './pages/Blog/Blog';



function App() {
  return (
   <BrowserRouter>
   <ScrollTop>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} exact/>
      <Route path='/sliderDetail' element={<SliderDetail/>} exact/>
      <Route path='/addSlider' element={<AddSlider/>}/>
      <Route path='/updateSlider/:id' element={<UpdateSlider/>} exact/>
      <Route path='/admin' element={<Admins/>}/>
      <Route path='/addphotos' element={<AddPhotos/>} exact/>
      <Route path='/photosDetail' element={<PhotosDetail/>}/>
      <Route path='/updatephotos/:id' element={<UpdatePhotos/>}/>
      <Route path='/addproducts' element={<AddProducts/>}/>
      <Route path='/productdetail' element={<ProductDetail/>}/>
      <Route path='/updateproducts/:id' element={<UpdateProducts/>}/>
      <Route path='/lookbook' element={<Lookbook/>}/>
      <Route path='/addInstagram' element={<AddInstagram/>}/>
      <Route path='/instagramdetail' element={<InstagramDetail/>}/>
      <Route path='/updateInstagram/:id' element={<UpdateInstagram/>}/>
      <Route path='/logodetail' element={<LogoDetail/>}/>
      <Route path='/updatelogo/:id' element={<UpdateLogo/>}/>
      <Route path='/settingdetail' element={<SetingsDetail/>}/>
      <Route path='/updatesettings/:id' element={<UpdateSetting/>}/>
      <Route path='/sidebardrop' element={<SideBarDrop/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/adressDetail' element={<AdressDetail/>}/>
      <Route path='/updateAdress/:id' element={<UpdateAdress/>}/>
      <Route path='/messageDetail' element={<MessageDetail/>}/>
      <Route path='/fags' element={<Fag/>}/>
      <Route path='/addfags' element={<AddFags/>}/>
      <Route path='/fagsDetail' element={<FagsDetail/>}/>
      <Route path='/updateFags/:id' element={<UpdateFags/>}/>
      <Route path='/shoppage' element={<ShopPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Register/>}/>
      <Route path='/blog' element={<Blog/>}/>
    </Routes>
    <Footer/>
    </ScrollTop>
   </BrowserRouter>
  );
}

export default App;

import SliderBar from './Components/Home/Slider/SliderBar'
import Navbar from './Components/Home/Navigation/Navbar'
import Header from './Components/Home/Navigation/Header'
import Jewellery from './Components/Home/jewellerys/Jewellery'
import Trending from './Components/Home/trendings/Trending'
import Summer from './Components/Home/Summersele/Summer'
import Followusinsta from './Components/Home/Followinsta/Followusinsta'
import SellingProduct from './Components/Home/MostSeling/SellingProduct'
import MostSellingProduct from './Components/Home/MostSeling/MostSellingProduct'
import ProductProcess from './Components/Home/ProcessAll/ProductProcess'
import Footer from './Components/Home/Footer/Footer'
import Copyright from './Components/Home/Footer/Copyright'

const Index = () => {

  const titlemain = {

    heading: {
      trending: "Treanding",
      bestseler: "Best Seler",
    },
    subtitle: {
      topviwe: "Top view this week",
      topsel: "Top sale in  this week"
    }

  }
  return (
    <>
      <Header />
      <Navbar />
      <SliderBar />
      <Jewellery />
      <Trending trending={titlemain.heading.trending} topviwe={titlemain.subtitle.topviwe} />
      <Summer />
      <Trending trending={titlemain.heading.bestseler} topviwe={titlemain.subtitle.topsel} />
      <Followusinsta />
      <SellingProduct /> 
      <MostSellingProduct /> 
      <ProductProcess />  
      <Footer />  
      <Copyright />    
    </>)

}

export default Index
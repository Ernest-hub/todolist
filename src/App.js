import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Content from'./components/Content';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="main-sect">

    <Header name={'Smith'} />
   \
    
    <section className="mid-sect">


        <Sidebar items={['Dashboard', 'Members', 'Settings', 'Account']} />
        <Content titles={['Students', 'Teachers', 'Department', 'Classes']} />  
        

    </section>

    <Footer />


    </div>
  );
}

export default App;

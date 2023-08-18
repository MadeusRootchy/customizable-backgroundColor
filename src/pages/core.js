
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import Body from '../components/body.js';


function Core() {

  const items = ["Home", "Contact", "About"];
  const group = "Coding Club";
  return (
    <div className="App">
      <Header Home={items[0]} Contact={items[1]} About={items[2]}/>    
      <Body />    
      <Footer group={group}/>
      

    </div>
  );
}

export default Core;

import './App.css';
import Body from './Body';
import Header from './Header';
import Courses from './Courses';

function App() {
  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet"></link>
      <Header/>    
      <Body/>
      <Courses/>
    </div>
  );
}

export default App;

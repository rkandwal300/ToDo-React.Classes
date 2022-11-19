import { PureComponent } from 'react';
import { ReactNode } from 'react';
import ToDo11 from './Todo_Classes/Todo11';

class App1 extends PureComponent{

  render(): ReactNode { 
    return(
      <div className="App">
      <ToDo11 name = "rahul" />

      
      {/* <ToDo1  /> */}
    </div>
    )
  }
}


// function App() {


//   return (

//     <div className="App">
//       <ToDo1  />
//     </div>
//   )
// }

export default App1

import Header, { msg } from "./Header.js";
import { data } from "./News.js";
import myList from "./List.js";

function App() {
  return (
    <div>
      <Header />

      <p>
        SDJFS SFJOWEIR jforwoei foeir ftwe fweouasjf sufowesafjfiosj
        jsdiufowsafj
      </p>
      <h3>{data.title}</h3>
      <p>{data.details}</p>

      <h1>All News</h1>
     <ul>
        {myList.map(function (item) {
          return <li>
            <h1>Title:{item.title}</h1>
            <p>url: {item.url}</p>
            
            
            </li>;
        })}
        </ul>
     
    </div>
  );
}

export default App;

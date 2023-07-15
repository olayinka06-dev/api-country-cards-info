import './Style.css';
import React from 'react';
import {MdOutlineNightlight} from "react-icons/md"
// , MdOutlineLightMode


function Navigation({ handle }) {

  // const [view, setview] = useState(false);

  return (
    <nav>
      <h2>Where in the World?</h2>
      <button onClick={handle}><MdOutlineNightlight className='icon'/> Dark Mode</button>
                {/* view ? <button onClick={handle}><MdOutlineLightMode className='icon'/>Light Mode</button> : */}
      
    </nav>
  );
}
export default Navigation;
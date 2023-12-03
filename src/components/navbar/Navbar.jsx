
import  '../navbar/Navbar.scss';
import logo  from'../../helper/logo.png'



const Navbar = ({menu}) => {  
    console.log(menu); 
  return (
    <div className="navbarContainer">
      <img src={logo} alt="" width="100px"/>
 <ul>
      {menu.map((item)=>(
        <li key={item}>{item.toUpperCase()}</li>
      ))}
    </ul>
    </div>
    
  )
}

export default Navbar

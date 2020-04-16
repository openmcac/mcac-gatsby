import React from "react"
import logo from "./logo.png"


const Footer = () => {
  return (
    <div className="text-center text-gray-500 mt-24 pb-12">
      <img src={logo} alt="" className="object-contain w-12 mx-auto mb-6 opacity-25" />
      <p className="uppercase tracking-widest text-sm">Montreal Chinese Alliance Church</p>
      <p className="text-sm">
        <a href="https://www.google.ca/maps/place/13+Rue+Finchley,+Hampstead,+QC+H3X+2Z4/@45.4791032,-73.6348992,17z/data=!3m1!4b1!4m2!3m1!1s0x4cc917507e7efe21:0x334fc9316d4951e3">13 Finchley, Hampstead, Québec H3X 2Z4</a>
        &nbsp;| <a href="tel:5144822703">514.482.2703</a><br />
        <a href="http://montreal-cac.org/" className="tracking-wider">滿地可華人宣道會</a> |&nbsp;
        <a href="http://mcac-m.blogspot.ca/" className="tracking-wider">教会网站</a> |&nbsp;
        <a href="https://mcac.herokuapp.com/login">Login</a>
      </p>

      <p className="text-xs mt-6 italic"> 
        Because God loves us, we will love Jesus, love His people, and love the
        world, for Jesus' sake.
      </p>
    </div>
  )
}

export default Footer


import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {companyDetails} from "../../config"
import { navMenu } from "../../config";
import styles from "../navbar/Navbar.module.scss"
export class Navbar extends Component {
      constructor(props) {
        super(props);
        this.state = {
          showMenu: false,
          colorChange: false,
        };
        this.myFunction = this.myFunction.bind(this);
      }

      componentDidMount() {
        window.addEventListener("scroll", this.changeNavbarColor);
      }

      componentWillUnmount() {
        window.removeEventListener("scroll", this.changeNavbarColor);
      }

      myFunction() {
        console.log("button click");
        this.setState((prevState) => ({
          showMenu: !prevState.showMenu,
        }));
      }

      changeNavbarColor = () => {
        if (window.scrollY >= 80) {
          this.setState({
            colorChange: true,
          });
        } else {
          this.setState({
            colorChange: false,
          });
        }
      };
      button ={
        url:"/form",
        btn: "Apply Now"
      }
    render(){
        return (
            <div>
              <nav className={`${styles.navbar} ${this.state.colorChange ? styles.colorChange : ""}`}>
                <div className={styles.top_nav}>
                  <div className="container mx-auto"> 
                  <div className={styles.top_wrap}>
                    <div className={styles.left}>
                      <h5><i className="fa-solid fa-phone"></i>{companyDetails.contactNo}</h5>
                      <h5><i className="fa-solid fa-envelope"></i>{companyDetails.email}</h5>
                    </div>
                    <div className={styles.right}><Link to={this.button.url} >{this.button.btn}</Link></div>
                  </div>  
                  </div>
                </div>
                <div className="container mx-auto">
                  <div className="nav-wrap flex justify-between items-center">
                    <div className="logo"><img className='w-20' src={companyDetails.logoUrl} alt="" /></div>
                    <div className={styles.nav_menu}>
                      <ul className='text-[#06283D] list-none'>
                        {navMenu.map((ele) =><li className='inline px-2'>
                          <Link className='text-[1.05rem] uppercase tracking-wide font-medium' key={ele.name} to={ele.url}>{ele.name}</Link></li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
      );
}
}

export default Navbar

import React from 'react'
import styles from "../footer/Footer.module.scss"
import { footerInfo, favIcon, navMenu } from "../../config";
import {Link} from "react-router-dom"
function Footer() {
  return (
    <div>
      <footer>
        <div className="container mx-auto">
          <div className={styles.footer_wrap}>
            {footerInfo.map((ele)=>{
              return(
                <div className={styles.items}>
                  <img src={ele.logoUrl} alt="" />
                  <p>{ele.para}</p>
                  <ul className={styles.social_icon}>{ele.favIcon.map(icon=> icon.url!="" && <li><Link to={icon.url} target="_blank"><i className={icon.name}></i></Link></li>)}</ul>
                  <h1>{ele.head}</h1>
                  <ul>{ele.menu.map(i => i.name!="" && <li><Link to={i.url}>{i.name}</Link></li>)}</ul>
                  <ul>{ele.contact.map(i => <li><i className={i.icon}></i>{i.name}</li>)}</ul>
                </div>
              )
            })}
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Footer

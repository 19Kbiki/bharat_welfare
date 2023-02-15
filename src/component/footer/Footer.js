import React from 'react'
import styles from "../footer/Footer.module.scss"
import { footerInfo } from '../../config'
function Footer() {
  return (
    <div>
      <footer>
        <div className="container mx-auto">
          <div className="footer-wrap">
            {footerInfo.map((ele)=>{
              return(
                <>
                {footerInfo.map((ele)=>{
                  return(
                    <>
                    </>
                  )
                })}
                </>
              )
            })}
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Footer

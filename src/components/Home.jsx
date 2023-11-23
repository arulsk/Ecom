import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
          <div className="home">
            <div className="home_Container">
                <img src="https://assets.aboutamazon.com/dims4/default/90ac173/2147483647/strip/true/crop/1279x720+0+0/resize/1320x743!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2Fc4%2F24%2F88c352414e02958305b1fc838001%2Fmain-banner-smbhav.jpg" width= "100px" alt="" className="home_Img" />
                <div className="home_row">
                <Product id = "1878" title = "EGate i9 Pro-Max, 1080p Native Full HD Projector for Home with 4k support, 4500 Lumen LED, 210" price = {7990} rating = {4} img = "https://m.media-amazon.com/images/I/71AaLyEG9sL._SX450_.jpg"/>
                
                <Product id = "289798" title = "OnePlus 11 5G (Eternal Green, 16GB RAM, 256GB Storage)" price = {61999} rating = {3} img = "https://m.media-amazon.com/images/I/414+xRBltFL._SY300_SX300_.jpg" />
                </div>
                <div className="home_row">
                <Product id = "3586" title = "realme Buds T300 Truly Wireless in-Ear Earbuds with 30dB ANC, 360° Spatial Audio Effect, 12.4mm Dynamic Bass Boost Driver with Dolby Atmos Support, Upto 40Hrs Battery and Fast Charging" price = {1999} rating = {5} img = "https://m.media-amazon.com/images/I/61ZEQXGTepL._SY450_.jpg" />
                <Product id = "4870" title = "OnePlus 108 cm (43 inches) Y Series 4K Ultra HD Smart Android LED TV 43Y1S Pro (Black)" price = {24999} rating = {2} img = "https://m.media-amazon.com/images/I/819SRH2DKBL._SY450_.jpg" />
                <Product id = "5687" title = "Oraimo SmartShaver Premium Cordless Electric Shaver for men Built in pop-up Trimmer,Super Fast Charge 90 minutes Runtime with Digital Battery Indicator,3 Head 360° Rotary Shaver for Dry Shave" price = {999} rating = {4} img = "https://m.media-amazon.com/images/I/71-C3hIns9L._SX679_.jpg"/>
                </div>
                <div className="home_row">
                <Product id = "6709" title = "Jaspo Plastic Cricket Full Size Bat (34” X 4.5” inch) for All Age Groups (CRIC-Holic BAT)" price = {500} rating = {4} img = "https://m.media-amazon.com/images/I/41XiS9rhY4L._SX300_SY300_QL70_FMwebp_.jpg"/>
                </div>
                
            </div>
            
        </div>
    
  )
}

export default Home
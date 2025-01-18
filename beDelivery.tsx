
import React, { useState }from "react";
import cls from "./beDelivery.module.scss";
import { useSettings } from "contexts/settings/settings.context";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Pagination,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Simple from '../../components/Business/simple'
import Intergration from '../beDelivery/intergration'
import DeliveryForm from '../beDelivery/deliverForm'
import Image from 'next/image';
import Tailor from '../beDelivery/tailor'
import be from './be.jpeg'
import cour from './cour.jpeg'
import one from './one.png'
import two from './two.png'
import three from './three.png'

export default function BeDelivery() {
  const { settings } = useSettings();
  return (
    <div className={cls.container}>
      {/* <div className="container"> */}
  <div className={cls.wrapper}>
    <div className={cls.content}>
      <div>
      <h1 className={cls.title}>Looking For Delivery Driver Jobs?
      </h1>
  
    <p className="tests">Whether You Are A one Man Show or An Agency, We
       have a Space for You. Join the Fastest Marketplace for Food, Grocery and Hospitality Businesses</p>  
       <Image src={be} alt="" width={480} height={450}/>
       <div className={cls.appSection}>
          <a href={settings?.customer_app_ios} target="_blank" rel="noopener noreferrer">
            <img src="/images/app-store.webp" alt="App store" />
          </a>
          <a href={settings?.customer_app_android} target="_blank" rel="noopener noreferrer">
            <img src="/images/google-play.webp" alt="Google play"  />
          </a>
        </div> 
    </div>
    <div>
      <DeliveryForm/>
    </div></div>
     <Tailor/>
     <Simple/>
      <section className={cls.flexibles}>
        <div className={cls.flexi}>
      <h3>  Flexible schedules</h3>
     <p className="tests">   Set your own schedule and deliver whenever you want, for as long as you want. You’re in control!</p>
        </div>
        <div>
          <Image src='https://6ammart-react.6amtech.com/_next/static/media/delivery-man.c145d2d3.svg'alt="" width={300}height={300}/>
          </div>
        </section>
        <section className={cls.flexibles}>
        <div>
          <Image src='https://6ammart-react.6amtech.com/_next/static/media/seller.2044003e.svg' alt="" width={300} height={200}/>
          </div>
        <div>
      <h3>  Easy way to make money</h3>
     <p className="tests">  Earn money as a rider, and enjoy extra income for referring new riders or delivering during weekends and late hours</p>
        </div>
        </section>
        <div className={cls.schedules}>
<div>
  <Image src={one} alt='' width={100} height={100}/>
<h5>Choose your schedules</h5>
     <p className="tests">Deliver whenever you want - whether it’s one hour, a weekend or every 2 weeks</p>
  </div>
  <div>
  <Image src={two} alt='' width={100} height={100}/>
<h5>Insurance, just for you</h5>
<p className="tests">An insurance that supports you gives you the peace of mind you deserve.</p>
  </div>
  <div>
  <Image src={three}alt=''width={100}height={100}/>
<h5>Recurrent earnings</h5>
<p className="tests">Your earnings are automatically transferred to your bank account every week.</p>
  </div>
          </div>
          <div className={cls.require}>
            <div>
      <h2>    FoodiMann rider requirements:</h2>
      <ul>
<li>Be at least 18 years old.</li>
<li>Own a vehicle and a smartphone.</li>
<li>Have a valid work permit.</li>
</ul></div>
<div>
  <Image src="https://www.foodchow.com/images2/fc-for-rest-3.png" alt="" width={200}height={200}/>
  </div>
            </div>
<div className={cls.joined}>
  </div>
  <Intergration/>
   <div className={cls.deliverQuestions}>  
    <h2>Frequently Asked Questions</h2>
<details>
  <summary>
  <h5>What do you need to start delivering using FoodiMann?</h5>
    </summary>
    <p>You need to be at least 18 years old, hold a valid work permit and have a smartphone
       (iOS or Android) to start delivering. No delivery experience needed!</p>
       <p>Other compulsory permits and insurances may be needed depending on whether you want to deliver by car, scooter, bicycle, or by foot.</p>
  </details>
  <details>
  <summary>
  <h5>How long does the registration process take?</h5>
    </summary>
   <p> It typically takes no more than 30 minutes to complete the registration form and upload the documents.</p>
<p>After you register, your profile will be validated for security reasons. 
  If you are verified, you are ready to get your material and download the Courier App.</p>
  </details>

  <details>
  <summary>
  <h5>How do I get my earnings?</h5>
    </summary>
   <p> Your earnings will be transferred to the bank account you provided when you registered in FoodiMann.</p>
<p>At the beginning of a billing period, your earnings will be transferred to your bank account. The transfer might take up to 1 to 2 business days to process depending on your bank account.
</p>
  </details>  <details>
  <summary>
  <h5>Why should I register as a delivery driver in FoodiMann?</h5>
    </summary>
   <p> Being a delivery driver with FoodiMann makes you experience the freedom to be in charge of your own decisions, you can set your schedule and deliver when it suits you. Whether
     its one hour a day, only on weekends, or 6 days a week; you decide.
   .</p>
  </details>   </div>
        </div>
    
  
     
        </div>
   
  );
}

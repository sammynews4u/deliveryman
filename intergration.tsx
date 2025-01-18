import React, { useState } from "react";
import exten from '../beDelivery/exten.png'
import Image from 'next/image';
import com from '../beDelivery/com.png'


const Intergration =()=>{
  const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    const images = [
        "https://jungleworks.com/wp-content/uploads/2022/09/extensions1Img.png", 
        "https://jungleworks.com/wp-content/uploads/2022/09/extensions2Img.png", 
        "https://jungleworks.com/wp-content/uploads/2022/09/extensions3Img.png", 
    ];
    return(
        <>
       <section className="integration">
            <h2>Powerful Integrations</h2>
            <p>Extend the functionalities of your business apps and software in minutes</p>
            <div className="integration-content">
                <div>
                    <div
                        className={`integrate ${activeIndex === 0 ? "active" : ""}`}
                        onClick={() => handleClick(0)}
                    >
                        <h4>Ordering Platform</h4>
                        <p className="tests">
                            Manage seamless orders and govern the end-to-end ordering and delivery
                            process with in-house ordering platform as well as 45+ POS integrations
                        </p>
                    </div>
                    <div
                        className={`integrate ${activeIndex === 1 ? "active" : ""}`}
                        onClick={() => handleClick(1)}
                    >
                        <h4>Payment Gateways</h4>
                        <p className="tests">
                            Serve your customers with swift and convenient payment options for their
                            business transactions
                        </p>
                    </div>
                    <div
                        className={`integrate ${activeIndex === 2 ? "active" : ""}`}
                        onClick={() => handleClick(2)}
                    >
                        <h4>SMS Gateways and WhatsApp</h4>
                        <p className="tests">
                            Regulate end-to-end communications between your business and customers
                            with ease
                        </p>
                    </div>
                </div>
                <div>
                    <Image
                        src={images[activeIndex]}
                        alt="Integration"
                        width={600}
                        height={600}
                    />
                </div>
            </div>
        </section>     
<section className="expand-intro">
        <div className="expand">
<div>
    <Image src={com} alt="" width={600}height={500}/>
    </div>
            <div >
      <h2>  Expand your limits in last-mile with Delivery Orchestration.</h2>
<p>Increase Capacity, Capability and Reduce Cost Orchestrate deliveries effectively and efficiently through 
    third-party as well as in-house fleet with FoodiMann Delivery Orchestration software.</p></div>
    </div>    </section>
        </>
    )
}
export default Intergration
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation,Pagination,Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// // import { Swiper } from 'swiper/react';
// import Image from 'next/image';
// const Tailor = ()=>{
//     return(
//         <>
//         <section className='tailor'>
//       <h1>Tailor-made Solutions for Every Business</h1>
//       <Swiper  className='slide'
//             modules={[Pagination, Autoplay]}
//                         spaceBetween={15}
//                         autoplay={{ delay: 1000, disableOnInteraction: false }}
//                         speed={300} 
//                         slidesPerView={4}
//                         loop={true}
//                         breakpoints={{
//                             640: {
//                                 slidesPerView: 1
//                             },
//                             900: {
//                                 slidesPerView: 2
//                             },
//                             1100: {
//                                 slidesPerView: 4
//                               },
//                             }}>
      
//                <div className="carousel-inner">
//                  <div className="item">
//                    <ul className="solutionListt adjustbxflex aligncenterflex" id="solutionListt">
//                        <SwiperSlide  className="solutionname">
//                         <a href="/tookan/pickup-and-delivery-software/">
//                           <Image src="/wp-content/uploads/2021/03/pD.svg" alt="PickUp &amp; Delivery"width={100}height={100}/>
//                            <p>PickUp & Delivery</p>
//                         </a>
                   
                    
//                         <a href="/tookan/food-delivery-management-software/">
//                           <Image src="https://jungleworks.com/wp-content/uploads/2021/03/food-delivery.svg" alt="Food Delivery"width={100}height={100}/>
//                            <p>Food Delivery</p>
//                         </a>
                   
//                         <a href="/medical-pharmacy/">
//                            <Image src="/wp-content/uploads/2021/03/medical-pharmacy.svg" alt="Medical Pharmacy"width={100}height={100}/>
//                            <p>Medical Pharmacy</p>
//                         </a>
                   
//                         <a href="/grocery-delivery/">
//                           <Image src="https://jungleworks.com/wp-content/uploads/2021/03/grocery-delivery.svg" alt="Grocery Delivery"width={100}height={100}/>
//                            <p>Grocery Delivery</p>
//                         </a>
                   
//                         <a href="/services/beauty/">
//                           <Image src="https://jungleworks.com/wp-content/uploads/2021/03/beauty-service.svg" alt="Beauty Service"width={100}height={100}/>
//                            <p>Beauty Service</p>
//                         </a>
                  
//                         <a href="/services/flower-delivery-management-software/">
//                           <Image src="https://jungleworks.com/wp-content/uploads/2021/03/flower-delivery.svg" alt="Flower Delivery"width={100}height={100}/>
//                            <p>Flower Delivery</p>
//                         </a>
                   
//                         <a href="/services/home-services/">
//                           <Image src="https://jungleworks.com/wp-content/uploads/2021/03/home-service.svg" alt="Home Service"width={100}height={100}/>
//                            <p>Home Service</p>
//                         </a>
                    
//                         <a href="/tookan/fleet-management-system/">
//                           <Image src="https://jungleworks.com/wp-content/uploads/2021/03/transportmanagment.svg
// " alt="Fleet Management"width={100}height={100}/>
//                            <p>Fleet Management</p>
//                         </a>
                  
//                         <a href="/cleaning-service-app/">
//                           <Image src="https://jungleworks.com/wp-content/uploads/2021/03/cleaning-service.svg" alt="Cleaning Service"width={100}height={100}/>
//                            <p>Cleaning Service</p>
//                         </a>
                    
//                         <a href="/tookan/carwash-software/">
//                           <Image src="https://jungleworks.com/wp-content/uploads/2021/03/flower-delivery.svg" alt="Car Wash"width={100}height={100}/>
//                            <p>Car Wash</p>
//                         </a>
//                      </SwiperSlide>
//                    </ul>
//                  </div>
             
//                  <div className="item active">
//                   <ul className="solutionListt adjustbxflex aligncenterflex" id="solutionListt1">
//                        <SwiperSlide  className="solutionname">
//                         <a href="/services/movers-and-packers/">
//                           <Image src="https://jungleworks.com/wp-content/uploads/2021/03/mover-packers.svg" alt="Movers &amp; Packers"width={100}height={100}/>
//                            <p>Movers & Packers</p>
//                         </a>
//                      </SwiperSlide>
//                        <SwiperSlide  className="solutionname">
//                         <a href="/enterprise/transport/">
//                           <Image src="/wp-content/uploads/2021/03/transport.svg" alt="Transport"width={100}height={100}/>
//                            <p>Transport</p>
//                         </a>
//                      </SwiperSlide>
//                        <SwiperSlide  className="solutionname">
//                         <a href="/enterprise/healthcare/">
//                           <Image src="https://jungleworks.com/wp-content/uploads/2021/03/healthcare.svg" alt="Transport"width={100}height={100}/>
//                            <p>Healthcare & Fitness</p>
//                         </a>
//                      </SwiperSlide>
//                        <SwiperSlide  className="solutionname">
//                         <a href="/enterprise/oil-gas-dispatch-management/">
//                           <Image src="/wp-content/uploads/2021/03/oil-gas.svg" alt="Oil &amp; Gas Managemen"width={100}height={100}/>
//                            <p>Oil &amp; Management</p>
//                         </a>
//                      </SwiperSlide>
//                        <SwiperSlide  className="solutionname">
//                         <a href="/enterprise/construction-industry/">
//                           <Image src="https://jungleworks.com/wp-content/uploads/2021/03/construction-1.svg" alt="Transport"width={100}height={100}/>
//                            <p>Construction</p>
//                         </a>
//                      </SwiperSlide>
//                        <SwiperSlide  className="solutionname">
//                         <a href="/enterprise/retail/">
//                           <Image src="https://jungleworks.com/wp-content/uploads/2021/03/e-commerce-retail.svg" alt="E-commerce &amp; Retail"width={100}height={100}/>
//                            <p>E-commerce & Retail</p>
//                         </a>
//                      </SwiperSlide>
//                        <SwiperSlide  className="solutionname">
//                         <a href="/tookan/laundry/">
//                           <Image src="https://jungleworks.com/wp-content/uploads/2021/03/laundry.svg" alt="Laundry"width={100}height={100}/>
//                            <p>Laundry</p>
//                         </a>
//                      </SwiperSlide>
//                        <SwiperSlide  className="solutionname"> 
//                         <a href="/tookan/courier-dispatch-software/">
//                           <Image src="https://jungleworks.com/wp-content/uploads/2021/03/courier-delivery.svg" alt="Courier Delivery"width={100}height={100}/>
//                            <p>Courier Delivery</p>
//                         </a>
//                      </SwiperSlide>
//                        <SwiperSlide  className="solutionname">
//                         <a href="/tookan/transport-management-software/">
//                          <Image src="https://jungleworks.com/wp-content/uploads/2021/03/transportmanagment.svg
// " alt="Transport Management"width={100}height={100}/>
//                            <p>Trans Management</p>
//                         </a>
//                      </SwiperSlide>
//                    </ul>
//                  </div></div>
//                      </Swiper>
             
         
//          </section>
//         </>
//     )
// }
// export default Tailor;


import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

const Tailor = () => {
  const solutions = [
    // {  src: "	https://jungleworks.com/wp-content/uploads/2021/03/pD.svg", text: "PickUp & Delivery" },
    {  src: "https://jungleworks.com/wp-content/uploads/2021/03/food-delivery.svg", text: "Food Delivery" },
    {  src: "https://jungleworks.com/wp-content/uploads/2021/03/medical-pharmacy.svg", text: "Medical Pharmacy" },
    { src: "https://jungleworks.com/wp-content/uploads/2021/03/grocery-delivery.svg", text: "Grocery Delivery" },
    {  src: "https://jungleworks.com/wp-content/uploads/2021/03/beauty-service.svg", text: "Beauty Service" },
    { src: "https://jungleworks.com/wp-content/uploads/2021/03/flower-delivery.svg", text: "Flower Delivery" },
    { src: "https://jungleworks.com/wp-content/uploads/2021/03/home-service.svg", text: "Home Service" },
    { src: "https://jungleworks.com/wp-content/uploads/2021/03/transportmanagment.svg", text: "Fleet Management" },
    { src: "https://jungleworks.com/wp-content/uploads/2021/03/cleaning-service.svg", text: "Cleaning Service" },
    {  src: "https://jungleworks.com/wp-content/uploads/2021/03/flower-delivery.svg", text: "Car Wash" },
  ];

  // Split solutions into two rows
  const firstRow = solutions.slice(0, 5);
  const secondRow = solutions.slice(4);

  return (
    <section className="tailor">
      <h1>Tailor-made Solutions for Every Business</h1>
      <div className="tailor-slider">
        {/* First Row */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={15}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          speed={500}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            900: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
        >
          {firstRow.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="item-tailor">
                <Image src={item.src} alt={item.text} width={100} height={100} />
                <p>{item.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Second Row */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={15}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          speed={500}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            900: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
        >
          {secondRow.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="item-tailor">
             
                <Image src={item.src} alt={item.text} width={100} height={100} />
                <p>{item.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Tailor;

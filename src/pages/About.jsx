import React from 'react'

const About = () => {
  return (
    <section>
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
      <div className="w-full sm:p-4 px-4 mb-6">
        <h1 className="font-medium text-4xl mb-2">
         About Us
        </h1>
        <div className="leading-relaxed">
        At our online store, we offer a wide range of high-quality products to meet your shopping needs. Whether you're looking for fashion, electronics, home appliances, or any other item, we have it all covered.

Thank you for choosing our Shopping Cart. Start exploring now and indulge in a delightful shopping experience!
        </div>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2 ">
        <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
        <p className="leading-relaxed">Users</p>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2 ">
        <h2 className="title-font font-medium text-3xl text-gray-900">1.8K</h2>
        <p className="leading-relaxed">Subscribes</p>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 className="title-font font-medium text-3xl text-gray-900">35</h2>
        <p className="leading-relaxed">Downloads</p>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 className="title-font font-medium text-3xl text-gray-900">4</h2>
        <p className="leading-relaxed">Products</p>
      </div>
    </div>
    <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
      <img
        className="object-cover object-center w-full h-full"
        src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg"
        alt="stats"
      />
    </div>
  </div>
</section>

  )
}

export default About
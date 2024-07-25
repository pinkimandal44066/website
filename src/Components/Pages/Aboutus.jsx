import Scrolling from '../Scrolling'
import img2 from '../../../public/img2.jpg';
import Ourteam from '../Ourteam';
const Aboutus = () => {
  

  
  return (
    <>
    {/* <div className="flex   items-center justify-evenly ">
      <div className="max-w-screen-xl lg:mx-auto mx-5 rounded-lg  ">
        <div className="px-4 py-2">
          <h2 className="text-lg font-semibold text-gray-800">Heading</h2>
          <p className="text-gray-600 mt-1 w-full">Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Est a ad et cum aliquam non, asperiores amet minus tempore neque 
            suscipit labore? Cupiditate deleniti rem sunt tenetur? Ut, fugiat porro.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt soluta architecto molestias ex magni nam dolor numquam dignissimos officia! Aspernatur, saepe animi? Similique cupiditate repellendus totam tempora dolore mollitia odit.</p>
          <p className="text-gray-600 mt-1">Second paragraph goes here...</p>
        </div>
      </div>
      <div className="flex">
        <img className="object-cover w-48 h-48 rounded-lg shadow-md" src={img2} alt="" />
      </div>
    </div> */}
    

    <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col lg:mt-10 mt-5">
  <div className=" max-w-screen-xl lg:mx-40 mx-5 lg:w-1/2 md:w-1/2 sm:w-full rounded-lg">
    <div className="px-4 py-2">
      <h2  style={{ fontFamily: 'PTSerif-Bold' }} className="text-2xl lg:text-4xl font-semibold text-gray-800 ">Heading</h2>
      <p className="text-gray-600 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est a ad et cum aliquam non, asperiores amet minus tempore neque suscipit labore? Cupiditate deleniti rem sunt tenetur? Ut, fugiat porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt soluta architecto molestias ex magni nam dolor numquam dignissimos officia! Aspernatur, saepe animi? Similique cupiditate repellendus totam tempora dolore mollitia odit.</p>
    </div>
  </div>
  <div className="flex justify-center lg:w-1/2 md:w-1/2 sm:w-full">
    <img className="object-cover w-48 h-48 rounded-full shadow-md   " src={img2} alt="" />
  </div>

</div>

<div>
<p style={{ fontFamily: 'PTSerif-Bold' }} className='text-sm lg:mx-40 mx-5  mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nemo, magni enim nostrum quos non et numquam ullam facilis debitis soluta quasi ducimus voluptates. Accusamus quasi officiis consequatur in temporibus?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt deleniti reprehenderit ex,
                 eos ea dolorem velit eveniet autem laboriosam asperiores fugit tenetur unde ducimus. Iste
                  sed laudantium quo praesentium commodi.
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non distinctio omnis autem. Quisquam accusamus nisi asperiores, voluptatum maxime natus delectus, nemo placeat exercitationem magni fuga cumque animi laboriosam suscipit voluptatibus.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo cum, fugit sapiente placeat unde totam aliquid eligendi quos reprehenderit, accusantium, possimus deserunt error iusto beatae delectus ullam consequuntur consequatur sit?</p>

</div>





<div className="bg-gray-100 py-14 mt-5">
      <div className="text-center mb-12">
        <h2 style={{ fontFamily: 'PTSerif-Bold' }}  className="text-3xl font-semibold">WHY CHOOSE US?</h2>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-8 bg-white shadow-lg rounded-lg">
          <div className="mb-4">
      
            <div className="text-4xl">🎨</div>
          </div>
          <h3  style={{ fontFamily: 'PTSerif-Bold' }} className="text-xl font-semibold mb-4">WE'RE CREATIVE</h3>
          <p>We believe in creativity & Innovation and We design highly responsive websites with high quality graphic design and Best creative Search Engine Optimization (SEO) keywords.</p>
        </div>
        <div className="text-center p-8 bg-white shadow-lg rounded-lg">
          <div className="mb-4">

            <div className="text-4xl">⏰</div>
          </div>
          <h3  style={{ fontFamily: 'PTSerif-Bold' }}  className="text-xl font-semibold mb-4">WE'RE PUNCTUAL</h3>
          <p>We value time that's why we deliver the product exactly what you are looking for withinn the time frame Being punctual helps us to establish our reputation as a dependable and consistent company.</p>
        </div>
        <div className="text-center p-8 bg-white shadow-lg rounded-lg">
          <div className="mb-4">
  
            <div className="text-4xl">💼</div>
          </div>
          <h3  style={{ fontFamily: 'PTSerif-Bold' }}  className="text-xl font-semibold mb-4">WE'RE COST EFFECTIVE</h3>
          <p>We understand the value of Money that is why we create best responsive design under your Budget. We takes your budget first and then we will provide you the product which is best under that budget.</p>
        </div>
      </div>
    </div>

    <Ourteam />
    </>
  )
}

export default  Scrolling(Aboutus); 
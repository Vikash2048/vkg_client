

const Contact = () => {

  return (
    <div id="Contact" className="bg-slate-200 w-full h-auto flex flex-col items-center py-4">
        <div className="mb-8">
            <p className=" font-semibold text-2xl">CONTACT US</p>
            <div className=" w-38 h-1 border-b-4 border-red-700 "></div>
        </div>

        <div className="w-full h-auto flex flex-col md:flex-row items-center relative px-10">
            <div className="md:w-1/2 md:block hidden h-auto flex flex-col items-center md:px-10 md:py-10 ">
                <h3 className="md:text-3xl md:block hidden font-semibold">Contact Information</h3>
                <div className="flex flex-col  md:flex-row items-center   my-8 gap-4">
                    <img src="/images/placeholder.png"/>
                    <div >
                        <p className="text-xl font-medium">Our location</p>
                        <p>28, Tower B2, Spaze IT Park, Sector 49, Sohna Road, Gurugram 122001 (Haryana)</p>
                    </div>

                </div>
                <div className="flex flex-col md:flex-row items-center my-8 gap-4">
                    <img src="/images/envelope.png"/>
                    <div >
                        <p className="text-xl font-medium">Our Email</p>
                        <p>vkg@vkghumancapital.com</p>
                    </div>
                    
                </div>
                <div className="flex flex-col md:flex-row items-center my-8 gap-4">
                    <img src="/images/telephone.png"/>
                    <div >
                        <p className="text-xl font-medium">Our Mobile</p>
                        <p>+91-8585937122, +91-8368731450</p>
                    </div>
                    
                </div>
            </div>
            <div className="md:w-1/2 h-auto rounded-2xl bg-slate-100 shadow-lg shadow-red-500/50 flex flex-col px-16 py-10 gap-1">
                <p className="text-lg font-medium"> ANY QUESTIONS?</p>
                <h3 className="text-3xl font-bold">Send us a Message</h3>
                <form  className="flex flex-col " action="https://api.web3forms.com/submit" method="post">
                <input type="hidden" name="access_key" value="3899889e-9286-40bb-9157-592be704a827"></input>
                    <input className="px-2 py-4 border-b-[2.5px] border-slate-200 bg-transparent text-lg outline-none" name="name" placeholder="Name" type="text"/>
                    <input className="px-2 py-4 border-b-[2.5px] border-slate-200 bg-transparent text-lg outline-none" name="email" placeholder="Email" type="text"/>
                    <input className="px-2 py-4 border-b-[2.5px] border-slate-200 bg-transparent text-lg outline-none" name="phone" placeholder="Phone" type="text"/>
                    <textarea className="px-2 py-4 border-b-[2.5px] border-slate-200 bg-transparent text-lg outline-none" name="message" id="" cols={30} rows={4} placeholder="Message / Position Applying For"></textarea>
                    <button className="bg-red-600 w-max px-4 py-4 text-xl font-medium rounded-lg text-white mt-4" type="submit" >Get In Touch</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
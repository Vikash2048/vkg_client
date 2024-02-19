

const Footer = () => {
  return (
    <div className="w-full h-auto md:hidden block bg-slate-900 text-white flex items-center pl-5 py-4">

        <div className="flex flex-col w-3/4 gap-3 ">
            <div className="flex items-center">
                <img src="/images/placeholder.png" alt="" className="h-8 w-8 rounded mr-2"/>
                <p className="text-sm">28, Tower B2 Spaze IT Park, Sector 49, Sohna Road, Gurugram 122001 (Haryana)</p>
            </div>
            <div className="flex items-center">
                <img src="/images/mail.png" alt="" className="h-8 w-8 rounded mr-2"/>
                <p className="text-sm">vkg@vkghumancapital.com</p>
            </div>
            <div className="flex items-center">
                <img src="/images/telephone.png" alt="" className="h-8 w-8 rounded mr-2"/>
                <p className="text-sm">+91-8585937122, +91-8368731450</p>
            </div>
        </div>
        <div className="w-1/4">
            <p className="px-4 py-2 font-medium">© {new Date().getFullYear()}</p>
        </div>
    </div>
  )
}

export default Footer


const Choose = () => {
  return (
    <div className="w-full flex flex-col items-center h-auto py-8 bg-slate-900 text-white ">
        <div className="mb-8">
            <p className=" font-semibold text-2xl">WHY CHOOSE US</p>
            <div className=" w-48 h-1 border-b-4 border-red-700 "></div>
        </div>
        <div className="flex w-full">
            <div className="md:w-1/2 -2 h-[410px] bg-cover  rounded-r-lg bg-[url('https://www.plmnordic.com/wp-content/uploads/2021/07/why-choose-us.jpg')] ">
            </div>
            <div className="md:w-1/2 mx-8 px-3 pr-8 border-l-8 border-red-700">
                <div className="pb-2">
                    <h3 className="text-xl font-bold">Our Diligent Team</h3>
                    <p className="pl-5 py-2">For each mandate to fill any position, we work diligently.</p>
                </div>
                <div className="pb-2">
                    <h3 className="text-xl font-bold">Ethical Practices</h3>
                    <p className="pl-5 py-2">Living up to the trust and goodwill created over decades, we sincerely maintain complete confidentiality for Corporate Clients on leadership roles assigned to us. Secrecy is maintained of potential industry moves and complete confidentiality for those seeking jobs, across levels.</p>
                </div>
                <div className="pb-2">
                    <h3 className="text-xl font-bold">Well Networked</h3>
                    <p className="pl-5 py-2">Our team of consultants are rightly networked to multiple B-school alumni and organizations across the industry, facilitating spotting of the right talent.</p>
                </div>
                <div className="">
                    <h3 className="text-xl font-bold">Rigourous Screening</h3>
                    <p className="pl-5 py-2">Each potential hire goes through multiple levels of screening before the CV lands on the client desk.</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Choose
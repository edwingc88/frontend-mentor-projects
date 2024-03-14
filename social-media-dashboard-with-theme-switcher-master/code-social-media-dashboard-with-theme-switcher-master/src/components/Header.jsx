
export const Header = () => {

  const handleClick = () => {
    /*     const body = document.body;
        body.classList.toggle('dark') */
    document.documentElement.classList.toggle('dark')
    console.log(document.documentElement.classList)
  }

  return (
    <header className="md:w-full  bg-Very-Pale-Blue dark:bg-VeryVeryDarkBlue  rounded-b-[20px]  pt-8 px-6 pb-20 ">
      <div className="md:flex md:justify-between md:w-[860px] m-auto">
        <div ><h1 className="text-dark dark:text-Very-Pale-Blue text-2xl font-bold mb-1 ">Social Media Dashboard</h1>
          <p className="text-Dark-Grayish-Blue  dark:text-Desaturated-Blue font-bold mb-6 ">Total Followers: 23,004</p>
          <hr className="bg-black mb-[19px] md:hidden" />
        </div>
        <div className="flex   justify-between">
          <span className="text-Dark-Grayish-Blue  dark:text-Desaturated-Blue font-bold ">Dark Mode</span>
          <label htmlFor="darkmode" className="border  bg-Toggle w-12 h-6 rounded-full overflow-hidden cursor-pointer flex align-baseline justify-center flex-col relative md:ml-4">
            <input onClick={handleClick} id="darkmode" type="checkbox" className="sr-only peer" />
            <div className="w-full h-full peer-checked:bg-Toggle-Gradient absolute top-0 left-0" ></div>
            <div className="bg-gray-50 dark:bg-blue-950  w-[18px] h-[18px] rounded-full ml-[2px] peer-checked:translate-x-[26px] transition-all"></div>
          </label>
        </div>
      </div>
    </header>
  )
}

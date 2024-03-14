import facebookLogo from '../assets/images/icon-facebook.svg'
import twitterLogo from '../assets/images/icon-twitter.svg'
import instagramLogo from '../assets/images/icon-instagram.svg'
import youtubeLogo from '../assets/images/icon-youtube.svg'

import iconUp from '../assets/images/icon-up.svg'
import iconDown from '../assets/images/icon-down.svg'



const networkLogos = {
  Facebook: facebookLogo,
  Twitter: twitterLogo,
  Instagram: instagramLogo,
  YouTube: youtubeLogo,
}

const networkColors = {
  Facebook: 'bg-Facebook',
  Twitter: 'bg-Twitter',
  Instagram: 'bg-Instagram-Gradient',
  YouTube: 'bg-YouTube',
}

// eslint-disable-next-line react/prop-types
export const OverviewCard = ({ user, audienceType, audience, network, isUp, today }) => {
  return (
    <article className=" flex bg-Ligth-Grayish-Blue w-full md:w-[50%] h-[206px] mb-4 rounded-[5px] mx-auto overflow-hidden text-center dark:bg-Dark-Desaturated-Blue hover:brightness-95 cursor-pointer hover:dark:brightness-125 ">
      <div className={` ${networkColors[network]}  h-[4px] mb-5`}></div>
      <div className='flex items-center place-content-center gap-2'>
        <img src={networkLogos[network]} alt={`logo ${network}`} />
        <p className='text-xs text-Dark-Grayish-Blue font-bold'>{user}</p>
      </div>
      <p className='text-[54px] font-bold text-Very-Dark-Blue dark:text-white'>{audience}</p>
      <p className='uppercase tracking-[5px] text-xs text-Dark-Grayish-Blue mb-6'>{audienceType}</p>
      <div className='flex items-center place-content-center gap-1'>
        <img src={isUp ? iconUp : iconDown} alt=''></img>
        <p className={`text-xs font-bold ${isUp ? 'text-Lime-Green' : 'text-Bright-Red'}`}>{today} today</p>
      </div>
    </article >
  )
}


// eslint-disable-next-line react/prop-types
export const OverviewCardToday = ({ network, statsType, stats, porcentage, isUp }) => {
  return (
    <article className="flex flex-col justify-around bg-Ligth-Grayish-Blue w-full md:w-[24%] h-[120px] gap-4 md:gap-6 mb-4 rounded-[5px] mx-auto md:mx-0  overflow-hidden text-center dark:bg-Dark-Desaturated-Blue hover:brightness-95 cursor-pointer hover:dark:brightness-125">
      <div className='flex place-content-center justify-between ml-6 mt-4 mr-6'>
        <p className='text-xs text-Dark-Grayish-Blue  font-bold'>{statsType}</p>
        <img src={networkLogos[network]} alt={`logo ${network}`} />
      </div>
      <div className='flex place-content-center justify-between ml-6 mb-1 mr-6'>
        <span className='uppercase text-[22px] font-bold dark:text-white  text-Dark-Grayish-Blue '>{stats}</span>
        <div className='flex flex-col self-end mb-1 '>
          <div className='flex my-auto items-center place-content-center gap-1 relative'>
            <img className="" src={isUp ? iconUp : iconDown} alt=''></img>
            <p className={`text-xs  font-bold ${isUp ? 'text-Lime-Green' : 'text-Bright-Red'}`}>{porcentage}%</p>
          </div>
        </div>
      </div>
    </article >
  )
}

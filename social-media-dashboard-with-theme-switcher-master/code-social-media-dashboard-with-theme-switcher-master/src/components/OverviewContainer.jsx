import data from "../../data/data.json"
import { OverviewCard, OverviewCardToday } from "./OverviewCards"


export const OverviewContainer = () => {

  const convertNumberTok = (number) => {
    console.log(number)
    if (number >= 10000) {
      return number / 1000 + "k"
    }
    return number
  }

  return (
    <>
      <div className="md:w-[860px] w-[326px] absolute top-[200px] md:top-[150px] left-0 right-0 mx-auto ">
        <section className="flex flex-col flex-wrap md:flex md:flex-row md:flex-wrap  ms:flex-row gap-4">
          {
            data.overview.map(item =>
              < OverviewCard
                key={item.id}
                user={item.user}
                audience={convertNumberTok(item.audience)}
                audienceType={item.audienceType}
                network={item.network}
                isUp={item.isUp}
                today={item.today}
              />
            )
          }
        </section>
        <h2 className="text-Dark-Desaturated-Blue pb-4  dark:text-white pt-2 font-bold">Overview - Today</h2>
        <section className="flex flex-col md:flex-row md:flex-wrap md:justify-between md:w-full ">
          {
            // eslint-disable-next-line no-undef
            data.overview_today.map(item =>
              < OverviewCardToday
                key={item.id}
                network={item.network}
                statsType={item.statsType}
                stats={item.stats}
                porcentage={item.porcentage}
                isUp={item.isUp}
              />
            )
          }
        </section>
      </div>
    </>
  )
}

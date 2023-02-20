import './App.css'
import PrincipalCard from './components/PrincipalCard'
import SecondayCard from './components/SecondaryCard'

const dataSecondary = [
  {
    title: "Work",
    hours: "32hrs",
    last: "Last Week - 36hrs",
    icon: "/images/icon-work.svg"
  },
  {
    title: "Play",
    hours: "4hrs",
    last: "Last Week - 8hrs",
    icon: "/images/icon-play.svg"
  },
  {
    title: "Study",
    hours: "4hrs",
    last: "Last Week - 7hrs",
    icon: "/images/icon-study.svg"
  },
  {
    title: "Exercise",
    hours: "4hrs",
    last: "Last Week - 5hrs",
    icon: "/images/icon-exercise.svg"
  },
  {
    title: "Social",
    hours: "5hrs",
    last: "Last Week - 10hrs",
    icon: "/images/icon-social.svg"
  },
  {
    title: "Self Care",
    hours: "2hrs",
    last: "Last Week - 2hrs",
    icon: "/images/icon-self-care.svg"
  },
]

function App() {

  return (
    <div className="App">
      <section className='App__list'>
        <PrincipalCard />
        {
          dataSecondary.map(info => <SecondayCard key={info.title} info={info} />)
        }
      </section>
    </div>
  )
}

export default App

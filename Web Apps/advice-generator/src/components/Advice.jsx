import dice from "../assets/icon-dice.svg"
import dividerD from "../assets/pattern-divider-desktop.svg"

export default function Advice(props) {
  return (
    <div className="sm:px-10 lg:px-0">
      <div className="bg-darkGrayBlue sm:w-full lg:w-1/4 lg:mx-auto my-72 p-10 pb-0 rounded-xl">
        <div>
          <h2 className="lg:text-xs sm:text-lg text-primaryGreen uppercase tracking-widest">
            Advice #{props.id}
          </h2>
          <p className="lg:text-xl sm:text-5xl pt-8 pb-10">{props.slip}</p>
        </div>
        <img src={dividerD} alt="" className="lg:py-2 sm:pt-6 mx-auto" />
        <button
          onClick={props.onClick}
          className="bg-primaryGreen lg:p-4 sm:p-12 rounded-full relative lg:top-7 sm:top-20 m-0 cursor-pointer">
          <img src={dice} alt="dice-button" className="sm:w-16 lg:w-full" />
        </button>
      </div>
    </div>
  )
}

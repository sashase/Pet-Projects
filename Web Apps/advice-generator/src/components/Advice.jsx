import dice from "../assets/icon-dice.svg"
import dividerD from "../assets/pattern-divider-desktop.svg"
import dividerM from "../assets/pattern-divider-mobile.svg"

export default function Advice(props) {
  return (
    <div className="px-10 lg:px-0">
      <div className="bg-darkGrayBlue lg:max-w-lg p-10 pb-0 rounded-xl">
        <div>
          <h2 className="lg:text-xs text-lg text-primaryGreen uppercase tracking-widest">
            Advice #{props.id}
          </h2>
          <p className="lg:text-xl text-5xl pt-8 pb-10">{props.slip}</p>
        </div>
        <picture>
        <source srcSet={dividerM} media = "(max-width: 600px)" />
        <img src={dividerD} alt="" className="lg:py-2 sm:pt-6 mx-auto" />
        </picture>
        <button
          onClick={props.onClick}
          className="bg-primaryGreen lg:p-4 p-12 rounded-full relative lg:top-7 top-20 m-0 cursor-pointer">
          <img src={dice} alt="dice-button" className="w-16 lg:w-full" />
        </button>
      </div>
    </div>
  )
}

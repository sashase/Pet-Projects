import Advice from "./components/Advice"
import axios from "axios"
import { useState } from "react"

export default function App() {
  const [advice, setAdvice] = useState({
    id: "",
    slip: "Click dice below to get advice"
  })

  const getAdvice = () => {
    axios.get(`https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`)
      .then((res) => {
        setAdvice({
          id: res.data.slip.id,
          slip: res.data.slip.advice
        })
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className="font-manrope text-primaryCyan text-center">
      <Advice onClick={getAdvice} id={advice.id} slip={advice.slip} />
    </div>
  )
}

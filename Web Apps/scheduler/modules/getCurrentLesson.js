const lessonTimes = [
  {
    start: "8:30",
    end: "9:50"
  },
  {
    start: "10:00",
    end: "11:20"
  },
  {
    start: "11:30",
    end: "12:50"
  },
  {
    start: "13:10",
    end: "14:30"
  },
  {
    start: "14:40",
    end: "16:00"
  },
  {
    start: "16:10",
    end: "17:30"
  },
  {
    start: "17:40",
    end: "19:00"
  }
]

const getTimeFromDate = (date, time) => {
  const [hours, minutes] = time.split(":")
  const timeDate = new Date(date)
  timeDate.setHours(hours)
  timeDate.setMinutes(minutes)
  return timeDate
}

const getCurrentLesson = (time, year) => {
  const date = new Date()
  const timestamp = getTimeFromDate(date, time).getTime()
  for (let i = 0; i < lessonTimes.length; i++) {
    const range = lessonTimes[i]
    const startTimestamp = getTimeFromDate(date, range.start).getTime()
    const endTimestamp = getTimeFromDate(date, range.end).getTime()

    if (timestamp >= startTimestamp && timestamp <= endTimestamp) {
      if (year === "2" || year === "2r") return i - 1
      return i
    }
  }
}

export default getCurrentLesson

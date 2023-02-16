import { currentDate } from "./date"

const firstWeekDates = [
  {
    start: {
      day: 11,
      month: 2
    },
    end: {
      day: 18,
      month: 2
    }
  },
  {
    start: {
      day: 24,
      month: 2
    },
    end: {
      day: 4,
      month: 3
    }
  },
  {
    start: {
      day: 11,
      month: 3
    },
    end: {
      day: 18,
      month: 3
    }
  },
  {
    start: {
      day: 25,
      month: 3
    },
    end: {
      day: 1,
      month: 4
    }
  },
  {
    start: {
      day: 8,
      month: 4
    },
    end: {
      day: 15,
      month: 4
    }
  },
  {
    start: {
      day: 22,
      month: 4
    },
    end: {
      day: 29,
      month: 4
    }
  },
  {
    start: {
      day: 6,
      month: 5
    },
    end: {
      day: 13,
      month: 5
    }
  },
  {
    start: {
      day: 20,
      month: 5
    },
    end: {
      day: 27,
      month: 5
    }
  },
  {
    start: {
      day: 3,
      month: 6
    },
    end: {
      day: 10,
      month: 6
    }
  },
  {
    start: {
      day: 16,
      month: 6
    },
    end: {
      day: 24,
      month: 6
    }
  }
]

const isFirstWeek = () => {
  let isFirstWeek = false
  firstWeekDates.forEach((date) => {
    const start = new Date(2023, date.start.month - 1, date.start.day)
    const end = new Date(2023, date.end.month - 1, date.end.day)
    const today = new Date(2023, currentDate.monthNum, currentDate.day)
    const res = today > start && today < end
    if (res == true) isFirstWeek = true
  })
  return isFirstWeek
}

export { isFirstWeek }

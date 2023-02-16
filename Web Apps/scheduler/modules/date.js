const date = {
  weekDay: new Date().getDay(),
  month: new Date().getMonth()
}

export let currentDate = {
  time: {
    hours: new Date().getHours(),
    minutes: new Date().getMinutes()
  },
  weekDay: {
    shortName: "",
    englishName: ""
  },
  day: new Date().getDate(),
  month: "",
  monthNum: date.month
}

export let weekDays = [
  { shortName: "Пн", englishName: "monday" },
  { shortName: "Вт", englishName: "tuesday" },
  { shortName: "Ср", englishName: "wednesday" },
  { shortName: "Чт", englishName: "thursday" },
  { shortName: "Пт", englishName: "friday" }
]

switch (date.weekDay) {
  case 0:
    currentDate.weekDay.shortName = "Нд"
    currentDate.weekDay.englishName = "sunday"
    break
  case 1:
    currentDate.weekDay.shortName = "Пн"
    currentDate.weekDay.englishName = "monday"
    break
  case 2:
    currentDate.weekDay.shortName = "Вт"
    currentDate.weekDay.englishName = "tuesday"
    break
  case 3:
    currentDate.weekDay.shortName = "Ср"
    currentDate.weekDay.englishName = "wednesday"
    break
  case 4:
    currentDate.weekDay.shortName = "Чт"
    currentDate.weekDay.englishName = "thursday"
    break
  case 5:
    currentDate.weekDay.shortName = "Пт"
    currentDate.weekDay.englishName = "friday"
    break
  case 6:
    currentDate.weekDay.shortName = "Сб"
    currentDate.weekDay.englishName = "saturday"
    break
  default:
    break
}

switch (date.month) {
  case 0:
    currentDate.month = "Січ"
    break
  case 1:
    currentDate.month = "Лют"
    break
  case 2:
    currentDate.month = "Бер"
    break
  case 3:
    currentDate.month = "Квіт"
    break
  case 4:
    currentDate.month = "Трав"
    break
  case 5:
    currentDate.month = "Чер"
    break
  case 6:
    currentDate.month = "Лип"
    break
  case 7:
    currentDate.month = "Сер"
    break
  case 8:
    currentDate.month = "Вер"
    break
  case 9:
    currentDate.month = "Жов"
    break
  case 10:
    currentDate.month = "Лис"
    break
  case 11:
    currentDate.month = "Груд"
    break

  default:
    break
}

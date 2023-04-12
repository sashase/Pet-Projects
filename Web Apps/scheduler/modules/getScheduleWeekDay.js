const getScheduleWeekDay = (query) => {
  if (query.group !== "ipz41" && query.group !== "kn41") {
    if (query.weekDay === "saturday" || query.weekDay === "sunday")
      return "monday"
    else return query.weekDay
  }

  if (query.group === "kn41" && query.weekDay !== "sunday") {
    return query.weekDay
  } else if (
    query.group === "ipz41" &&
    ((query.week === "2" && query.weekDay !== "sunday") ||
      (query.week === "1" &&
        query.weekDay !== "saturday" &&
        query.weekDay !== "sunday"))
  ) {
    return query.weekDay
  } else return "monday"
}

export default getScheduleWeekDay

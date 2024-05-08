// Date formatters

const todaysDate = new Date();

const tomorrowsDate = new Date(todaysDate);
tomorrowsDate.setDate(todaysDate.getDate() + 1);

const sixMonthsLaterDate = new Date(todaysDate);
sixMonthsLaterDate.setMonth(todaysDate.getMonth() + 6);

export const today = todaysDate.toISOString().split("T")[0];
export const tomorrow = tomorrowsDate.toISOString().split("T")[0];
export const sixMonthsLater = sixMonthsLaterDate.toISOString().split("T")[0];

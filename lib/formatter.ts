// Date formatters

const todaysDate = new Date();

const tomorrowsDate = new Date(todaysDate);
tomorrowsDate.setDate(todaysDate.getDate() + 1);

const sixMonthsLaterDate = new Date(todaysDate);
sixMonthsLaterDate.setMonth(todaysDate.getMonth() + 6);

export const today = todaysDate.toISOString().split("T")[0];
export const tomorrow = tomorrowsDate.toISOString().split("T")[0];
export const sixMonthsLater = sixMonthsLaterDate.toISOString().split("T")[0];

export function formatDate(inputDate: string) {
	// Create a Date object from the input string
	const dateObj = new Date(inputDate);

	// Get day, month, and year from the Date object
	const day = dateObj.getDate();
	const month = dateObj.toLocaleString("default", { month: "short" });
	const year = dateObj.getFullYear();

	// Format the date as "DD, Mon YYYY"
	const formattedDate = `${day} ${month}, ${year}`;

	return formattedDate;
}

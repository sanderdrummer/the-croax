export type Show = {
	date: string;
	venue: string;
	location: string;
	link?: string;
};

export const parseDate = (dateStr: string): Date => {
	const [day, month, year] = dateStr.split(".").map(Number);
	return new Date(year, month - 1, day);
};

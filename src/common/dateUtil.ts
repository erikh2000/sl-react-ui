export const yearOptions = Array.from({length: 100}, (_, i) => i + 1950).map(year => year.toString()); // 1950-2049
export const monthOptions = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const dayOptions = Array.from({length: 31}, (_, i) => i + 1).map(day => day.toString()); // 1-31
export const hourOptions = Array.from({length: 12}, (_, i) => i + 1).map(hour => hour.toString()); // 1-12
export const minuteOptions = Array.from({length: 60}, (_, i) => i).map(minute => minute.toString().padStart(2, '0')); // 00-59
export const amPmOptions = ['AM', 'PM'];

const defaultYear = 2000;
const defaultMonth = 0;
const defaultDay = 1;

export function decodeTime(date:Date):[hourI:number, minuteI:number, amPmI:number] {
    const hour = date.getHours();
    const hour12 = hour % 12;
    const matchHour = (hour12 === 0 ? 12 : hour12).toString();
    const hourI = hourOptions.findIndex(h => h === matchHour);

    const matchMinute = date.getMinutes().toString().padStart(2, '0');
    const minuteI = minuteOptions.findIndex(m => m === matchMinute);

    const amPmI = hour < 12 ? 0 : 1;

    return [hourI, minuteI, amPmI];
}

export function encodeTime(hourI:number, minuteI:number, amPmI:number):Date {
    const hour = (hourI === 11 ? 0 : (hourI + 1)) + (12 * amPmI);
    const minute = minuteI;
    return new Date(defaultYear, defaultMonth, defaultDay, hour, minute);
}

export function decodeDate(date:Date):[yearI:number, monthI:number, dayI:number] {
    const year = date.getFullYear();
    const yearI = yearOptions.findIndex(y => y === year.toString());

    const month = date.getMonth();
    const monthI = month;

    const day = date.getDate();
    const dayI = day - 1;

    return [yearI, monthI, dayI];
}

export function encodeDate(yearI:number, monthI:number, dayI:number):Date {
    const year = parseInt(yearOptions[yearI]);
    const month = monthI;
    const day = dayI + 1;
    return new Date(year, month, day);
}
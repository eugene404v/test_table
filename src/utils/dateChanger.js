export default function dateChanger(day) {
    if (typeof(day) === "string") {
        return day
    } else {
        const currentDate = new Date(day * 1000);
    const year = currentDate.getFullYear();
    const month = "0" + currentDate.getMonth();
    const date = "0" + currentDate.getDate();
    const formattedTime = year + "-" + month.substr(-2) + "-" + date.substr(-2);
    return formattedTime;
    }
}
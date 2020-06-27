export default function dateChanger(day) {
  const currentDate = new Date(day * 1000);
  
  const year = currentDate.getFullYear();
  
  const month = "0" + currentDate.getMonth();
  
  const date = "0" + currentDate.getDate();
  
  const formattedTime = date.substr(-2) + "." + month.substr(-2) + "." + year;
  
  return formattedTime;
}
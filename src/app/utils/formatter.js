import moment from "moment"; 
import {   isArray } from "lodash";  
// Turn plain numbers in a currency value by adding commas and $ sign
const numberFormat = (value) => {
  if (!value) {
    return "0";
  }

  // remove decimal
  if (Number.isInteger(value)) {
    value = parseInt(value);
  }
  const formatted = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return formatted;
};

const currencyFormat = (value, isDecimal = false) => {
  if (!value) {
    return "$0";
  }

  if (isDecimal) {
    value = Number(parseFloat(value).toFixed(2));
  } else {
    // remove decimal
    value = parseInt(value);
  }
  const formatted = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return `$${formatted}`;
};
 
const getFilteredSelectedValue = (values,type="") => {
  let isSearch = false, data = {};
  Object.keys(values).forEach((key) => {
    if(key && values[key] && Number.isInteger(values[key])){
      isSearch = true;
      data[key] = values[key];
    } else if (key && values[key] && values[key].length) {
      isSearch = true;
      data[key] = values[key];
    }else if(type && key && values[key] && !isArray(values[key]) && typeof values[key]===type){
      isSearch = true;
      data[key] = values[key];
    }
  });
  return { isSearch, data };
}; 
 
const getGMTDateTimeFormat = (value,format="MM/DD/YYYY") => { 
  if (!value) {
    return "";
  }   
  const dateString = moment.utc(value).format(format);  
  if(!dateString || dateString==="Invalid Date"){
    return value; 
  }else{
    return dateString; 
  }
};
const getFormatDate=(value,format="MM/DD/YYYY")=>{
  if (!value) {
    return "";
  }

  return moment(value).format(format);
};
const getSortList = (name,reverse=false,symbol="",primer=(a) =>  a.toUpperCase()) => {
  const key = primer ?
    function(x) {
      if(symbol){ 
        return x[name]?.split(symbol)?.reverse()?.join("") || x[name];
      }
      else{ 
        return primer(x[name]);
      }
    } :
    function(x) {
      if(symbol)
        return  x[name].split("-").reverse().join(""); 
      else
        return x[name];
    }; 
  reverse = !reverse ? 1 : -1;
  return function(a, b) {
    return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
  };
};
  
const setDaysGetDateTime=(value,isNextDay=false)=>{
  const currentDate = moment().format("LL").toString();
  if(isNextDay){
    const lastDate = moment().add(value, "days").format("LL").toString();  
    return {startDate:new Date(currentDate),endDate:new Date(lastDate)};
  }else{  
    const lastDate=moment().subtract(value, "days").format("LL").toString();
    return {startDate:new Date(lastDate),endDate:new Date(currentDate)};
  }
};
export {getFormatDate, numberFormat, currencyFormat,   getFilteredSelectedValue, 
  getSortList, 
  getGMTDateTimeFormat, 
  setDaysGetDateTime
};

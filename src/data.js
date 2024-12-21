export const API_KEY="AIzaSyBju7IZ4T6lhh8Riehp_z50Z0LvgtyX2wI"


 export const value_converter=(value)=>{
if(value>=1000000){
    return Math.floor(value/1000000)+"M"
}else if(value>=1000){
return Math.floor(value/1000)+"K"
}
else{
    return value;
}
 }
import day_clear from "../images/weather icon/day_clear.png";
import night_clear from "../images/weather icon/night_half_moon_clear.png";
import day_partial_cloud from "../images/weather icon/day_partial_cloud.png";
import night_partial_cloud from "../images/weather icon/night_half_moon_partial_cloud.png";
import cloudy from "../images/weather icon/cloudy.png";
import overcast from "../images/weather icon/overcast.png";
import mist from "../images/weather icon/mist.png";
import day_rain from "../images/weather icon/day_rain.png";
import night_rain from "../images/weather icon/night_half_moon_rain.png";
import day_snow from "../images/weather icon/day_snow.png";
import night_snow from "../images/weather icon/night_half_moon_snow.png";
import day_sleet from "../images/weather icon/day_sleet.png";
import night_sleet from "../images/weather icon/night_half_moon_sleet.png";
import thunder from "../images/weather icon/thunder.png";
import blizzard from "../images/weather icon/sleet.png";
import fog from "../images/weather icon/fog.png";
import hailstorm from "../images/weather icon/hailstorm.png";
import day_rain_thunder from "../images/weather icon/day_rain_thunder.png";
import night_rain_thunder from "../images/weather icon/night_half_moon_rain_thunder.png";
import rain_thunder from "../images/weather icon/rain_thunder.png";
import day_snow_thunder from "../images/weather icon/day_snow_thunder.png";
import night_snow_thunder from "../images/weather icon/night_half_moon_snow_thunder.png";
import snow_thunder from "../images/weather icon/snow_thunder.png";
import aqi1 from '../images/air quality/aqi-1.png'
import aqi2 from '../images/air quality/aqi-2.png'
import aqi3 from '../images/air quality/aqi-3.png'
import aqi4 from '../images/air quality/aqi-4.png'
import aqi5 from '../images/air quality/aqi-5.png'
import aqi6 from '../images/air quality/aqi-6.png'

const getImg = (code, is_day) => {
  const day = {

    1000: day_clear,
    1003: day_partial_cloud,
    1006: cloudy,
    1009: overcast,
    1030: mist,
    1063: day_rain,
    1066: day_snow,
    1069: day_sleet,
    1072: day_sleet,
    1087: thunder,
    1114: day_snow,
    1117: blizzard,
    1135: fog,
    1147: fog,
    1150: day_rain,
    1153: day_rain,
    1168: day_sleet,
    1171: day_sleet,
    1180: day_rain,
    1183: day_rain,
    1186: day_rain,
    1189: day_rain,
    1192: day_rain,
    1195: day_rain,
    1198: day_sleet,
    1201: day_sleet,
    1204: day_sleet,
    1207: day_sleet,
    1210: day_snow,
    1213: day_snow,
    1216: day_snow,
    1219: day_snow,
    1222: day_snow,
    1225: day_snow,
    1237: hailstorm,
    1240: day_rain,
    1243: day_rain,
    1246: day_rain,
    1249: day_sleet,
    1252: day_sleet,
    1255: day_snow,
    1258: day_snow,
    1261: hailstorm,
    1264: hailstorm,
    1273: day_rain_thunder,
    1276: rain_thunder,
    1279: day_snow_thunder,
    1282: snow_thunder,

  }
  const night = {

    1000: night_clear,
    1003: night_partial_cloud,
    1006: cloudy,
    1009: overcast,
    1030: mist,
    1063: night_rain,
    1066: night_snow,
    1069: night_sleet,
    1072: night_sleet,
    1087: thunder,
    1114: night_snow,
    1117: blizzard,
    1135: fog,
    1147: fog,
    1150: night_rain,
    1153: night_rain,
    1168: night_sleet,
    1171: night_sleet,
    1180: night_rain,
    1183: night_rain,
    1186: night_rain,
    1189: night_rain,
    1192: night_rain,
    1195: night_rain,
    1198: night_sleet,
    1201: night_sleet,
    1204: night_sleet,
    1207: night_sleet,
    1210: night_snow,
    1213: night_snow,
    1216: night_snow,
    1219: night_snow,
    1222: night_snow,
    1225: night_snow,
    1237: hailstorm,
    1240: night_rain,
    1243: night_rain,
    1246: night_rain,
    1249: night_sleet,
    1252: night_sleet,
    1255: night_snow,
    1258: night_snow,
    1261: hailstorm,
    1264: hailstorm,
    1273: night_rain_thunder,
    1276: rain_thunder,
    1279: night_snow_thunder,
    1282: snow_thunder,

  }

  if(is_day == 1){
      return day[code]
  }
  else{
    return night[code];
  }

}

const getAQIImg = (aqi) => {
  switch (aqi) {
    case 1: return aqi1;
    case 2: return aqi2;
    case 3: return aqi3;
    case 4: return aqi4;
    case 5: return aqi5;
    case 6: return aqi6;
    default: return;
  }

}


export {getImg, getAQIImg}



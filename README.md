
# [Wheathersy](https://yashsrivastava26.github.io/Weathersy/)

Weathersy is a web application displays real-time weather conditions such as temperature, perception etc and 3-day weather forecast for a user's current location or a manually specified location.
Users can also access the 5-day weather history to track the weather patterns over time.


## Run Locally

Clone the project

```bash
  git clone https://github.com/YashSrivastava26/Weathersy.git
```

Go to the project directory

```bash
  cd Weathersy
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## API Reference

#### Get Weather Data by your current position

```http
  GET https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${position.coords.latitude},${position.coords.longitude}&days=3&aqi=yes&alerts=yes
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `position.coords.latitude` | `string` | **Required**. Your current location latitude |
| `position.coords.longitude` | `string` | **Required**. Your current location longitude |


#### Get Weather Data by searching

```http
  GET https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${query}&days=3&aqi=yes&alerts=yes
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `query` | `string` | **Required**. Query for Search |



#### Get Astronomical Data by your current position

```http
  GET https://api.weatherapi.com/v1/astronomy.json?key=${api_key}&q=${position.coords.latitude},${position.coords.longitude}&dt=${new Date()}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `position.coords.latitude` | `string` | **Required**. Your current location latitude |
| `position.coords.longitude` | `string` | **Required**. Your current location longitude |


#### Get Astronomical Data by searching

```http
  GET https://api.weatherapi.com/v1/astronomy.json?key=${api_key}&q=${query}&dt=${new Date()}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `query` | `string` | **Required**. Query for Search |


#### Get Pasr Weather Data by your current position

```http
  GET https://api.weatherapi.com/v1/history.json?key=${api_key}&q=${position.coords.latitude},${position.coords.longitude}&dt=${new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10)}&unixend_dt=${Math.ceil(new Date().getTime() / 1000)}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `position.coords.latitude` | `string` | **Required**. Your current location latitude |
| `position.coords.longitude` | `string` | **Required**. Your current location longitude |


#### Get Past Weather Data by searching

```http
  GET https://api.weatherapi.com/v1/history.json?key=${api_key}&q=${query}&dt=${new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10)}&unixend_dt=${Math.ceil(new Date().getTime() / 1000)}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `query` | `string` | **Required**. Query for Search |


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY` : api key can be claimed at https://www.weatherapi.com/


## 🛠 Skills
Javascript, HTML, CSS, ReactJs, Material UI


## Features

- Desktop friendly website.
- Includes search functionality for finding specific places weather data.
- Includes functionality for finding weather data by location.
- Provides the latest news updates on various topics such as uv index, wind speed, sunrise, sunset, humidity, visibility, air quality, past week data and forecast of 3 days.
# Hi, I'm Yash! 👋


## 🚀 About Me
I'm a full stack (MERN stack) developer, currently in 6 semester at Kalinga Institute of Industrial Technology, Bhubaneswar. for more info you can visit my portfolio


## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/yashsrivastava2603/)




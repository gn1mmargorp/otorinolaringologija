const currentMode = process.env.NODE_ENV;
let BASE_URL;

if (currentMode === 'production') {
    BASE_URL = 'https://vanillajs-online-shop.onrender.com';
} else if (currentMode === 'development') {
    BASE_URL = 'http://localhost:8080';
}

export default BASE_URL;

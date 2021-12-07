const API_KEY = "52mWJ8D_h-M6pCdaxQAz8OEkw2g";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById('resultsModal'));

document.getElementById("status").addEventListener("click", e => getStatus(e));
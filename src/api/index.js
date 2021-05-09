import axios from 'axios';

const config = {
  baseUrl: "https://api.hnpwa.com/v0/",
};

function fetchNewsList(){
  return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchJobsList() {
  return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchAskList(){
  return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchUserInfo( name ) {
  return axios.get(`${config.baseUrl}user/${name}.json`);
}

function fetchItem( id ) {
  return axios.get(`${config.baseUrl}item/${id}.json`);
}

export { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchItem };
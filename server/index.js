const express = require('express')
const app = express()
const cors = require('cors')
const axios = require('axios')

app.use(express.json())
app.use(cors())

let response = null;
let riotKey = 'RGAPI-0bec7225-70b8-4f1d-a21a-53b1030b2d34'

const callSummByName = async (name) => {
  try {
    const newResponse = await axios.get(
      `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?${riotKey}`,
    );
    const data = await newResponse.data;
    return data;
  } catch (err) {
    console.log(err)
    throw err
  }
}

console.log(callSummByName('AgorLePuissant'))
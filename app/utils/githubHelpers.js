import axios from 'axios'

function getUserInfo (username) {
  return axios.get(`http://api.github.com/users/${username}`)
}

const githubHelpers = {
  getPlayersInfo (players) {
    return axios.all(players.map(username => getUserInfo(username)))
      .then(info => info.map(user => user.data))
      .catch(err => console.warn('Error in getPlayersInfo', err))
  }
}

export default githubHelpers

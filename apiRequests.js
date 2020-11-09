const { default: Axios } = require("axios");

const programmerHumorRequest = Axios.get('https://www.reddit.com/r/ProgrammerHumor.json?count=5')
.then(res => {
  return res.data.data.children.url_overridden_by_dest;
});
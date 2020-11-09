const { default: Axios } = require("axios");

const programmerHumorRequest = Axios.get('https://www.reddit.com/r/ProgrammerHumor.json?count=1ù')
.then(res => {
  return res.data.data.children.url_overridden_by_dest;
});
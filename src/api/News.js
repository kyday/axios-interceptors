import Send from "../utils/Send.js";

export const News = {
  getNews() {
    // axios 요청을 생성합니다.
    /*
            axios 요청을 생성합니다.
            https://github.com/axios/axios axios API 챕터
            인터셉터를 안썼으면 다음과 같습니다.
            axios({
                baseURL: 'https://api.hnpwa.com',
                url: '/news/1.json',
                method: 'get'  
            })
            */
    return Send({
      // baseURL설정되어 있기 때문에 그 뒤의 URL만 작성합니다.
      url: "/news/1.json",
      method: "get",
    });
  },

  getNewest() {
    return Send({
      url: "/newest/1.json",
      method: "get",
    });
  },

  getAsk() {
    return Send({
      url: "/ask/1.json",
      method: "get",
    });
  },

  getshow() {
    return Send({
      url: "/show/1.json",
      method: "get",
    });
  },
};

export default News;

import axios from "axios";

const KEY = "AIzaSyAHsCyfZGVOQ0TRFp1EHKr4cZSBrduY1XA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY
  }
});

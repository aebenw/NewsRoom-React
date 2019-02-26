// export const API =
export const API = process.env.API_URL || 'http://localhost:3001';
console.log(API)
export const HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json"
}

export const dummyUser = "5c54ceef42aa4af84d05a750";

export const LINK_PREVIEW = "https://api.linkpreview.net?key=5c508e68b5594c63ba052767e8a11779df4a71caf0b4d&q="

export const token = localStorage.getItem("NewsRoomToken")

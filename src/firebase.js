import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9MiPXDwJOI9a2ISY5v15WYLZij47e080",
  authDomain: "challenge-1a6e9.firebaseapp.com",
  projectId: "challenge-1a6e9",
  storageBucket: "challenge-1a6e9.appspot.com",
  messagingSenderId: "379631327836",
  appId: "1:379631327836:web:733f460899fd30a57ce499",
  measurementId: "G-S6CMSEPVCY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig); //连接firebase, 并初始化配置

const db = firebaseApp.firestore(); //创建数据库
const auth = firebase.auth(); //创建 firebase 的用户验证功能

export { db, auth };

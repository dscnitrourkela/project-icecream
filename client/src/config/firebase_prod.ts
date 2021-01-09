import axios from 'axios';

export const getFirebaseConfig = new Promise((resolve, reject) => {
  axios
    .get(`/__/firebase/init.json`)
    .then((res: any) => {
      resolve(res.data);
    })
    .catch((err: any) => reject(err));
});

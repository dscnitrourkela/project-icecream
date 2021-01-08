import axios from 'axios';

const getFirebaseConfig = async () => await axios.get('/__/firebase/init.json');

export default getFirebaseConfig;

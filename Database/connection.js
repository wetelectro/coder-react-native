import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD716enAQThINzjNfQyddyZ_6n19xbva1k",
  authDomain: "coderhouse-react-f6008.firebaseapp.com",
  projectId: "coderhouse-react-f6008",
  storageBucket: "coderhouse-react-f6008.appspot.com",
  messagingSenderId: "626381045277",
  appId: "1:626381045277:web:1d6e1bd167a4ad5682d0f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Lectura y Escritura en Firebase (Productos)
export const itemData = async () => {
    const data = await getDocs(collection(db, 'coder-react'));
    let itemList = [];
    data.docs.map( doc => {
        itemList.push(doc.data());
        return 0;
    })
    return itemList;
}

export const getItemById = async (id) => {
    const data = await getDocs(collection(db, 'coder-react'));
    let item;
    data.docs.map( doc => {
        if( doc.data().id === parseInt(id)){
        item = doc.data();
        }
        return 0;
    })
    return item;
}

export const getCategories = async () => {
    const data = await getDocs(collection(db, 'categorias'));
    let categoryList = [];
    data.docs.map( doc => {
        categoryList.push(doc.data());
        return 0;
    })
    return categoryList;
}

export const addOrderToFirebase = async (order) => {
    addDoc(collection(db, 'orders'), order);
}

export const getOrdersFromFirebase = async () => {
    const data = await getDocs(collection(db, 'orders'));
    let orderList = [];
    data.docs.map( doc => {
        orderList.push(doc.data());
        return 0;
    })
    return orderList;
}

export const subirDatosFirebase = (array) => {
    array.map( item => {
        addDoc(collection(db, 'coder-react'), item);
        return 0;
    })
}
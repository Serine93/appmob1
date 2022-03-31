import * as firebase from 'firebase';
import { auth } from '../../Fire.js';
import 'firebase/compat/firestore';
import firestore from '@react-native-firebase/firestore';

let rootRef;
let name;

//----- Loading datebase -----//
export function init(){
    rootRef = firebase.database().ref();
}


//----- Connection -----//
export function connection(name, password){
    const user = rootRef.child("Users").orderByChild("connect").equalTo(name + " " + password);
    name = user.split(' ')[0];
    return Object.keys(user);
}


//----- Inscription -----//
function inscription(name, password){
    firestore().collection('Users').add({ connect: name + " " + password}).then(() => {
        console.log('User added!');
        return connection(name, password);
    });
}


//----- Your shoes -----//
let your_shoes;
function loadVosShoe(id_user){
    your_shoes = rootRef.child("Shoes").child(rootRef.child("Owning").child(id_user))
}

function getIdVosShoe(index){
    return Object.keys(your_shoes.objects[index]);
}

function getNameVosShoe(index){
    return your_shoes.objects[index].child("name");
}

function getLengthVosShoe(){
    return Object.keys(your_shoes).length;
}

//----- A shoe -----//
let shoe;
function loadShoe(id_shoes){
    shoe = rootRef.child("Shoes").child(id_shoes);
}

function functionToUse(id_user, id_shoes){
    const r = rootRef.child("Owning").child(id_user).child(id_shoes);
    if (r != null){
        return 1; //removeShoe
    }
    return 0; //addShoe
}

function addShoe(id_user, id_shoes){
    firestore().collection('Owning').add({ id_user: id_user, id_shoes: id_shoes}).then(() => {
        console.log('Shoes added!');
    });
}

function removeShoe(id_user, id_shoes){
    firestore().collection('Owning').doc(rootRef.child("Owning").child(id_user).child(id_shoes)).delete().then(() => {
        console.log('Shoes deleted!');
    });
}

//getter shoe
function getNameShoe(){
    return shoe.child("name");
}
function getDescriptionShoe(){
    return shoe.child("description");
}
function getImageShoe(){
    return shoe.child("image");
}
function getPriceShoe(){
    return shoe.child("price");
}


//----- The shoes -----//
let shoes
function loadShoes(){
    shoes = rootRef.child("Shoes");
}

function getIdShoes(index){
    return Object.keys(shoes.objects[index]);
}

function getNameShoes(index){
    return shoes.objects[index].child("name");
}

function getLengthShoes(){
    return Object.keys(shoes).length;
}
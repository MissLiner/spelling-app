import catPic from 'images/pexels-krysten-merriman-20787.jpg';
import dogPic from 'images/pexels-kat-smith-551628.jpg';
import wolfPic from 'images/pexels-steve-682361.jpg';
import loadPic from 'images/loading.png';
import winPic from 'images/win.png';

const card_data = [
  { name: "cat",
    letters: ['c', 'a', 't'],
    lCount: 3,
    pic: catPic,
    credit: [ "Photo by Krysten Merriman from Pexels", 
              "pexels.com/photo/short-coated-gray-cat-20787/"]
  },
  { name: "dog",
  letters: ['d', 'o', 'g'],
  lCount: 3,
  pic: dogPic,
  credit: [ "Photo by Kat Smith from Pexels", 
            "https://www.pexels.com/photo/shallow-focus-photography-of-adult-black-and-white-border-collie-551628/"]
},
{ name: "wolf",
letters: ['w', 'o', 'l', 'f'],
lCount: 4,
pic: wolfPic,
credit: [ "Photo by Steve from Pexels", 
          "https://www.pexels.com/collections/spell-animals-7xnhrmk/"]
}
]
const start_card = {
name: "start",
letters: [""],
lCount: 4,
pic: loadPic,
credit: [ "", 
          ""]
}
const win_card = {
  name: "won",
  letters: [""],
  lCount: 4,
  pic: winPic,
  credit: [ "", 
            ""]
  }
export {card_data, start_card, win_card};
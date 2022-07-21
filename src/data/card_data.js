import catPic from 'images/pexels-larissa-barbosa-1870376.jpg';
import dogPic from 'images/pexels-kat-smith-551628.jpg';
import wolfPic from 'images/pexels-steve-682361.jpg'

const card_data = [
  { name: "cat",
    letters: ['c', 'a', 't'],
    lCount: 3,
    pic: catPic,
    credit: [ "Photo by Larissa Barbosa from Pexels", 
              "https://www.pexels.com/photo/close-up-photography-of-brown-and-white-kitten-1870376/"]
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
export default card_data;
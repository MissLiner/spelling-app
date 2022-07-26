import catPic from 'images/pexels-krysten-merriman-20787.jpg';
import dogPic from 'images/pexels-kat-smith-551628.jpg';
import wolfPic from 'images/pexels-steve-682361.jpg';
import mousePic from 'images/pexels-pixabay-301448.jpg';
import pigPic from 'images/pexels-julia-clooten-9249120.jpg';
import frogPic from 'images/pexels-thierry-fillieul-1046494.jpg';
import deerPic from 'images/pexels-patrice-schoefolt-8527520.jpg';
import foxPic from 'images/pexels-erik-mclean-4157091.jpg'
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
  },
  { name: "mouse",
  letters: ['m', 'o', 'u', 's', 'e'],
  lCount: 5,
  pic: mousePic,
  credit: [ "Photo by Pixabay from Pexels", 
            "https://www.pexels.com/photo/animal-cute-little-mouse-301448/"]
  },
  { name: "pig",
  letters: ['p', 'i', 'g'],
  lCount: 3,
  pic: pigPic,
  credit: [ "Photo by mali maeder from Pexels", 
            "https://www.pexels.com/photo/white-pig-110820/"]
  },
  { name: "frog",
  letters: ['f', 'r', 'o', 'g'],
  lCount: 4,
  pic: frogPic,
  credit: [ "Photo by Thierry Fillieul from Pexels", 
            "https://www.pexels.com/photo/closeup-photo-of-blue-frog-on-green-surface-1046494/"]
  },
  { name: "deer",
  letters: ['d', 'e', 'e', 'r'],
  lCount: 4,
  pic: deerPic,
  credit: [ "Photo by patrice schoefolt from Pexels", 
            "https://www.pexels.com/photo/a-deer-lying-on-a-grassy-field-8527520/"]
  },
  { name: "fox",
  letters: ['f', 'o', 'x'],
  lCount: 3,
  pic: foxPic,
  credit: [ "Photo by Erik Mclean", 
            "https://www.pexels.com/photo/fluffy-fox-walking-on-asphalt-road-4157091/"]
  },]
  const start_card = {
    name: "start",
    letters: [],
    lCount: 4,
    pic: loadPic,
    credit: [ "", 
              ""]
  }
  const win_card = {
    name: "won",
    letters: [],
    lCount: 4,
    pic: winPic,
    credit: [ "", 
              ""]
  }
export {card_data, start_card, win_card};
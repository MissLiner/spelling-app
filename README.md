# Spell This!
The challenge is to create the entire app using no custom css files at all. Can I do it?

## Conditional Styling & Event Listeners

I learned how to use the ternary operator to add condiional styling and 
event listeners to the letter tiles. I needed the text to be invisible 
until guessed, and wanted to remove the even listener once guessed.

I used useState to set the "open" state of each tile with a boolean, and
changed the color of the text and whether the event listener was
attached to the tile dependent on the open state.
-const [open, setOpen] = useState([true, true, true]);
-  const closeTile = (e) => {
    let openState = [...open];
    openState[e.target.dataset.value] = false;
    setOpen(openState);
  }
## Rainbow Letters

Assigned custom palette colors use remainder of i from mapping letters to ccle through the colors.

## Credits
<a href="https://www.flaticon.com/free-icons/hear" title="hear icons">Hear icons created by msidiqf - Flaticon</a>

voices - 20, 25, 26, 33, 49 (51 - british man), 64

english - 0, 10, 11 (17 female australia) (28 - irish? IE), 33!, 37(ZA), 41!
# Spell This!

The challenge is to create the entire app using Bootstrap, and no custom css files at all. Can I do it?

*Update:* I did it, but decided to add one SCSS file, to learn more about customizing Bootstrap.

## Conditional Styling & Event Listeners

I implemented the ternary operator and useState to add conditional styling and 
event listeners to the letter tiles. I needed the text to be invisible 
until guessed, and wanted to remove the event listener once guessed.

useState sets the "open" state of each tile with a boolean, and
changes the color of the text, and whether the event listener is
attached to the tile.

``` 
const [open, setOpen] = useState(Array(card.lCount).fill(true));

const closeTile = (e) => {
  let openState = [...open];
  openState[e.target.dataset.value] = false;
  setOpen(openState);
};
```

## Alphabet Features

### Draggable

I added draggable functionality to each letter, which I had to learn for this project. It was surprisingly easy! To add drag-ability to your own React project:

- In drag element:
  1. Create a handleDrag() function, which stores the data from your drag element when you start dragging (I added 'data-value={alpha} to each letter and referred to that):
        const handleDrag = (e) => {
            e.dataTransfer.setData("text/plain", e.target.dataset.value);
        }

  2. Add the following properties:
        draggable="true"
        onDragStart={handleDrag}

- In drag-to element: *(in this case the empty letter tiles on my WordCard)*
  1. Add a  handleDragOver() function to prevent default behavior:
        const handleDragOver = (e) => {
            e.preventDefault();
        }

  2. Create a handleDrop() function (I used a ternary operator in the property itself that changed state).

  3. In drag-to element - add the following properties:
        onDragOver={handleDragOver}
        onDrop={handleDrop}

    *As mentioned, I used a ternary here, so my onDrop looks like this:*
        onDrop={open[i] ? closeTile : undefined}


### Rainbow Letters

The Alphabet component maps each letter and returns it while passing 'i' as a prop to the Letter component. The Letter component then assigns a color (from a custom palette I created in Adobe Color) to each letter, based on the remainder of 'i'. The colors are defined in custom.scss.

```
  const assignColor = () => {
    let color;
    switch(i%5) {
      case 0: 
        color = "r1";
        break;
      case 1: 
        color = "r2";
        break;
      case 2: 
        color = "r3";
        break;
      case 3: 
        color = "r4";
        break;
      case 4: 
        color = "r5";
        break;
      default:
        color = "r1";
        break;
    } 
    return color;
  }
```


## Future Updates
-Use APIs to call photos from Pexels
-Read word out loud when speeled correctly
-Hints
-Multiple deck options
-Difficulty levels
-Animations

## Credits
<a href="https://www.flaticon.com/free-icons/hear" title="hear icons">Hear icons created by msidiqf - Flaticon</a>
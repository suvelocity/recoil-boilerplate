# Recoil Tutorial
In the following project you will be introduced with the advantages of recoil for state managment end application efficiency.
So before we dive in we would like you to see a few things:
1. Cover the [Basics](https://www.youtube.com/watch?v=_ISAA_Jt9kI&feature=emb_title&ab_channel=ReactEurope)
2. Understanding [Core concepts](https://recoiljs.org/docs/introduction/core-concepts)
3. Practice makes perfect! Do the [To-do List](https://recoiljs.org/docs/basic-tutorial/intro) mini project to get used to the syntax.

## Tips
_Try to name variables according to the convention, it wont be tested._

## Task 1: Fix the ColorPicker component!
- current situation: you can pick a color but nothing happens
- fix the functionality with state so the selected color will be the canvas background color!
- see what happens with the render count with normal state,
you see that the app renders every time you change a color

## Task 2: now lets try with recoil!
- Create a atom state called canvasBackgroundColorState that saves the selected color.
In colorPicker:
- Import the atom from it's file to.
- Use it as a recoil state:
const [backgroundColor, setBackgroundColor] = useRecoilState    vasBackgroundColorState);
- create an onChange function that sets the backgroundColor of the as: setBackgroundColor()
In Canvas:
save locally the current background color with useRecoilValue(--name of atom--)


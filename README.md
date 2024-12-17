# TitanStar Legends

A simple app to let TitanStar Legends players spend talent points they've collected on runes within a tree.

# Technologies used

- React
- Vite
- TypeScript
- CSS/SASS
- [react-hot-toast](https://react-hot-toast.com/) (for notifications)
- [modern-normalize](https://github.com/sindresorhus/modern-normalize) (to reset/normalize the CSS)

## Notes

- Storing State: Used React's in-built Context. For such a small app, it seemed like overkill to use anything like Redux.
- Rune Data:
  - Update totalPoints to change the number of pints available to the player.
  - The app has been in a way that to add new Talent Paths or Runes, you can simply update runeData.ts, and it will show up in the app.
    - With small additions, the responsive design should adapt, but would need revisiting if large additions were made.
  - Notifications were added to give the player some feedback when playing.

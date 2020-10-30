# Welcome to jtX

What I have built for you is an app that quickly and easily displays spaceX launch data.

### It includes:

- The most recent Launch on load.
- The ability to view all Launches in SpaceX history, as well as any upcoming launches that are officially scheduled.
- Vehichles
- Launchpads
- Crew
- Starman Bonus

Youre able to navigate between launch data as well as vehicles, launchpads, and landpads.

## OG Component Heirarchy

![image](https://media.git.generalassemb.ly/user/30880/files/73210e00-1646-11eb-9527-2cc274ace892)

## Current Component Heirarchy

![image](https://media.git.generalassemb.ly/user/30880/files/1c1c8100-1945-11eb-9485-bc9085db4806)

## Wire Frames

![image](https://media.git.generalassemb.ly/user/30880/files/8633de00-1646-11eb-8213-feca075db2d8)
![image](https://media.git.generalassemb.ly/user/30880/files/1a9e4080-1647-11eb-90e6-a4b3c0577f4d)

## User Stories

### MVP Goals

- As a user, I want to be able to see the latest SpaceX flight info.
- As a user, I want to be able to see all of the SpaceX flights in a list.
- As a user, I want to be able to click one of the spaceX flights in that list, and be brought to a details screen.

### Stretch Goals

- Any kind of filtering: mission type(Starlink, National Recon Office, NASA), vehicles used(rockets, recovery drone ships), date ranges.
- Custom Sorting, oldest first, newest first.

## Technologies Used

- JavaScript
- React
- CSS
- Bootstrap
- react-bootstrap.github.io

## How to use

[Click here](jtx.herokuapp.com)

## Screenshots

SCreenshot.

## Unsolved Mysteries

- By the time I had written the grid enough to make me happy, I realized bootstrap would be better for most, if not all of this project, so I tried to refactor a ton of it with bootsrap, which has resulted in some...weirdness.

- Query/Pagination/LoadMore, I only wanted to show 10 launches unless the user clicked the "show more" button, until there were no more launches to view.

## Solved Mysteries

- Bootstrap, somewhat.
- Sorting the results of a return in reverse order.
- github branches, pushing and merging make a little more sense

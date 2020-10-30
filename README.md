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

### MVP Goals - DONE

- As a user, I want to be able to see the latest SpaceX flight info.
- As a user, I want to be able to see all of the SpaceX flights in a list.
- As a user, I want to be able to click one of the spaceX flights in that list, and be brought to a details screen.

### Stretch Goals - DONE

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

- Query/Pagination/LoadMore.
  - POST Query wouldn't work: I am n00b.
  - Front-End Mod
- Passing form Data

## Solved Mysteries

- Instead of filtering, I created a system where users could navigate between connected components.
- Sorting the results of a return in reverse order.
- Not knowing how 100% of your code works is something I will have to keep getting used to. I feel like I have a much better handle on how to make React work for JT, rather than trying to understand how to React was working for React.
- Bootstrap 101
  - HOWEVER
  - Don't get caught using Bootstrap Components without writing semantic code in conjunction. While React Bootstrap will make things pretty for you. It does not account for anything outside of visual interactions. This means we still must write(or have our JSX render) semantic HTML for accessibility.
- Github
- Asking for help: If you finished this week without using all or all of your tokens, ask yourself which parts of the project caused unnecessary stress, or stretch goals you could have

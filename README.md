# Welcome to jtX

What I have built for you is an app that displays spaceX launch data and allows the user the navigate through it, if available, the user can also isolate certain launches made by specific vehicles.

## OG Component Heirarchy

![image](https://media.git.generalassemb.ly/user/30880/files/73210e00-1646-11eb-9527-2cc274ace892)

## Current Component Heirarchy

![image](https://user-images.githubusercontent.com/68978118/97807285-2d9faa80-1c1d-11eb-9f74-82b47cc8ab25.png)

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

## How to use

[Click here](jtx.herokuapp.com)

## Screenshots

- Homepage
  ![image](https://user-images.githubusercontent.com/68978118/97807323-5f187600-1c1d-11eb-97b8-799d1c62c27a.png)

- All Launches
  ![image](https://user-images.githubusercontent.com/68978118/97807375-9850e600-1c1d-11eb-82ed-6ad346f65208.png)

- Starman modal within a modal
  ![image](https://user-images.githubusercontent.com/68978118/97807393-aef73d00-1c1d-11eb-9334-c421f6e4238f.png)

- Ships+NavBar dropdowns
  ![image](https://user-images.githubusercontent.com/68978118/97807466-38a70a80-1c1e-11eb-866d-c8c10cff682f.png)

## Unsolved Mysteries

- Query/Pagination/LoadMore.
  - POST Query wouldn't work: I am n00b.
  - Front-End Mod
- Passing form data wasn't really needed here, so I still need some practice there.

## Solved Mysteries

- Instead of filtering, I created a system where users could navigate between connected components as well as reverse the order of the returned launches.
- Sorting the results of a return in reverse order was as simple as spreading the currrent array into a temparray that gets reversed everytime the button is pressed.
- Not knowing how 100% of your code works is something I will have to keep getting used to. I feel like I have a much better handle on how to make React work for JT, rather than trying to understand how to React was working for React.
- Bootstrap 101
  - HOWEVER
  - Don't get caught using Bootstrap Components without writing semantic code in conjunction. While React Bootstrap will make things pretty for you. It does not account for anything outside of visual interactions. This means we still must write(or have our JSX render) semantic HTML for accessibility.
- Github
- Asking for help: If you finished this week without using any of your tokens, ask yourself which parts of the project caused you unnecessary stress, or which stretch goals you could have acomplished with some assistance. If you think you're done and have enough time to spare, use a token to ask what else you could improve, or just say hello to your TLs and TAs.

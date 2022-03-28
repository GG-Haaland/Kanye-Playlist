## GJ Haaland
# Kanye-Playlist
For our "Theme Park-Themed" full-stack app, we plan to build a database of major amusement parks in the US, as well as the most popular rollercoasters these parks have to offer. The database will be searchable, and have a variety of interative sorting methods to see a few different "Top Ten" lists of the best rollercoasters out there.

## Backend
For my database, I plan to build one collection for Albums, and a separate collection for his Songs, which we will link together via a "one-to-many" data structure.

## Database / Collections
Album (collection) will contain; name, release date, album img, parental advisory, and songs.

Songs (collection) will contain the name of the individual song, length, featured artist. Each song in this collection will be object-associated with the Album where it is found.

## FRONTEND


I plan to layout my app with a simple landing page, a header bar with a few navigation buttons ("Home", "Albums", "About", “Playlist”.), and a search bar to search the albums and songs collection

The Albums Component will display all of the albums and use React Router to allow the user to click each album cover and retrieve information about that album. It will also list all the songs in that given album.

The Playlist Component will have the ability to search songs and add them you a person's playlist. I will also have the ability to add a random song to your playlist.

## Work Flow
The first day or two will be wokring mostly with the backend, collecting the data for Albums and Songs. After that is complete i plan on deticating most of the week to working with react to get my data to render and create personal playlist.

 ### Trello board:
https://trello.com/b/Yf76wiMQ/project-2

### ERD:
![Alt text](https://photos.app.goo.gl/96mU5Pz7C656MV7n8)

### Wireframe:
![Alt text](https://photos.app.goo.gl/jgVxZBL4SehRq6ZC8)


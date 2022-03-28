## GJ Haaland
# Kanye-Playlist
For my full-stack app, I plan to build a database of all of Kanye west albums, as well as every song on each album. The database will be searchable, the ability to create a personal playlist.

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
https://lucid.app/lucidchart/f007d50a-2a34-400e-9033-e96ba9c93d14/edit?invitationId=inv_147384fb-aedf-4655-9f0a-8db4dfee1bd4&page=0_0#

### Wireframe:
https://lucid.app/lucidchart/a4f82c7e-346b-41a6-8130-f5e0cce99bb0/edit?beaconFlowId=44A06E55FAF3E692&invitationId=inv_64bfaaba-e745-4c69-a17c-387aebd0b786&page=0_0#


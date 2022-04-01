const Song = require('../models/song');
const Album = require('../models/album');
const Playlist = require('../models/playlist');



const getAllAlbums = async (req, res) => {
    try {
        const albums = await Album.find()
        return res.status(200).json({ albums })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getAlbumById = async (req, res) => {
    try {
        const { id } = req.params;
        const album = await Album.findById(id)
        if (album) {
            return res.status(200).json({ album });
        }
        return res.status(404).send('album with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateAlbum = async (req, res) => {
    try {
        const { id } = req.params;
        await Album.findByIdAndUpdate(id, req.body, { new: true }, (err, album) => {
            if (err) {
                res.status(500).send(err);
            }
            if (!album) {
                res.status(500).send('Album not found!');
            }
            return res.status(200).json(album);
        })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createAlbum = async (req, res) => {
    try {
        const album = await new Album (req.body)
        await album.save()
        return res.status(201).json({
            album,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const deleteAlbum = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Album.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Album deleted");
        }
        throw new Error("Album not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}



const getSongById = async (req, res) => {
    try {
        const { id } = req.params;
        const song = await Song.findById(id)
        if (song) {
            return res.status(200).json({ song });
        }
        return res.status(404).send('Song with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getAllSongs = async (req, res) => {
    try {
        const song = await Song.find()
        return res.status(200).json({ song })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}



/////////////// PLAYLIST FUNCTIONS //////////////////

const createPlaylist = async (req, res) => {
    try {
        const playlist = await new Playlist (req.body)
        await playlist.save()
        return res.status(201).json({
            album,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllPlaylist = async (req, res) => {
    try {
        const playlist = await Playlist.find()
        return res.status(200).json({ playlist })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

// const updateAlbum = async (req, res) => {
//     try {
//         const { id } = req.params;
//         await Album.findByIdAndUpdate(id, req.body, { new: true }, (err, plant) => {
//             if (err) {
//                 res.status(500).send(err);
//             }
//             if (!album) {
//                 res.status(500).send('Playlist not found!');
//             }
//             return res.status(200).json(album);
//         })
//     } catch (error) {
//         return res.status(500).send(error.message);
//     }
// }

// const deletePlaylist = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const deleted = await Album.findByIdAndDelete(id)
//         if (deleted) {
//             return res.status(200).send("Playlist deleted");
//         }
//         throw new Error("Plant not found");
//     } catch (error) {
//         return res.status(500).send(error.message);
//     }
// }


module.exports = {
    
    getAllAlbums,
    getAlbumById,
    updateAlbum,
    createAlbum,
    deleteAlbum,
    getAllSongs,
    getSongById,
    createPlaylist,
    getAllPlaylist,
    // updatePlaylist,
    // deletePlaylist,

}
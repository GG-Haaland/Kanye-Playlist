const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('kanyeDatabase!'))

// ALBUMS //
router.delete('/albums/:id', controllers.deleteAlbum)
router.get('/albums', controllers.getAllAlbums)
router.get('/albums/:id', controllers.getAlbumById)
router.post('/playlists', controllers.createAlbum)
router.put('/albums/update-album/:id', controllers.updateAlbum)
router.delete('/albums/:id', controllers.deleteAlbum)
router.post('/albums/add-new',controllers.createAlbum)

// SONGS //
router.get('/songs', controllers.getAllSongs)
router.get('/songs:id', controllers.getSongById)



module.exports = router;
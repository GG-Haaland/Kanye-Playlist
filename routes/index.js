const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('kanyeDatabase!'))

// ALBUMS //
router.delete('/albums/:id', controllers.deleteAlbum)
router.get('/albums', controllers.getAllAlbums)
router.get('/albums/:id', controllers.getAlbumById)
router.put('/albums/:id', controllers.editAlbum)
router.put('/albums/:id', controllers.updateAlbum)
router.post('/albums/:id', controllers.createAlbum)
router.delete('/albums/:id', controllers.deleteAlbum)
// router.post('/albums/:id',controllers.createAlbum)
// router.put('/playlists', controllers.createAlbum)
// router.post('/playlists', controllers.createAlbum)

// SONGS //
router.get('/songs', controllers.getAllSongs)
router.get('/songs:id', controllers.getSongById)
router.delete('/songs/:id', controllers.deleteSong)
// router.post('/songs/:id', controllers.updateSong)



module.exports = router;
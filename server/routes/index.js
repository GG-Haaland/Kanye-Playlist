const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('kanyeDatabase!'))

// ALBUMS //
router.get('/albums', controllers.getAllAlbums)
router.get('/albums/:id', controllers.getAlbumById)
// SONGS //
router.get('/songs', controllers.getAllSongs)
router.get('/songs:id', controllers.getSongById)

// router.post('/playlist', controllers.createPlaylist)

module.exports = router;
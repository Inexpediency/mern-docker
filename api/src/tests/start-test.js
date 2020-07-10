const Post = require('../models/post')

module.exports = async () => {
    const silence = new Post({ name: 'Silence' })
    await silence.save((err, savedPost) => {
        if (err) return { ok: null, err: err }
    })
    console.log('HE')
    await Post.find({}, 'name', (err, posts) => {
        if (err) return { ok: null, err: err }
        try {
            if (posts.length === 1 && posts[0].name === 'Silence') {
                return { ok: 'Database is working correctly...', err: null }
            } else {
                return { ok: null, err: 'Database is broken!'}
            }
        } catch (e) {
            return { ok: null, err: e }
        }
    })

    await Post.deleteMany()
}

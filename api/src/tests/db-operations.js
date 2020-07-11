const Post = require('../models/post')

module.exports = async () => {
    try {
        const silence = new Post({name: 'Silence'})
        await silence.save()

        const posts = await Post.find({}, 'name')
        if (!(posts.length === 1)) {
            throw `Database isn't working: posts.length (${posts.length}) must be "1"`
        }
        if (!(posts[0].name === 'Silence')) {
            throw `Database isn't working: posts.name (${posts.name}) must be "Silent"`
        }

        await Post.deleteMany({})
        return { ok: `Database is working correctly ...`, err: null }
    } catch (e) {
        await Post.remove({})
        return { ok: null, err: `Database isn't working: ${e}` }
    }
}

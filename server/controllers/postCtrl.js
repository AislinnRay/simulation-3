module.exports = {
    //read
        getPost: (req, res) => {
            const db = req.app.get('db')
            const { post_id } = req.params
            db.get_post(post_id)
            .then((result) => res.status(200).send(result[0]))
            .catch((err) => res.status(500).send(err))
        },
    //read
        getPosts: (req, res) => {
            const db = req.app.get("db")
            db.get_posts()
            .then((results) => res.status(200).send(results))
            .catch((err) => res.status(500).send(err))
        },
    //creat/add/post
        addPost: (req, res) => {
            console.log("1")
            const db = req.app.get("db")
            console.log(req.body, "2")
            const { title, img, content, author_id} = req.body
            console.log(title, "3")
            db.add_post(title, img, content, author_id)
            .then((post) => res.status(200).send(post))
            .catch((err) => res.status(500).send(err))
        },
    //update/edit/put
        editPost: (req, res) => {
            const db = req.app.get("db")
            const { post_id } = req.params
            const { title, img, content, author_id } = req.body
            db.edit_post(post_id, title, img, content, author_id)
            .then(() => res.sendStatus(200))
            .catch((err) => res.status(500).send(err))
        },
    //delete
        deletePost: (req, res) => {
            const db = req.app.get("db")
            const { post_id } = req.params
            db.delete_post(post_id)
            .then(() => res.sendStatus(200))
            .catch((err) => res.status(500).send(err))
        }
    }
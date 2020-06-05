UPDATE posts2 SET title = $2, image = $3, content= $4 WHERE post_id = $1
returning *;

--author_id
INSERT INTO posts2 (title, img, content, author_id)
VALUES ($1,$2,$3,$4)
returning *;

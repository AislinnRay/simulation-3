select p.title, u.username, u.profile_pic from posts2 posts2
join users2 u on (p.author_id = u.user_id)
where p.title ilike ('%'||$1||'%');
--where p.title = $1;
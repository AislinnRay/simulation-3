insert into users2 (username, password, profile_pic)
values ($1, $2, $3);

select * from users2
where username = $1;
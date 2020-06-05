CREATE TABLE users2 (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(20),
    password VARCHAR(20),
    profile_pic TEXT
);

CREATE TABLE posts2 (
    post_id SERIAL PRIMARY KEY,
    title VARCHAR(45),
    img TEXT,
    content TEXT,
    author_id INT REFERENCES users2(user_id)
);


alter table users2
alter column password type TEXT;

insert into users2
(username, password, profile_pic)
values
('Username1', 'password1', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCd8D89859kL99xCKgHwFTv4QfDRgWc2nrV1FfttrEGgwz0_NB&usqp=CAU'),
('Username2', 'password2','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdHnQLH2doM2ZEEy0jUID2r7X24lcHI2KhxGUoF7TyGOPa9aPl&usqp=CAU'),
('Username3', 'password3', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxvxsE1M14gyj5tqk0SSlg3ccuDoCKvewjEkzMO52oh-HWa5Sm&usqp=CAU');

insert into posts2
(title, img, content, author_id)
values
('Complaint', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1dF62OBbFpfM3ByyjIRWEH_vB5tgzQ9FZAZda690Va6HXN9yq&usqp=CAU', 'Human purchased unusable cat bed. I wanted the box it came in instead', 1),
('Demand', 'https://cdn.shopify.com/s/files/1/0344/6469/files/Screen_Shot_2019-03-01_at_2.27.17_PM.png?v=1551468461', 'Human needs to fix my empty food bowl', 2),
('Trap', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ3rGmRLnepjg3uxlH-rnKDzsQnBAl9mVp1NNRQ3u1WYHxlsb0u&usqp=CAU', 'I am going to request belly rubs from the human so I can bite', 3);

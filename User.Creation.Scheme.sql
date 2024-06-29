PRAGMA foreign_keys = ON;
create table UserInfo if not exists(
    userinfo_id integer primary key autoincrement, 
    description text, 
    user_id integer, 
    foreign key(user_id) references users(user_id)
    on delete cascade
);

create table users if not exists (
    user_id integer primary key autoincrement, 
    username text, 
    password text
);
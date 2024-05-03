use nodedb;

CREATE table people(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(225) not null,
    PRIMARY KEY(id)
);

insert into people values(1, 'Éric');
insert into people values(2, 'Wesley Willians');
insert into people values(3, 'Steve Jobs');

DROP DATABASE if exists eventizer;
CREATE database eventizer;
\c eventizer;

create table event(
  eventID     serial primary key,
  title       text,
  description text,
  eventdate   char (10),
  starttime   char(5),
  endtime     char(5),
  locationID  serial,

    foreign key (locationID) references location(locationID)
);

create table exhibitor(
  exhibitorID   serial primary key,
  eventID       serial,
  title         text,
  description   text,

  foreign key (eventID) references event(eventID)
);

create table exhibitorimg(
  imgID         serial primary key,
  img           bytea,
  exhibitorID   serial,

  foreign key (exhibitorID) references exhibitor(exhibitorID)
);

create table eventimg(
  imgID       serial primary key,
  img         bytea,
  eventID     serial,

  foreign key (eventID) references event(eventID)
);

create table location(
  locationID  varchar(9) primary key,
  level       int,
  buildingID  serial,

  foreign key (buildingID) references building(buildingID)
);

create table building(
  lat         varchar(9),
  long        varchar(9),
  buildingID  serial,

  primary key (lat, long)
);

create table person(
  email      text primary key,
  name       text
);

create table exhibitorcontact(
  exhibitorID serial,
  email       text,

  primary key (exhibitorID, email),
  foreign key (exhibitorID) references exhibitor(exhibitorID),
  foreign key (email) references person(email)
);

\c hej;
DROP DATABASE if exists eventizer;
CREATE database eventizer;
\c eventizer;

create table event(
  eventID     serial primary key,
  title       text,
  description text,
  eventdate   date,
  starttime   time,
  endtime     time,
  locationID  varchar (9)
);

create table exhibitor(
  exhibitorID   serial primary key,
  eventID       serial,
  title         text,
  description   text
);

create table exhibitorimg(
  imgID         serial primary key,
  img           bytea,
  exhibitorID   serial
);

create table eventimg(
  imgID       serial primary key,
  img         bytea,
  eventID     serial
);

create table building(
  lat         float,
  long        float,
  buildingID  serial
);

create table location(
  locationID  varchar(9) primary key,
  level       int,
  buildingID  serial
);

create table contact(
  email      text primary key,
  name       text
);

create table exhibitorcontact(
  exhibitorID serial,
  email       text,

  primary key (exhibitorID, email)
);

alter table building add primary key (buildingID);
alter table event add foreign key (locationID) references location(locationID);
alter table exhibitor add foreign key (eventID) references event(eventID);
alter table exhibitorimg add foreign key (exhibitorID) references exhibitor(exhibitorID);
alter table eventimg add foreign key (eventID) references event(eventID);
alter table location add constraint fk_building foreign key (buildingID) references building(buildingID);
alter table exhibitorcontact add foreign key (exhibitorID) references exhibitor(exhibitorID);
alter table exhibitorcontact add foreign key (email) references contact(email);

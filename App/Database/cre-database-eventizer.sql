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

create table exhibition(
  exhibitionID   serial primary key,
  eventID       serial,
  title         text,
  description   text,
  category      text
);

create table exhibitionimg(
  imgID         serial primary key,
  img           bytea,
  exhibitionID   serial
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

create table exhibitioncontact(
  exhibitionID serial,
  email       text,
  APItoken    text,

  primary key (exhibitionID, email)
);

alter table building add primary key (buildingID);
alter table event add foreign key (locationID) references location(locationID);
alter table exhibition add foreign key (eventID) references event(eventID);
alter table exhibitionimg add foreign key (exhibitionID) references exhibition(exhibitionID);
alter table eventimg add foreign key (eventID) references event(eventID);
alter table location add constraint fk_building foreign key (buildingID) references building(buildingID);
alter table exhibitioncontact add foreign key (exhibitionID) references exhibition(exhibitionID);
alter table exhibitioncontact add foreign key (email) references contact(email);

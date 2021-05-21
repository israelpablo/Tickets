create database AlterTicket

create table CatRutas
(
IdCatRutas int primary key not null identity,
NombreAcceso varchar(250),
FechaCreacion datetime
)

create table CatPrecio
(
IdCatPrecio int primary key not null identity,
NombrePrecio varchar(250),
Precio money,
FechaCreacion datetime
)



create table Accesos
(
IdAcceso int primary key not null identity,
NombreAcceso varchar(250),
FechaCreacion datetime
)
create table Users
(
IdUsuario int primary key not null identity ,
Nombre varchar(250),
ApellidoP Varchar(250),
ApellidoM Varchar(250),
Correo Varchar(250),
Usuario varchar(250),
Pass varchar(250),
IdAcceso int foreign key references Accesos(IdAcceso),
FotoAd image,
FotoAt image,
FechaCreacion datetime
)

create table Boletos
(
IdBoleto int primary key not null identity,
IdUsuario int foreign key references Users(IdUsuario),
IdUsuarioChofer int foreign key references Users(IdUsuario),
IdPrecio int foreign key references CatPrecio(IdCatPrecio),
FechaCreacion datetime,
Estado bit
)
 
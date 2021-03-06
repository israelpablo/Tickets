




USE [AlterTicket]
GO


/* usar un update a la tabla*/

	alter table boletos
	add capturafecha datetime 


/****** Object:  StoredProcedure [dbo].[Consulta2]    Script Date: 6/7/2021 11:20:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[Consulta2]
	-- Add the parameters for the stored procedure here
	@idchofer int,
	@idboleto int
AS
BEGIN



update Boletos
set IdUsuarioChofer=@idchofer, capturafecha= GETDATE(),Estado=1
where IdBoleto=@idboleto and Estado=0
	--	SELECT top 10       dbo.Boletos.IdBoleto, dbo.Boletos.IdUsuarioChofer, dbo.Boletos.IdUsuario, dbo.Boletos.FechaCreacion, dbo.Boletos.Estado, dbo.CatRutas.NombreRuta, dbo.CatRutas.precio,dbo.Boletos.capturafecha
--FROM            dbo.Boletos INNER JOIN
 --                        dbo.Users ON dbo.Boletos.IdUsuario = dbo.Users.IdUsuario AND dbo.Boletos.IdUsuarioChofer = dbo.Users.IdUsuario INNER JOIN
   --                      dbo.CatRutas ON dbo.Boletos.IdCatRuta = dbo.CatRutas.IdCatRutas
--WHERE        (dbo.Boletos.IdUsuarioChofer = 9 and dbo.Boletos.capturafecha>=CONVERT (date, GETDATE()) )
	--					 order by dbo.Boletos.IdBoleto desc
	--	select top 10 * from  Boletos where IdUsuarioChofer=@idchofer and capturafecha>=CONVERT (date, GETDATE())				 
---		order by IdBoleto desc
	SELECT        dbo.Boletos.IdBoleto, dbo.Boletos.IdUsuario, dbo.Boletos.IdUsuarioChofer, dbo.Boletos.FechaCreacion, dbo.Boletos.Estado, dbo.Boletos.IdCatRuta, dbo.Boletos.capturafecha, dbo.CatRutas.precio
FROM            dbo.Boletos INNER JOIN
                         dbo.CatRutas ON dbo.Boletos.IdCatRuta = dbo.CatRutas.IdCatRutas
WHERE        (dbo.Boletos.capturafecha >= CONVERT (date, GETDATE())	) AND  (dbo.Boletos.IdUsuarioChofer = 9)
order by IdBoleto desc
	
	END



	create procedure rutas
	@id varchar(100)
	as
	begin
	select * from CatRutas
	end


	create procedure BoletoAlta
	@idUsuario int,
	@idRuta int 
	as begin 
	insert into Boletos (IdUsuario,FechaCreacion,Estado,IdCatRuta)
	values(@idUsuario,GETDATE(),0,@idRuta)
	SELECT TOP 1 * FROM Boletos
	where IdUsuario=@idUsuario
ORDER BY IdBoleto DESC
	end 

	--actualizacio

		ALTER procedure [dbo].[BoletoAlta]
	@idUsuario int,
	@idRuta int 
	as begin 
	insert into Boletos (IdUsuario,FechaCreacion,Estado,IdCatRuta)
	values(@idUsuario,GETDATE(),0,@idRuta)
	SELECT NombreRuta,precio FROM CatRutas
	where IdCatRutas=@idRuta
select * from Users where idUsuario=@idusuario
SELECT TOP 1 idboleto FROM Boletos
	where IdUsuario=@idUsuario
ORDER BY IdBoleto DESC
	end 

	SELECT * FROM Boletos
	where IdUsuario=2
ORDER BY IdBoleto DESC
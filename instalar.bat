@echo off
title Instalando Modulos

echo / ---------------------------------------------- /
echo         Bot Criado por Skull Rain
echo                 14 / 11 / 2021
echo               All rights reserved.
echo / ---------------------------------------------- /
echo Instalando Modulos requiridos...
echo --------------------------------------
cd %~dp0
cmd /c "npm init"
cmd /c "npm i npm@16
cmd /c "npm i discord.js"
cmd /c "npm i ascii-table"
cmd /c "npm i fs"
cmd /c "npm i quick.db"
echo.
echo Done!
echo Criando ficheiro de inicialização...
echo ------------------------------------
echo @echo off > iniciar.bat
echo :: Criado por Skull Rain (https://github.com/SkullRa1n) [ 14 / 11 / 2021 ] >> iniciar.bat
echo :: -*Leia o readme para saber sobre direitos e permissões!*- >> iniciar.bat
echo title Skull Rain Bot >> iniciar.bat
echo :START >> iniciar.bat
echo node skull.js >> iniciar.bat
echo goto START >> iniciar.bat
echo "iniciar.bat" iniciar.bat criado.
echo ------------------------------------
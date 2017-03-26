@echo off
where npm >nul 2>nul
if %errorlevel%==1 (
    @echo npm not installed... plz install node.js!
	pause
    exit
)

call npm install electron
START npm start
const {app, BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')

let win

let calculateMonthlyPayment = function(principal, years, rate) {
    let monthlyRate = 0;
    if (rate) {
        monthlyRate = rate / 100 / 12;
    }
    let monthlyPayment = principal * monthlyRate /
                         (1 - (Math.pow(1/(1 + monthlyRate), years * 12)));
    return monthlyPayment;
};

function createWindow() {
   win = new BrowserWindow({width: 800, height: 600})
   win.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
   }))
}

app.on('ready', createWindow)

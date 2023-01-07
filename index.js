const { Client, LocalAuth} = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();


client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {
	if(message.body === 'Hola') {
        console.log(message)
        client.sendMessage(message.from, 'Hola como estas?');
	}
});


client.initialize();
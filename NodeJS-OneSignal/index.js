const OneSignal = require('onesignal-node');
const client = new OneSignal.Client('', '');

const notification = {
    contents: {
        'tr': 'Yeni bildirim',
        'en': 'New notification',
        'pt': 'Sua encomenda esta chegando!'
    },
    headings: {
        'en': 'English Title',
        'es': 'Spanish Title',
        'pt': 'BringIt'
    },
    include_player_ids: [''],
    android_accent_color: "FFF200",
    large_icon: "https://cdn.iconscout.com/icon/free/png-256/delivery-box-1835709-1556268.png"
};

/*client.createNotification(notification)
.then(response => {
    console.log(response.body)
})
.catch(e => {
    console.log(e)
});*/

client.viewDevices().then(response => {
    console.log(response.body);
}).catch(e => {
    console.log(e)
});

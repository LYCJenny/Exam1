function getres() {
    //alert("success");
    //把網址複製到postman裡，用jquery , get 產生code，再複製到這塊，要加jQuery的Script
    /** try 1 */


    const cors = require('cors');
    const corsOptions = {
        origin: 'http://localhost:3000',
        credentials: true,            //access-control-allow-credentials:true
        optionSuccessStatus: 200
    }
    app.use(cors(corsOptions));

    // const settings = {
    //     "url": "https://favqs.com/api/qotd",
    //     "method": "GET",
    //     "timeout": 0,
    // };
    // $.ajax(settings).done(function (response) {
    //     console.log(response);
    // });
    /** try 2 */
    // fetch('https://favqs.com/api/qotd', {
    //     method: 'get'
    // }).then(response => response.json())
    //     .then(data => {
    //         const quote = data.quote.body;
    //         displayQuote(quote);
    //     })
    //     .catch(error => {
    //         console.error('Error:', error);
    //     });

    /** try 3 */
    fetch('https://favqs.com/api/qotd', {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            const quote = data.quote.body;
            displayQuote(quote);
        })
        .catch(error => {
            console.error('Error:', error);
        });

    /** try 4 */
    // const apiKey = '49c9c00cdb9d820e9a76de5bf24d8ce4';
    // const endpoint = 'https://favqs.com/api/qotd';

    // fetch(endpoint, {
    //     method: 'GET',
    //     headers: {
    //         Authorization: `Token token=${apiKey}`,
    //     },
    // })
    //     .then(response => response.json())
    //     .then(data => console.log(data));

}

/** Try 3 的程式 */
function displayQuote(quote) {
    const quoteContainer = document.createElement('div');
    quoteContainer.classList.add('container', 'mt-5');
    quoteContainer.innerHTML = `<h3 class="mb-3">Daily Inspirational Quote:</h3>
                          <blockquote class="blockquote">
                            <p class="mb-0">${quote}</p>
                          </blockquote>`;

    document.body.appendChild(quoteContainer);
}
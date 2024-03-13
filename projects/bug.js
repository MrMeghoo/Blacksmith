document.addEventListener('DOMContentLoaded', (event) => {
    document.addEventListener('click', function(e) {
        if(e.target.tagName === 'BUTTON') {
            createVirusAlert();
        }
    });

    function createVirusAlert() {
        const virusAlert = document.createElement('div');
        virusAlert.className = 'virus-alert';
        virusAlert.innerHTML = `
            <span class="minimize">-</span>
            <span class="exit">X</span>
            <p>Virus!</p>
            <img src="smeagol.jpeg" alt="Bug" style="width: 70px; height: 70px;">`;

        document.body.appendChild(virusAlert);

        virusAlert.querySelector('.minimize').addEventListener('click', createVirusAlert);
        virusAlert.querySelector('.exit').addEventListener('click', createVirusAlert);
    }
});

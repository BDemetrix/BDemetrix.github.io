// срипт для .tarif-card
{
    const tarifCard = document.querySelectorAll('.tarif-card');
    if (tarifCard.length) tarifCard.forEach(card => {


        const btns = card.querySelectorAll('.tarif-card__show-info');

        console.log(btns)
        if (btns) btns.forEach(btn => {

            const popUp = document.getElementById(btn.dataset.targetId);

            console.log(btn.dataset.targetId)
            console.log(popUp)
            if (popUp) btn.addEventListener('click', () => {
                popUp.classList.add('_visible');
                btn.classList.add('_open');
                blockOverflow();
            })
        })
    });
}
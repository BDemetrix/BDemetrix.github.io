// срипт для .tarif-card

{
    const tarifCard = document.querySelectorAll('.tarif-card');
    if (tarifCard.length) tarifCard.forEach(card => {
        const popUp = card.querySelector('.tarif-card__pop-up');
        if (!popUp) return;

        const btns = card.querySelectorAll('.tarif-card__show-info, .tarif-card__pop-up-close, .tarif-card__pop-up-cover');
        document.body.append(popUp);
        
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
               popUp.classList.toggle('tarif-card__pop-up--open'); 
               toggleOverflow();
            }) 
        })
    });
}

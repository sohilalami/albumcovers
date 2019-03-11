
        let alleCovers = document.querySelectorAll('.cover');

        const classWelMuis = (evt) => {
            evt.target.classList.remove('geenMuis');
            evt.target.classList.add('welMuis');
        }
        const classGeenMuis = (evt) => {
            evt.target.classList.remove('welMuis');
            evt.target.classList.add('geenMuis');
        }
        for(let i = 0; i < alleCovers.length; i++) {
            alleCovers[i].addEventListener('mouseenter', classWelMuis);
            alleCovers[i].addEventListener('mouseleave', classGeenMuis);
        }

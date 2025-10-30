document.addEventListener('DOMContentLoaded', function() {
  
    const boxes = document.querySelectorAll('.about .box');
    const boxObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                boxObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    boxes.forEach((box, i) => {
        box.setAttribute('data-delay', (i % 5) + 1);
        boxObserver.observe(box);
    });

/*###############################################
#########################################*/
    const skillBars = document.querySelectorAll('.skills .box .percent div, .contactInfo.language .percent div');
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                let target = el.dataset.width || '';
                const inline = el.getAttribute('style') || '';
                const match = inline.match(/width\s*:\s*([\d.]+%)/);
                if (match) target = match[1];
                if (!target) target = '70%';
                requestAnimationFrame(() => { el.style.width = target; });
                skillsObserver.unobserve(el);
            }
        });
    }, { threshold: 0.2 });

    skillBars.forEach(bar => {
        const inline = bar.getAttribute('style') || '';
        const match = inline.match(/width\s*:\s*([\d.]+%)/);
        if (match) {
            bar.dataset.width = match[1];
            bar.style.width = '0';
        }
        skillsObserver.observe(bar);
    });

   /*#####################################################
   ###############################################*/
    const name = document.querySelector('.profiletexte h2');
    name.addEventListener('mouseover', () => {
        name.style.transform = 'scale(1.05)';
        name.style.color = '#3498db';
        name.style.transition = 'all 0.3s ease';
    });

    name.addEventListener('mouseout', () => {
        name.style.transform = 'scale(1)';
        name.style.color = '#fff';
    });
});
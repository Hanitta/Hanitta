
const section = $('.slider-elem');
const display = $('.wrapper-page-slider');
let inScroll = false;

const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();

const countPosition = sectionEq => { 
    return (sectionEq * -100)+ '%';
}

const switchActiveClass = (elems, elemEq) => {
    elems
        .eq(elemEq)
        .addClass('fixed-menu__item--active')
        .siblings()
        .removeClass('fixed-menu__item--active');
}

const performTransition = sectionEq => {
        
    if (inScroll) return
        inScroll = true;
        const position = countPosition(sectionEq);
        
        
        const switchFixedMenuActiveClass = () => 
        switchActiveClass($('.fixed-menu__item'), sectionEq);
        
        switchFixedMenuActiveClass();
        

       switchActiveClass(section, sectionEq);

        display.css({
            transform: `translateY(${position})`
    })

    setTimeout(() => {
        inScroll = false;
    }, 1000 + 300);

    
    
}

const scrollViewport = direction => {
    const activeSection = section.filter('.fixed-menu__item--active');
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();
  

    if (direction === "next" && nextSection.length) {
        performTransition(nextSection.index());
    }

    if (direction === "prev" && prevSection.length) {
        performTransition(prevSection.index());
    }

}

$(document).on("wheel", e => {
    const deltaY = e.originalEvent.deltaY;
    
    if(deltaY > 0) {
        scrollViewport("next");
    }
    
    if(deltaY < 0) {
        scrollViewport("prev");
    }
    
    
});


$(document).on('keydown', e => {

    switch(e.keyCode) {
        case 38:
            scrollViewport('prev');
        break;
        case 40:
            scrollViewport('next');
        break;
    }
    /*
    const tagName = e.target.tagName.toLowerCase();
    const userTypingInputs = tagName === 'input' || tagName === 'textarea';

    if (userTypingInputs=false) {
        switch(e.keyCode) {
            case 38:
                scrollViewport('prev');
            break;
            case 40:
                scrollViewport('next');
            break;
        } 
    }*/

});

$('[data-scroll-to]').on('click', e => {
    e.preventDefault();

    const target = parseInt($(e.currentTarget).attr('data-scroll-to'));
    performTransition(target);
});

if (isMobile) {
    window.addEventListener('touchmove', e => {
        e.preventDefault();
    },
    {passive: false}
    );

    $(document).ready(() => {

        $("body").swipe( {
            swipe:function(event, direction) {
            // $(this).text("You swiped " + direction ); 
                let scrollDirection;
                
                if (direction === 'up') {
                    scrollDirection = 'next';
                }

                if (direction === 'down') {
                    scrollDirection = 'prev';
                }

                scrollViewport(scrollDirection);
            }
        })
  });
}

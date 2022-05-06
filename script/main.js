$(document).ready(function() {
    $('.step').each(function(i, obj) {
        $(obj).attr('data-content',i+1);
    });
  
    $('.btn-next').on('click', function(event) {
        event.preventDefault();
        let cur = $(this).closest('.step');
        let next = $(cur).next();
        $(cur).addClass('minimized');
        $(cur).addClass('step-done');
        setTimeout(function() {
            while (($(next).hasClass('step-disabled'))) {
                next = $(next).next();
            }
            $(next).removeClass('minimized');
            curOpen = $(next);
        }, 240);
    });

    $('.step .step-content').on('click' ,function(e) {
        e.stopPropagation();
    });

    $('.step').on('click', function() {
        if (!$(this).hasClass("minimized")) {
            curOpen = null;
            $(this).addClass('minimized');
        }
        else {
            if (!$(this).hasClass("step-disabled")) {
                let next = $(this);
                if (curOpen === null) {
                    curOpen = next;
                    $(curOpen).removeClass('minimized');
                }
                else {
                    $(curOpen).addClass('minimized');
                    setTimeout(function() {
                        $(next).removeClass('minimized');
                        curOpen = $(next);
                    }, 300);
                }
            }            
        }
    });
});
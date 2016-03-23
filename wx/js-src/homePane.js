define(['jquery', 'hammer', 'card'], function($, Hammer, Card){
    var slice = Array.prototype.slice;
    var home = {
        init: function(){
            var sliderContainer = $('#sliderContainer');
            sliderContainer.on('slide.bs.carousel', function (e) {
              console.log('start to slide');
              $('#homeFoot').find('li').removeClass('active').filter(':eq('+ e.relatedTarget.dataset.number +')').addClass('active');
              $(this).find('.item').css('overflow-y', 'hidden');
            }).on('slid.bs.carousel', function (e) {
              console.log('ends to slide');
              $(this).find('.item').css('overflow-y', 'auto');
            });

            new Hammer(sliderContainer[0]).on('swipeleft', function(){
              sliderContainer.carousel('next');
            }).on('swiperight', function(){
              sliderContainer.carousel('prev');
            });

            slice.call(document.querySelectorAll('#homeFoot li'), 0).forEach(function(li){
                new Hammer(li).on('tap', function(){
                    sliderContainer.carousel((parseInt(li.dataset['to'])));
                });
            });

            new Hammer(document.querySelector('#fromPlace')).on('tap', function(){
                
            })

            $('#addCard').click(function(){
                var card = new Card({
                    content: "<span>I am a card</span>",
                    onOpen: function(){
                        console.log('card open');
                    },
                    onClose: function(){
                        console.log('card close')
                    }
                });
                $('#bcMain').append(card.getEl());
                card.show();
            });
        }
    };

    return home;
});


// ;(function (BC, $) {
//     function Card(){
//         this.dom = $('<div />').addClass('card');
//     }

//     function Dialog(){
//         var html = '<div id="dg001" class="modal fade"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title">Modal title</h4></div><div class="modal-body"><p>One fine body&hellip;</p></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button><button type="button" class="btn btn-primary">Save changes</button></div></div><!-- /.modal-content --></div><!-- /.modal-dialog --></div><!-- /.modal -->';
//         this.dom = $('#dg001');
//         this.dom.modal({backdrop: true});
//         $(document.body).append(html);
//         this.dom.on('hidden.bs.modal', function(){
//             console.log('hide Dialog');
//             this.dom.remove();
//         }.bind(this));
//     }

//     Dialog.prototype.show = function() {
//         this.dom.modal('show');
//     };
//     Dialog.prototype.close = function() {
//         this.dom.modal('hide');
//     };


//     var homePane = {
//         container: $('#homeContainer'),
//         searBtn: $('#searchTab'),
//         lineBtn: $('#lineTab'),
//         findBtn: $('#findTab')
//     };

//     [homePane.searBtn, homePane.lineBtn, homePane.findBtn].forEach(function(btn){
//         btn.on('click', function(){
//             new Dialog().show();
//             // homePane.container.querySelector('.tab-selected').classList.remove('tab-selected');
//             // btn.classList.add('tab-selected');
//             // homePane.container.querySelector('.active').classList.remove('active');
//             // $('#' + btn.getAttribute('data-for')).classList.add('active');
//         });
//     });
// } (window.BC, $))
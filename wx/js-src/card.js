define(['jquery', 'backbone'], function($, Backbone){
    var CardView = Backbone.View.extend({
        tagName: 'div',
        className: 'card',
        initialize: function(){
            
        },
        render: function(){
            setTimeout(function(){
                this.el.addClass('card-active');
                this.onOpen();
            }.bind(this), 50);
        },
        remove: function(){
            this.el.removeClass('card-active');
            this.onClose();
        }
    });


    function Card(opts){
        this.el = $('<div class="card"><div class="card-header"><span class="card-close glyphicon glyphicon-arrow-left"></span></div><div class="card-content"></div></div>');
        this.elHeader = this.el.find('.card-header');
        this.elContent = this.el.find('.card-content');
        this.elContent.html(opts.content || '');

        this.onOpen = opts.onOpen || function(){};
        this.onClose = opts.onClose || function(){};
        this.initEvents();
    }

    Card.prototype.initEvents = function() {
        this.elHeader.find('.card-close').one('click', this.close.bind(this));
    };

    Card.prototype.show = function() {
        setTimeout(function(){
            this.el.addClass('card-active');
            this.onOpen();
        }.bind(this), 50);
    };

    Card.prototype.close = function() {
        this.el.removeClass('card-active');
        this.onClose();
    };

    Card.prototype.getEl = function() {
        return this.el;
    };

    return Card;
});
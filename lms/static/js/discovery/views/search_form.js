(function(define) {
    define(['jquery', 'backbone', 'gettext'], function($, Backbone, gettext) {
        'use strict';

        return Backbone.View.extend({

            el: '#discovery-form',
            events: {
                'submit form': 'submitForm'
            },

            initialize: function() {
                this.$searchField = this.$el.find('input');
                this.$searchButton = this.$el.find('button');
                this.$message = this.$el.find('#discovery-message');
                this.$loadingIndicator = this.$el.find('#loading-indicator');
            },

            submitForm: function(event) {
                event.preventDefault();
                this.doSearch();
            },

            doSearch: function(term) {
                if (term !== undefined) {
                    this.$searchField.val(term);
                } else {
                    term = this.$searchField.val();
                }
                this.trigger('search', $.trim(term));
            },

            clearSearch: function() {
                this.$searchField.val('');
            },

            showLoadingIndicator: function() {
                this.$loadingIndicator.removeClass('hidden');
            },

            hideLoadingIndicator: function() {
                this.$loadingIndicator.addClass('hidden');
            },

<<<<<<< HEAD
            // showFoundMessage: function(count) {
            //     var msg;
            //     if (count > 0) {
            //         msg = ngettext(
            //             'Found %s course for "%s"',
            //             'Found %s courses for "%s"',
            //             count
            //         );
            //     } else {
            //         msg = ngettext(
            //             'Viewing %s course',
            //             'Viewing %s courses',
            //             count
            //         );
            //     }
            //     this.$message.html(interpolate(msg, [count, _.escape(term)]));
            // },
=======
            showFoundMessage: function(count) {
                var msg = ngettext(
                    'Viewing %s course',
                    'Viewing %s courses',
                    count
                );
                this.$message.html(interpolate(msg, [count]));
            },
>>>>>>> parent of 4a0cae0bfe9 (Update search_form.js)

            // showNotFoundMessage: function(term) {
            //     var msg = interpolate(
            //         gettext('We couldn\'t find any results for "%s".'),
            //         [_.escape(term)]
            //     );
            //     this.$message.html(msg);
            //     this.clearSearch();
            // },

            showErrorMessage: function(error) {
                this.$message.text(gettext(error || 'There was an error, try searching again.'));
            }

        });
    });
}(define || RequireJS.define));

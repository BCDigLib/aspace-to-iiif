(function(a){a.jstree.defaults.select_limit=20;a.jstree.plugins.select_limit=function(b,c){this.select_node=function(e,f,d){if(this.settings.select_limit>this.get_selected().length){c.select_node.call(this,e,f,d)}}}})(jQuery);
/**
 * FSS desktop tabs view
 */
Ext.define('FSS.view.desktop.tabpanel.tab.Tab', {
    extend: 'Ext.Panel',

    requires: [
        'FSS.view.desktop.tabpanel.tab.TabModel',
		'FSS.view.desktop.tabpanel.tab.TabController'
    ],

    viewModel: {
        type: 'fssTabModel'
    },

    controller: 'fssTabController',

    baseCls: 'fssBaseTab'
});
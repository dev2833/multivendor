import {
    Home,
    Box,
    DollarSign,
    Tag,
    Clipboard,
    Camera,
    AlignLeft,
    UserPlus,
    Users,
    Chrome,
    BarChart,Settings,Archive, LogIn
} from 'react-feather';

export const MENUITEMS = [

    {
        title: 'Products', icon: Box, type: 'sub', active: false, children: [
            
                { path: '/products/list', title: 'Product List', type: 'link' },
                { path: '/products/add', title: 'Add Product', type: 'link' },
                { path: '/products/pending', title: 'Pending Products', type: 'link' },   
  
        ]
    },
    {
        title: 'Sales', icon: DollarSign, type: 'sub', active: false, children: [
            { path: '/sales/orders', title: 'Orders', type: 'link' },
            { path: '/sales/history', title: 'Order History', type: 'link' },
        ]
    },
    {
        title: 'Stores', icon: Camera, type: 'sub', active: false, children: [
            
                { path: '/store/pending_list', title: 'Store Pending List', type: 'link' },
                { path: '/store/add', title: 'Create New Store', type: 'link' },

        ]
    },

    {
        title: 'Store Gold & Silver', icon: Users, type: 'sub', active: false, children: [
            { path: '/store/list', title: 'History of Gold & Silver', type: 'link' },
            { path: '/store/create', title: 'Update Current Rate', type: 'link' },
           
        ]
    },

    {
        title: 'Try At Home Order ',path:'/try_home/history', icon: Chrome, type: 'link', active: false
    },

    {
        title: '10+1 Safe ',path:'/tenPlusOne/history', icon: Archive, type: 'link', active: false
    },
    {
        title: 'Reports',path:'/reports/report', icon: BarChart, type: 'link', active: false
    },
    {
        title: 'Settings', icon: Settings, type: 'sub', children: [
            { path: '/settings/profile', title: 'My Profile', type: 'link' },
            { path: '/settings/business_profile', title: 'My Business Profile', type: 'link' },
            { path: '/settings/store', title: 'Store Info', type: 'link' },
        ]
    },

]

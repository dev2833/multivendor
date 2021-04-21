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
    ShoppingCart,
    BarChart,Settings,Archive, LogIn
} from 'react-feather';

export const MENUITEMS2 = [
    {
        path: '/dashboard', title: 'Dashboard', icon: Home, type: 'link', badgeType: 'primary', active: false
    },
    {
        title: 'Products', icon: Box, type: 'sub', active: false, children: [
            
                { path: '/products/admin_list', title: 'Product List', type: 'link' },
                { path: '/products/add', title: 'Add Product', type: 'link' },
                { path: '/products/category', title: 'Category', type: 'link' },   

        ]
    },
    {
        title: 'Stores', icon: Clipboard, type: 'sub', active: false, children: [
            
                { path: '/store/createStore', title: 'Create Store', type: 'link' },
                { path: '/store/pending_list', title: 'Store Management', type: 'link' },

        ]
    },
    {
        title: 'Sales', icon: ShoppingCart, type: 'sub', active: false, children: [
            { path: '/sales/orders', title: 'Orders', type: 'link' },
            { path: '/sales/history', title: 'Order History', type: 'link' },
        ]
    },

    {
        title: 'Users', icon: UserPlus, type: 'sub', active: false, children: [
            { path: '/users/createUser', title: 'Create User', type: 'link' },
            { path: '/users/approve-user', title: 'User Management', type: 'link' },
            
        ]
    },
    {
        title: 'Vendors', icon: Users, type: 'sub', active: false, children: [
            { path: '/vendors/createVendor', title: 'Create Vendor', type: 'link' },
            { path: '/vendors/approve-vendor', title: 'Vendor Management', type: 'link' },
        ]
    },
    {
        title: 'Shop Gold & Silver', icon: DollarSign, type: 'sub', active: false, children: [
            { path: '/store/list', title: 'History of Gold & Silver', type: 'link' },
            { path: '/store/create', title: 'Update Current Rate', type: 'link' },
           
        ]
    },

    {
        title: 'Reports',path:'/reports/report', icon: BarChart, type: 'link', active: false
    },
    {
        title: 'Settings', icon: Settings, type: 'sub', children: [
            { path: '/settings/profile', title: 'My Profile', type: 'link' },
   
        ]
    },

]

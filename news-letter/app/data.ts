export interface Signupimages {
  desktopUrl: string;
  mobileUrl: string;
  iconSucc: string;
  iconList: string
}

export interface IconList {
    iconUrl: string;
    text: string;
}

export interface EmailList {
    id: string;
    email: string;
}

export const signups: Signupimages[] = [{
 desktopUrl: 'desktop-signup.svg',
 mobileUrl: 'mobile-signup.svg',
 iconSucc: 'icon-success.svg',
 iconList: 'icon-list.svg'

},
];

export const iconlist: IconList[] = [
    { iconUrl: "icon-success.svg", text: "Product discovery and building what matters" },
  { iconUrl: "icon-success.svg", text: "Measuring to ensure updates are a success" },
  { iconUrl: "icon-success.svg", text: "And much more!" }
]

export const emaillist: EmailList[] = [{
  id: "1",
  email: 'example@gmail.com'
},{id: "2", email: "johno@gmail.com"}]
import { Post, Story, User } from "../interfaces/interfaces";

export const users: User[] = [
    {
        id: '1',
        name: 'Ivan Lara',
        thumbnail: 'https://instagram.fmga7-1.fna.fbcdn.net/v/t51.2885-19/s150x150/237701392_820046848593104_4269712248220123619_n.jpg?_nc_ht=instagram.fmga7-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=Wp1YxXfmvvUAX-kqo_j&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT-3NdOjddkx6Wh1PcU6zWfTBSnVaq53f1ZRyKG_JQ81Sw&oe=61CA7658&_nc_sid=7bff83',
        isOnline: true,
    },
    {
        id: '2',
        name: 'Josep Pedredol',
        thumbnail: 'https://instagram.fmga7-1.fna.fbcdn.net/v/t51.2885-19/s150x150/12070954_104307003259594_1269829117_a.jpg?_nc_ht=instagram.fmga7-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=buNwIOBEVmoAX9jrY8D&edm=ALCvFkgBAAAA&ccb=7-4&oh=00_AT9cYA1zLoXwJs_3UKC-b8UpY2tENnYxtKkLq4ueh9hWbg&oe=61CAA2D4&_nc_sid=643ae9',
        isOnline: true,
    },
    {
        id: '10',
        name: 'Leo Messi',
        thumbnail: 'https://instagram.fmga7-1.fna.fbcdn.net/v/t51.2885-19/s150x150/43818140_2116018831763532_3803033961098117120_n.jpg?_nc_ht=instagram.fmga7-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=uSxLHucOZkEAX8pzgaC&edm=ALbqBD0BAAAA&ccb=7-4&oh=00_AT-bjqGtlXTNVCBArFcZkEjjE23v-3qAQDk0m8XbLRXpbw&oe=61CB400A&_nc_sid=9a90d6',
        isOnline: true,
    },
];

export const stories: Story[] = [
    {
        id: '1',
        name: "Elon Musk",
        src: "https://instagram.fmga7-1.fna.fbcdn.net/v/t51.2885-19/s150x150/44329317_268583430479565_454483638147350528_n.jpg?_nc_ht=instagram.fmga7-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=VC5XU47OtwkAX9p-PZp&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT8c2qAlx0AyuUqbau_mZHQFjvAV6o_xKz2jjCiT6ZIEuQ&oe=61C9B630&_nc_sid=4f375e",
        post: "https://instagram.fmga7-1.fna.fbcdn.net/v/t51.2885-15/e35/264669482_597386234813170_856910295181981436_n.jpg?_nc_ht=instagram.fmga7-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=ueaWUmcYbBcAX8M-Tap&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT8OAeBzhCYZZeM12YfrUYDoqkikyEiSYsJOfkmiHQOBMA&oe=61CAED11&_nc_sid=4f375e",
    },
    {
        id: '2',
        name: "Jeff Bezos",
        src: "https://instagram.fmga7-1.fna.fbcdn.net/v/t51.2885-19/s150x150/20065787_368487153565914_9007716647976304640_a.jpg?_nc_ht=instagram.fmga7-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=GVNgN1NXMPEAX8Ryz61&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT-TfI2ILAFPfneY_66LWcqssqIXvM_YNWmPe3dQLZDVSA&oe=61C976E8&_nc_sid=7bff83",
        post: "https://instagram.fmga7-1.fna.fbcdn.net/v/t51.2885-15/e35/c307.0.825.825a/s320x320/250631384_421689215993116_1870795613423426429_n.jpg?_nc_ht=instagram.fmga7-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=Gl6eJGZhXDYAX8AFNif&edm=APU89FABAAAA&ccb=7-4&oh=00_AT_XkLelBL4vxphkkTRAT5LQAMA7AHXR4jG9OysnejRVEA&oe=61CA652B&_nc_sid=86f79a",
    },
    {
        id: '3',
        name: "Mark Zuckerberg",
        src: "https://instagram.fmga7-1.fna.fbcdn.net/v/t51.2885-19/s150x150/177219615_1728341124004802_3178671336629535217_n.jpg?_nc_ht=instagram.fmga7-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=BM6nR0zC6YkAX-uMuVn&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT-yAncVg3UCPWkVJtKUt_GyR2FwYicbJRlVM1nmtHfCZQ&oe=61CAAC23&_nc_sid=7bff83",
        post: "https://instagram.fmga7-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/257165624_565382301229117_223398014529779896_n.jpg?_nc_ht=instagram.fmga7-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=PfW7tF8sP_8AX9bO6nf&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT8Dn77Ymygw2UTrnsbUXqHz0cLzLR7KcTuwH3K2Z1NfdQ&oe=61CA09F2&_nc_sid=7bff83",
    },
    {
        id: '4',
        name: "Bill Gates",
        src: "https://instagram.fmga7-1.fna.fbcdn.net/v/t51.2885-19/s150x150/225760187_1015281789289441_8550438468761042274_n.jpg?_nc_ht=instagram.fmga7-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=oCJ9SsXkp7UAX9shIQW&edm=ALbqBD0BAAAA&ccb=7-4&oh=00_AT-zZAg5Mthlm_TvQZsJgPluqbghxiRECRwJpS9GLNe7hg&oe=61CA392E&_nc_sid=9a90d6",
        post: "https://instagram.fmga7-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/247703574_275063081189568_1795322260860244925_n.jpg?_nc_ht=instagram.fmga7-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=INR0qPVy-2QAX8OcMXJ&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT9HCF3i4IqKTA5JuQaIv8nFw5t6QkTnXA02D4aRcMcxIw&oe=61CB612D&_nc_sid=7bff83",
    },
    {
        id: '5',
        name: "Guido van Rossum",
        src: "https://instagram.fmga7-1.fna.fbcdn.net/v/t51.2885-19/s150x150/80375142_453766435573034_5771978090641096704_n.jpg?_nc_ht=instagram.fmga7-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=kpgJ0FI0pK8AX_B8Hs7&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT8IKZxa-WW1pqrxDf2PaV_95f1DuGuu4e9x41TQbCe_QA&oe=61CADE7F&_nc_sid=7bff83",
        post: "https://instagram.fmga7-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/266368965_667195491111498_5430470341644236674_n.jpg?_nc_ht=instagram.fmga7-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=8K0HCrTEweIAX_PkoeE&tn=8g6_A4PYPSD0tHzA&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT9RbbpdiWHWkokwAEPg1i_xpTCgACSWfvgfmtM-17yKAA&oe=61CB44C3&_nc_sid=7bff83",
    },
    {
        id: '6',
        name: "Ivan Lara",
        src: "https://instagram.fmga7-1.fna.fbcdn.net/v/t51.2885-19/s150x150/237701392_820046848593104_4269712248220123619_n.jpg?_nc_ht=instagram.fmga7-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=Wp1YxXfmvvUAX-kqo_j&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT-3NdOjddkx6Wh1PcU6zWfTBSnVaq53f1ZRyKG_JQ81Sw&oe=61CA7658&_nc_sid=7bff83",
        post: "https://instagram.fmga7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/146259572_330126301623833_783647560133418591_n.jpg?_nc_ht=instagram.fmga7-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=emwaDRm7rb0AX-v76US&tn=8g6_A4PYPSD0tHzA&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT_406bBecUWf4svEF3bJ5loFGQz32SzxgYcjTbh0pCuoQ&oe=61CA6F75&_nc_sid=4f375e",
    },
];

export const posts: Post[] = [
    {
        id: '111',
        title: 'Feeling good!',
        picture: 'https://instagram.fmga7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/130851282_685447185504117_3419873518524104468_n.jpg?_nc_ht=instagram.fmga7-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=jQYEJKE4T9sAX8eL3E7&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT-fpXzAVtbNToB3oQbGk65hpArgFfqiCcqnakgM0dmGzw&oe=61CA361A&_nc_sid=4f375e',
        name: 'Ivan Lara',
        date: '12 de Octubre a las 10:20'
    },
    {
        id: '222',
        title: 'Feeling good!',
        picture: 'https://instagram.fmga7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/230631094_953633625196244_5774318976300849117_n.jpg?_nc_ht=instagram.fmga7-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=lMa7W4Loj7sAX-7vsYH&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT9MC3wg-af-h9ubWaojpkNufGwGsAnNfTIXmPbdIErQMw&oe=61C9C82A&_nc_sid=4f375e',
        name: 'Bill Gates',
        date: '09 de Octubre a las 07:35'
    },
    {
        id: '333',
        title: 'Feeling good!',
        picture: 'https://instagram.fmga7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/141440025_336661654160736_8548630946381360307_n.jpg?_nc_ht=instagram.fmga7-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=98pwqpCSqWsAX-wr-bS&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT-TDuccd2Qhq_t9_gIfKgMWsRBhsawNvKpkqP0mlxJXyQ&oe=61CA55B3&_nc_sid=4f375e',
        name: 'Ivan Lara',
        date: '04 de Octubre a las 11:23'
    },
    {
        id: '444',
        title: 'Feeling good!',
        picture: 'https://instagram.fmga7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/82150856_616853899107296_13785390044266629_n.jpg?_nc_ht=instagram.fmga7-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=KGBl8CxMYPMAX8NRC3J&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT-He-1O6iwmjNLpPYb4ED4IGFLQQGQDPFh1fIG_O8BSQw&oe=61C9ED9B&_nc_sid=4f375e',
        name: 'Ivan Lara',
        date: '04 de Octubre a las 09:37'
    },
    {
        id: '555',
        title: 'Feeling good!',
        picture: 'https://instagram.fmga7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/261499518_489402662328497_6555398658349718626_n.jpg?_nc_ht=instagram.fmga7-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=oVz1p1C9cncAX_ufN3-&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT9YhieMaY9g2TJUPEM6D619jnh1v-sn-Y21l2N4zOOEPA&oe=61CA6196&_nc_sid=4f375e',
        name: 'Elon Musk',
        date: '01 de Octubre a las 23:12'
    },
];

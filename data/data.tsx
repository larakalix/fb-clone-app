import { Post, Story, User } from "../interfaces/interfaces";

export const users: User[] = [
    {
        id: '1',
        name: 'Ivan Lara',
        thumbnail: 'https://instagram.fmga7-1.fna.fbcdn.net/v/t51.2885-19/s320x320/237701392_820046848593104_4269712248220123619_n.jpg?_nc_ht=instagram.fmga7-1.fna.fbcdn.net&_nc_ohc=C4jV3Zhcip4AX-GdLr_&edm=ABfd0MgBAAAA&ccb=7-4&oh=d1e6f473c522f0fc9816947ba56ec572&oe=616FEDF0&_nc_sid=7bff83',
        isOnline: true,
    },
    {
        id: '2',
        name: 'Josep Pedredol',
        thumbnail: 'https://instagram.fmga7-1.fna.fbcdn.net/v/t51.2885-19/s150x150/12070954_104307003259594_1269829117_a.jpg?_nc_ht=instagram.fmga7-1.fna.fbcdn.net&_nc_ohc=kVPRm7B9takAX8Q6HRs&edm=ABfd0MgBAAAA&ccb=7-4&oh=f24cfeb51fb3cab0161733747b3e2f27&oe=616FAB54&_nc_sid=7bff83',
        isOnline: true,
    },
    {
        id: '10',
        name: 'Leo Messi',
        thumbnail: 'https://instagram.fmga7-1.fna.fbcdn.net/v/t51.2885-19/s320x320/43818140_2116018831763532_3803033961098117120_n.jpg?_nc_ht=instagram.fmga7-1.fna.fbcdn.net&_nc_ohc=6ALn7OyV0dcAX9fPhAM&edm=ABfd0MgBAAAA&ccb=7-4&oh=0b515d9462689b50bcc3902fd479b7cc&oe=61709BF2&_nc_sid=7bff83',
        isOnline: true,
    },
];

export const stories: Story[] = [
    {
        id: '1',
        name: "Elon Must",
        src: "https://instagram.fmga7-1.fna.fbcdn.net/v/t51.2885-19/s320x320/140055104_113817703985274_7306032941371618956_n.jpg?_nc_ht=instagram.fmga7-1.fna.fbcdn.net&_nc_ohc=kYoLA7wEj5QAX-V0k-K&edm=ABfd0MgBAAAA&ccb=7-4&oh=dda024b86bc2e0f92904e5439aa396f0&oe=616F9FCC&_nc_sid=7bff83",
        post: "https://instagram.fmga7-1.fna.fbcdn.net/v/t51.2885-15/e35/242806876_1017113635743073_5366202242819072983_n.jpg?_nc_ht=instagram.fmga7-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=8gtz4W67w0oAX_-9aIb&edm=AP_V10EBAAAA&ccb=7-4&oh=c7af44ecd14e09a351f22acd8b784833&oe=616FD1B5&_nc_sid=4f375e",
    },
    {
        id: '2',
        name: "Jeff Bezos",
        src: "https://instagram.fmga7-1.fna.fbcdn.net/v/t51.2885-19/s320x320/20065787_368487153565914_9007716647976304640_a.jpg?_nc_ht=instagram.fmga7-1.fna.fbcdn.net&_nc_ohc=b9zc55pBJNAAX_7F8AI&edm=ABfd0MgBAAAA&ccb=7-4&oh=67a14c71d051934a8e1e378f7c668c53&oe=61702AD8&_nc_sid=7bff83",
        post: "https://instagram.fmga7-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/245652416_422699685925293_8010477044198893297_n.jpg?_nc_ht=instagram.fmga7-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=lpqwbWrlSh4AX_DCzq9&edm=AP_V10EBAAAA&ccb=7-4&oh=4ef4debba1686dcf045c75fd6019944b&oe=616FB6F4&_nc_sid=4f375e",
    },
    {
        id: '3',
        name: "Mark Zuckerberg",
        src: "https://instagram.fmga7-1.fna.fbcdn.net/v/t51.2885-19/s320x320/177219615_1728341124004802_3178671336629535217_n.jpg?_nc_ht=instagram.fmga7-1.fna.fbcdn.net&_nc_ohc=0jrm53_8VuMAX_q9bA2&edm=ABfd0MgBAAAA&ccb=7-4&oh=fc2055ce49ee38d8c4fd7a7ed7f27141&oe=616EF176&_nc_sid=7bff83",
        post: "https://instagram.fmga7-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/188084520_625167462215725_451963563410871878_n.jpg?_nc_ht=instagram.fmga7-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=wzRReUCQV50AX-aoW6B&edm=AP_V10EBAAAA&ccb=7-4&oh=98ace088938a8204a456ec852b68a55b&oe=617057D6&_nc_sid=4f375e",
    },
    {
        id: '4',
        name: "Bill Gates",
        src: "https://instagram.fmga7-1.fna.fbcdn.net/v/t51.2885-19/s320x320/225760187_1015281789289441_8550438468761042274_n.jpg?_nc_ht=instagram.fmga7-1.fna.fbcdn.net&_nc_ohc=-plqqyWApboAX8UUJ6P&edm=ABfd0MgBAAAA&ccb=7-4&oh=b0770c70cb90e5497372219c8a467674&oe=617031BB&_nc_sid=7bff83",
        post: "https://instagram.fmga7-1.fna.fbcdn.net/v/t51.2885-15/e35/241392260_566239541159212_2160972868549498660_n.jpg?_nc_ht=instagram.fmga7-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=CvLmZcE1yjcAX9T4Qi9&edm=AP_V10EBAAAA&ccb=7-4&oh=3307590192847328baa853d320d6a159&oe=616EB7B6&_nc_sid=4f375e",
    },
    {
        id: '5',
        name: "Guido van Rossum",
        src: "https://instagram.fmga7-1.fna.fbcdn.net/v/t51.2885-19/s320x320/80375142_453766435573034_5771978090641096704_n.jpg?_nc_ht=instagram.fmga7-1.fna.fbcdn.net&_nc_ohc=PaU2qWxbXRYAX86NVfC&edm=ABfd0MgBAAAA&ccb=7-4&oh=b7173c5a90ae2443f104dc01c42f2e4a&oe=6170314F&_nc_sid=7bff83",
        post: "https://instagram.fmga7-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/242809705_222959029869776_3834951698013920079_n.jpg?_nc_ht=instagram.fmga7-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=JbNEpsutngUAX__fyZF&edm=AP_V10EBAAAA&ccb=7-4&oh=6ec031341acbb42565c19cf0ab79d638&oe=616FCA55&_nc_sid=4f375e",
    },
    {
        id: '6',
        name: "Ivan Lara",
        src: "https://instagram.fmga7-1.fna.fbcdn.net/v/t51.2885-19/s320x320/237701392_820046848593104_4269712248220123619_n.jpg?_nc_ht=instagram.fmga7-1.fna.fbcdn.net&_nc_ohc=C4jV3Zhcip4AX-GdLr_&edm=ABfd0MgBAAAA&ccb=7-4&oh=d1e6f473c522f0fc9816947ba56ec572&oe=616FEDF0&_nc_sid=7bff83",
        post: "https://instagram.fmga7-1.fna.fbcdn.net/v/t51.2885-15/e35/130851282_685447185504117_3419873518524104468_n.jpg?_nc_ht=instagram.fmga7-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=SN92kOnxOOUAX-PW_H_&edm=AP_V10EBAAAA&ccb=7-4&oh=c4159bccfe98a4b806438902b8384482&oe=616F86A4&_nc_sid=4f375e",
    },
];

export const posts: Post[] = [
    {
        id: '111',
        title: 'Feeling good!',
        picture: 'https://instagram.fmga7-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/149763184_813236049273200_207535782368099585_n.jpg?_nc_ht=instagram.fmga7-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=ht_ILIi7yFAAX_obrqa&edm=AP_V10EBAAAA&ccb=7-4&oh=eb76ba27c01fe53c9786df42af85a399&oe=616F36D8&_nc_sid=4f375e',
        name: 'Ivan Lara',
        date: '12 de Octubre a las 10:20'
    },
    {
        id: '222',
        title: 'Feeling good!',
        picture: 'https://instagram.fmga7-1.fna.fbcdn.net/v/t51.2885-15/e35/117693704_124755999240410_5240165352704521782_n.jpg?_nc_ht=instagram.fmga7-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=J0xZJTxgpOYAX8zPtwB&edm=AP_V10EBAAAA&ccb=7-4&oh=fcc5e2d489f0b19c8b77e3f1f5e1ffdb&oe=616FC0E2&_nc_sid=4f375e',
        name: 'Bill Gates',
        date: '09 de Octubre a las 07:35'
    },
    {
        id: '333',
        title: 'Feeling good!',
        picture: 'https://instagram.fmga7-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/146259572_330126301623833_783647560133418591_n.jpg?_nc_ht=instagram.fmga7-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=VGUHj4gFF-gAX8DJnW1&tn=WdOe-MWqYwxXhb1x&edm=AP_V10EBAAAA&ccb=7-4&oh=4eb49f51583dcc52375292b34de28411&oe=616F0344&_nc_sid=4f375e',
        name: 'Ivan Lara',
        date: '04 de Octubre a las 11:23'
    },
    {
        id: '444',
        title: 'Feeling good!',
        picture: 'https://instagram.fmga7-1.fna.fbcdn.net/v/t51.2885-15/e35/118397600_398872661085626_4863976455703082204_n.jpg?_nc_ht=instagram.fmga7-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=qGzWYfbWx74AX_0P0GN&edm=AP_V10EBAAAA&ccb=7-4&oh=725e2f5909085592f90db990920b83d4&oe=61709E2F&_nc_sid=4f375e',
        name: 'Ivan Lara',
        date: '04 de Octubre a las 09:37'
    },
    {
        id: '555',
        title: 'Feeling good!',
        picture: 'https://instagram.fmga7-1.fna.fbcdn.net/v/t51.2885-15/e35/241804172_2934729103409447_7886648124509069077_n.jpg?_nc_ht=instagram.fmga7-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=2pmC7ey6KY4AX_Vjc1B&edm=AP_V10EBAAAA&ccb=7-4&oh=42b3ff1d3d519757aafe01d3051854f7&oe=61701119&_nc_sid=4f375e',
        name: 'Elon Musk',
        date: '01 de Octubre a las 23:12'
    },
];

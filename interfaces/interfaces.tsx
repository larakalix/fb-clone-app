export interface User {
    id: string;
    name: string;
    thumbnail: string;
    isOnline: boolean;
}

export interface Story {
    id: string;
    name: string;
    src: string;
    post: string;
}

export interface Post {
    id: string;
    title: string;
    picture: string;
    name: string;
    date: string;
}

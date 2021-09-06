type Book = {
    root: string,
    news: string
    contacts: string,
    secret: string,
}

export const book: Book = {
    root:     '/',
    news:     '/news',
    contacts: '/contacts',
    secret:   '/secret/:value',
};

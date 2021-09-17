type Book = {
    root: string,
    news: string
    contacts: string,
    secret: string,
    userInfo: string,
    courseTasks: string,
    courseTasksCertain: string,
    person: string,
    film: string,
}

export const book: Book = {
    root:               '/',
    news:               '/news',
    contacts:           '/contacts',
    secret:             '/secret/:value',
    userInfo:           '/user-info',
    courseTasks:        '/course-tasks',
    courseTasksCertain: '/course-tasks/:index',
    person:             '/people/:id',
    film:               '/films/:id',
};

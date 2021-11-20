import { Query } from "../";

const all = () => Query('select blogs.*, authors.name from blogs join authors on authors.id = blogs.authorid');

const one = (id: number) =>
    Query(
        'select blogs.*, authors.name from blogs join authors on authors.id = blogs.authorid WHERE blogs.id = ?',
    [id]
    );

const insert = (newBlog: { title: string, content: string, authorid: number }) =>
    Query('INSERT INTO blogs SET ?', newBlog);
    
    

export default {
    all,
    one,
    insert
};
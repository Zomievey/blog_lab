import { Query } from "../";

const all = () => Query('select blogs.*, authors.name from blogs join authors on authors.id = blogs.authorid');

const one = (id: number) =>
    Query(
        'select blogs.*, authors.name from blogs join authors on authors.id = blogs.authorid WHERE blogs.id = ?',
    [id]
    );

const insert = (newBlog: { title: string, content: string, authorid: number }) =>
    Query('INSERT INTO blogs SET ?', newBlog);
    
    
const update = (editedBlog: { tilte: string, content: string }, id: number) =>
    Query('UPDATE blogs SET ? WHERE id = ?', [editedBlog, id]);


const destroy = (id: number) => Query('DELETE FROM blogs WHERE id = ?', [id]);


    export default {
    all,
    one,
    insert,
    update,
    destroy
};
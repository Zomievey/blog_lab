import { Router } from "express";
import db from "../db";



const router = Router();


// get  /api/blogs/1?
router.get('/:blogid?', async (req, res) => {

const blogid = Number(req.params.blogid);

    try {
        if (blogid) {
            const blog = await db.blogs.one(blogid);
            res.json(blog);
        } else {
            const blogs = await db.blogs.all();
            res.json(blogs);
        }
      
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});

// post /api/blogs
router.post('/', async (req, res) => {

    const newBlog = req.body;
    newBlog.authorid = 1;  //because eventually whoever is logged in will be the author
    
        try {
                const blog = await db.blogs.insert(newBlog);
            res.json({ msg: "Blog added" });
            } catch (error) {
                console.log(error);
                res.status(500).json({ message: error.message });
                
            }
          
    });

router.put('/:blogid', async (req, res) => {
    const blogid = Number(req.params.blogid);
    const editedBlog = req.body;
    try {
        const result = await db.blogs.update(editedBlog, blogid);
        res.json({ msg: "Blog updated" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});

router.delete('/:blogid', async (req, res) => {
    const blogid = Number(req.params.blogid);
    try {
        const result = await db.blogs.destroy(blogid);
        res.json({ msg: "Blog deleted" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});



export default router;


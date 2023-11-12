//contact database
import slugify from "slugify"
//save data
export var creates = (req,res)=>{
    const {title,content,author,slugname}=req.body
    const slug = slugify(slugname)
    //validate
    switch(true){
        case !title||title === " ":
            return res.status(400).json({error:"กรุณาป้อนบทความ"})
            break;
        case !content|| content === " ":
            return res.status(400).json({error:"กรุณาป้อนเนื้อหาบทความ"})
            break;

    }    
    res.json({
        data:{title,content,author,slug}
    })
}

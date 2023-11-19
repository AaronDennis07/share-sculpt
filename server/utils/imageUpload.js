const cloudinary = require('cloudinary').v2



cloudinary.config({
    cloud_name: 'aaron07',
    api_key:'867291582794888',
    api_secret: 'BkXtwzE742oLeo9pG6GOp1nRP_I',
    
  });

const handleProfileImageUpload = async(file)=>{

   
    const res = await cloudinary.uploader.upload(file,{
        resource_type:'image',
        folder:'sharesculpt/users'
    })
    return  res
}


const handleCoverImageUpload = async(file)=>{

   
    const res = await cloudinary.uploader.upload(file,{
        resource_type:'image',
        folder:'sharesculpt/blogs'
    })
    return  res
}

module.exports = {
    
    handleProfileImageUpload,
    handleCoverImageUpload
}
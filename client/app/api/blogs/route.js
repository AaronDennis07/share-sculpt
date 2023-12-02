import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";
import { headers } from "next/headers";

export async function POST(Request) {
    const headersList = headers()
    console.log("hello i am")
    try{
        const formData = await Request.formData()
        const Authorization = headersList.get('authorization')
        const response = await fetch(process.env.BLOGS_URL,{
            method: 'POST',
            headers: {
                'Authorization': Authorization,
                
            },
            body: formData,
        })
        const parsedResponse = await response.json()
        console.log(parsedResponse)
        if(!parsedResponse)
            throw new Error({message:'Something went wrong',status:parsedResponse.status})
        revalidatePath('/')
        redirect('/')
    }catch(err){
        console.log(err)
        return Response.json(err,{
            status:err.status
        })
    }   

    return Response.json({
        Authorization
    })
  }
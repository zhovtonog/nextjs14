
"use server"
import {getClient} from "@/app/client";
import {revalidatePath} from "next/cache";

export async function addAction(data:any) {
    const description = data.get("description");


    console.log('data: UUUU', data);
    console.log('description: IIIIIII', description);
    if(!description){
        return
    }

    const client = await getClient();
    await client.task.create({
        data: {
            description: description.toString(),
        }
    })
    revalidatePath("/")

}
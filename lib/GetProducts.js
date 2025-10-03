export const API_URL = process.env.NEXT_PUBLIC_API_URL;

const GetProducts = async (id) => {
    
    const data = await fetch(
        `${API_URL}/products${id ? `/${id}` : ""}`,{
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
            cache: 'no-store'
        }
    )

    console.log("***************",data);
    

    const item = await data.json()

    console.log("!!!!!!!!!!",item);
    

    return item;

}
export default GetProducts
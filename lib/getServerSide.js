const GetServerSide = async (apiUrl) => {
    
    const data = await fetch(
        `${apiUrl}`,{
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
            cache: 'no-store'
        }
    )

    const item = await data.json()

    return item;

}
export default GetServerSide
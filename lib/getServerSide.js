const GetServerSide = async (apiURL) => {
    
    const data = await fetch(
        `${apiURL}`,{
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
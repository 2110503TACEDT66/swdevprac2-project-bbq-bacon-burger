import Link from "next/link";
import HotelCard from "./HotelCard";

export default async function HotelCatalog({hotelJson}:{hotelJson:Object}){
    const gethotelJson = await hotelJson
    return(
        <>
        <div>{gethotelJson.count}</div>
            <div className="container mx-auto my-8 p-4 rounded-lg shadow-md block">
                {
                    gethotelJson.data.map((hotelItem:Object)=>(
                        <Link key={hotelItem.name} href={`/hotel/${hotelItem.id}`}>
                            <HotelCard hotelName={hotelItem.name} imgSrc={`/img/${hotelItem.file}`} hotelAddress={hotelItem.address} hotelTel={hotelItem.tel}/>
                        </Link>
                    ))   
                }

            </div>
        </>
    )
}
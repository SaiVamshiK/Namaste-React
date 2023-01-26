import RestaurantCard from "./RestaurantCard";

export const Shimmer = () => {
    let restaurant = {
        isShimmer : true,
        data : {
            cloudinaryImageId : null,
            name : null,
            cuisines : null,
            avgRating : null,
        }
    };
    return (
        <>
            <RestaurantCard restaurant={restaurant}/>
        </>
    );
}


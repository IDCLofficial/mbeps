import {events} from "./eventsList"

const eventImages = events.map((event)=>{
    return {
        image: event.img,
        title:event.title,
        isVideo: false
    }
})

export const Media = [
    ...eventImages,
   {
    image:"/images/commissioner.jpg",
    title: "The commissioner",
    isVideo: false
    },
   {
    image:"/images/homeImage2.jpg",
    title: "congress meeting",
    isVideo: false
    }
]
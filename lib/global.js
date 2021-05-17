/*---------------------------
 GLOBAL FUNCTIONS LIBRARY
----------------------------*/
const func = {
    gets : {
        // Returns the corresponding HTML content if the field exist
        get_content(content) {
            if (content != undefined) {
                return <p className="content-par">{content}</p>
            }
        },
        get_location(location) {
            if (location != undefined) {
                return <span className="content-location">{" - " + location}</span>
            }
        },
        get_card_location(location){
            if (location != undefined) {
              return " - " + location
            }
          },
        get_image(formats, img) {
            if (formats.medium == undefined) {
                if(formats.small == undefined){
                    return img
                }
                return formats.small.url
            }
            return formats.medium.url
        },
        get_size(size){
            // WIP
            return ""
        }
    },
    
    gallery : {
        // Returns respectivly the index from the next or previous image
        next(current, length) {
            if (current == (length - 1)) {
                return 0
            }
            return current + 1
        },
        prev(current, length) {
            if (current == 0) {
                return length - 1
            }
            return current - 1
        }
    }
}


export default func

import { useEffect } from "react";

const ImageFader = () => {
    // let bgImageArray = ["lonely.jpg", "uluwatu.jpg", "carezza-lake.jpg", "batu-bolong-temple.jpg"],
    let bgImageArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
        // base = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/full-",
        base = "media/",

        secs = 4;
    if (typeof window != "undefined") {
        bgImageArray.forEach((img) => {
            let image = document.createElement("img");
            image.src = base + img;
            image.style.width = "100%";
            image.style.opacity = "0";
            document.getElementById("bgi").appendChild(image)
            // caches images, avoiding white flash between background replacements
        });
    }


    const backgroundSequence = () => {
        window.clearTimeout();
        let k = 0;
        for (let i = 0; i < bgImageArray.length; i++) {
            setTimeout(() => {
                document.getElementById("bgi").style.background = "url(" + base + bgImageArray[k] + ") no-repeat";
                document.getElementById("bgi").style.backgroundSize = "100% 100%";
                document.getElementById("bgi").style.margin = "5%";
                document.getElementById("bgi").style.border = "10px dashed";
                document.getElementById("bgi").style.borderRadius = "2%";
                
                if ((k + 1) === bgImageArray.length) { setTimeout(() => { backgroundSequence() }, (secs * 1000)) } else { k++; }
            }, (secs * 1000) * i)
        }
    }

    useEffect(() => {
        backgroundSequence();

    }, []);

    return (
        null
    )
}

export default ImageFader;
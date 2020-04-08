var replacementImage = "https://avatars.mds.yandex.net/get-pdb/909049/ec3fce40-b67b-4f30-b76f-8d7d1a490e7e/s1200?webp=false"
var replacementPercentage = 10

chrome.storage.sync.get('nsfwSource', function (src) {
    replacementImage = src.nsfwSource
    chrome.storage.sync.get('replacement_percentage', function (perc) {
        replacementPercentage = perc.replacement_percentage

        if (replacementPercentage === undefined || replacementPercentage === null) { replacementPercentage = 10 }
        if (replacementPercentage > 100) { replacementPercentage = 100 }
        if (replacementPercentage < 0) { replacementPercentage = 0 }

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        var images = document.getElementsByTagName('img')
        for (i = 0; i < images.length * (replacementPercentage / 100); i++) {
            images[getRandomInt(0, images.length - 1)].src = replacementImage
        }

    })
})




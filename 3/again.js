const quotes = ["do the good.", "love all.", "Be fucking nice to him",]

const usedIdxs = new Set()
const quoteElement = document.getElementById("quote")

function randomQuote() {
    if (usedIdxs.size >= quotes.length) {
        usedIdxs.clear()
    }

    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length)

        if (usedIdxs.has(randomIdx)) continue

        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote
        usedIdxs.add(randomIdx)
        break
    }
}
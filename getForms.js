

const SHEET_ID = "1WuSAzMSg79qkci_xqEYd5OessI2yo1PGR_V8jFULmts"
const SHEET_TITLE = "Respostas_formulario"
const SHEET_RANGE = "A1:E"
const FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE)
console.log(FULL_URL);

async function getForms() {
    const forms = await fetch(FULL_URL)
    return forms
}

console.log(await getForms());
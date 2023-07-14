import { google } from 'googleapis';

export default async function fetchDataApiGoogleSheets() {
    try {
        const spreadsheetId = '1WuSAzMSg79qkci_xqEYd5OessI2yo1PGR_V8jFULmts';
        const auth = new google.auth.GoogleAuth({
            keyFile: 'credentials.json',
            scopes: 'https://www.googleapis.com/auth/spreadsheets',
        });
        const client = await auth.getClient();
        const googleSheets = google.sheets({ version: 'v4', auth: client });

        const response = await googleSheets.spreadsheets.values.get({
            spreadsheetId,
            auth,
            range: 'Respostas_formulario!A1:Z',
        });

        const dataRows = response.data.values;
        const lastRow = dataRows[dataRows.length - 1];

        // Create the object with the desired mappings
        const mappedValues = {
            date: lastRow[0],
            title: lastRow[1],
            description: lastRow[2],
            priority: parseInt(lastRow[3], 10) || 0, // Ensure priority is always a number
        };
        return mappedValues;
    } catch (error) {
        console.error(error);
    } finally {
        console.log("(Google Forms/Sheets) Success: API connected");
    }
}

// console.log(await fetchDataApiGoogleSheets())

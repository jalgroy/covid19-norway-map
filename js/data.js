// Day zero = 2020-02-26
var data = [
    {
        "03": 0, // Oslo
        "11": 0, // Rogaland
        "15": 0, // Møre og Romsdal
        "18": 0, // Nordland
        "30": 0, // Viken
        "34": 0, // Innlandet
        "38": 0, // Vestfold og Telemark
        "42": 0, // Agder
        "46": 0, // Vestland
        "50": 0, // Trøndelag
        "54": 1, // Troms og Finnmark
    },
    {
        "03": 2, // Oslo
        "11": 0, // Rogaland
        "15": 0, // Møre og Romsdal
        "18": 0, // Nordland
        "30": 1, // Viken
        "34": 0, // Innlandet
        "38": 0, // Vestfold og Telemark
        "42": 0, // Agder
        "46": 0, // Vestland
        "50": 0, // Trøndelag
        "54": 1, // Troms og Finnmark
    },
    {
        "03": 3, // Oslo
        "11": 0, // Rogaland
        "15": 0, // Møre og Romsdal
        "18": 0, // Nordland
        "30": 1, // Viken
        "34": 0, // Innlandet
        "38": 0, // Vestfold og Telemark
        "42": 0, // Agder
        "46": 1, // Vestland
        "50": 0, // Trøndelag
        "54": 1, // Troms og Finnmark
    },
    {
        "03": 6, // Oslo
        "11": 0, // Rogaland
        "15": 0, // Møre og Romsdal
        "18": 0, // Nordland
        "30": 3, // Viken
        "34": 0, // Innlandet
        "38": 0, // Vestfold og Telemark
        "42": 0, // Agder
        "46": 5, // Vestland
        "50": 0, // Trøndelag
        "54": 1, // Troms og Finnmark
    },
    {
        "03": 7, // Oslo
        "11": 0, // Rogaland
        "15": 0, // Møre og Romsdal
        "18": 0, // Nordland
        "30": 5, // Viken
        "34": 0, // Innlandet
        "38": 0, // Vestfold og Telemark
        "42": 0, // Agder
        "46": 6, // Vestland
        "50": 0, // Trøndelag
        "54": 1, // Troms og Finnmark
    },
    {
        "03": 7, // Oslo
        "11": 1, // Rogaland
        "15": 0, // Møre og Romsdal
        "18": 0, // Nordland
        "30": 5, // Viken
        "34": 0, // Innlandet
        "38": 0, // Vestfold og Telemark
        "42": 2, // Agder
        "46": 9, // Vestland
        "50": 0, // Trøndelag
        "54": 1, // Troms og Finnmark
    },
    {
        "03": 7, // Oslo
        "11": 1, // Rogaland
        "15": 0, // Møre og Romsdal
        "18": 0, // Nordland
        "30": 8, // Viken
        "34": 0, // Innlandet
        "38": 0, // Vestfold og Telemark
        "42": 3, // Agder
        "46": 12, // Vestland
        "50": 0, // Trøndelag
        "54": 2, // Troms og Finnmark
    },
    {
        "03": 11, // Oslo
        "11": 3, // Rogaland
        "15": 1, // Møre og Romsdal
        "18": 0, // Nordland
        "30": 15, // Viken
        "34": 3, // Innlandet
        "38": 0, // Vestfold og Telemark
        "42": 3, // Agder
        "46": 17, // Vestland
        "50": 1, // Trøndelag
        "54": 2, // Troms og Finnmark
    },
    {
        "03": 18, // Oslo
        "11": 3, // Rogaland
        "15": 2, // Møre og Romsdal
        "18": 0, // Nordland
        "30": 21, // Viken
        "34": 4, // Innlandet
        "38": 2, // Vestfold og Telemark
        "42": 5, // Agder
        "46": 22, // Vestland
        "50": 7, // Trøndelag
        "54": 2, // Troms og Finnmark
    },
    {
        "03": 23, // Oslo
        "11": 10, // Rogaland
        "15": 2, // Møre og Romsdal
        "18": 0, // Nordland
        "30": 25, // Viken
        "34": 6, // Innlandet
        "38": 2, // Vestfold og Telemark
        "42": 5, // Agder
        "46": 23, // Vestland
        "50": 11, // Trøndelag
        "54": 6, // Troms og Finnmark
    },
    {
        "03": 28, // Oslo
        "11": 15, // Rogaland
        "15": 2, // Møre og Romsdal
        "18": 1, // Nordland
        "30": 37, // Viken
        "34": 12, // Innlandet
        "38": 2, // Vestfold og Telemark
        "42": 9, // Agder
        "46": 24, // Vestland
        "50": 11, // Trøndelag
        "54": 6, // Troms og Finnmark
    },
    {
        "03": 35, // Oslo
        "11": 17, // Rogaland
        "15": 2, // Møre og Romsdal
        "18": 3, // Nordland
        "30": 39, // Viken
        "34": 12, // Innlandet
        "38": 3, // Vestfold og Telemark
        "42": 9, // Agder
        "46": 24, // Vestland
        "50": 19, // Trøndelag
        "54": 6, // Troms og Finnmark
    },
    {
        "03": 35, // Oslo
        "11": 26, // Rogaland
        "15": 2, // Møre og Romsdal
        "18": 3, // Nordland
        "30": 44, // Viken
        "34": 13, // Innlandet
        "38": 4, // Vestfold og Telemark
        "42": 12, // Agder
        "46": 26, // Vestland
        "50": 21, // Trøndelag
        "54": 6, // Troms og Finnmark
    },
    {
        "03": 51, // Oslo
        "11": 33, // Rogaland
        "15": 5, // Møre og Romsdal
        "18": 3, // Nordland
        "30": 86, // Viken
        "34": 16, // Innlandet
        "38": 5, // Vestfold og Telemark
        "42": 19, // Agder
        "46": 31, // Vestland
        "50": 22, // Trøndelag
        "54": 6, // Troms og Finnmark
    },
    {
        "03": 123, // Oslo
        "11": 71, // Rogaland
        "15": 7, // Møre og Romsdal
        "18": 3, // Nordland
        "30": 124, // Viken
        "34": 23, // Innlandet
        "38": 15, // Vestfold og Telemark
        "42": 20, // Agder
        "46": 41, // Vestland
        "50": 25, // Trøndelag
        "54": 7, // Troms og Finnmark
    },
    {
        "03": 166, // Oslo
        "11": 82, // Rogaland
        "15": 6, // Møre og Romsdal
        "18": 4, // Nordland
        "30": 154, // Viken
        "34": 40, // Innlandet
        "38": 22, // Vestfold og Telemark
        "42": 32, // Agder
        "46": 67, // Vestland
        "50": 37, // Trøndelag
        "54": 11, // Troms og Finnmark
    },
    {
        "03": 207, // Oslo
        "11": 105, // Rogaland
        "15": 7, // Møre og Romsdal
        "18": 5, // Nordland
        "30": 180, // Viken
        "34": 49, // Innlandet
        "38": 30, // Vestfold og Telemark
        "42": 34, // Agder
        "46": 78, // Vestland
        "50": 43, // Trøndelag
        "54": 12, // Troms og Finnmark
    },
    {
        "03": 222, // Oslo
        "11": 119, // Rogaland
        "15": 16, // Møre og Romsdal
        "18": 8, // Nordland
        "30": 231, // Viken
        "34": 57, // Innlandet
        "38": 39, // Vestfold og Telemark
        "42": 52, // Agder
        "46": 101, // Vestland
        "50": 46, // Trøndelag
        "54": 16, // Troms og Finnmark
    },
    {
        "03": 281, // Oslo
        "11": 127, // Rogaland
        "15": 20, // Møre og Romsdal
        "18": 8, // Nordland
        "30": 278, // Viken
        "34": 72, // Innlandet
        "38": 48, // Vestfold og Telemark
        "42": 55, // Agder
        "46": 118, // Vestland
        "50": 50, // Trøndelag
        "54": 20, // Troms og Finnmark
    },
    {
        "03": 292, // Oslo
        "11": 131, // Rogaland
        "15": 20, // Møre og Romsdal
        "18": 11, // Nordland
        "30": 314, // Viken
        "34": 81, // Innlandet
        "38": 53, // Vestfold og Telemark
        "42": 67, // Agder
        "46": 127, // Vestland
        "50": 52, // Trøndelag
        "54": 21, // Troms og Finnmark
    },
    {
        "03": 329, // Oslo
        "11": 150, // Rogaland
        "15": 20, // Møre og Romsdal
        "18": 11, // Nordland
        "30": 358, // Viken
        "34": 88, // Innlandet
        "38": 59, // Vestfold og Telemark
        "42": 67, // Agder
        "46": 141, // Vestland
        "50": 61, // Trøndelag
        "54": 24, // Troms og Finnmark
    },
    {
        "03": 348, // Oslo
        "11": 161, // Rogaland
        "15": 20, // Møre og Romsdal
        "18": 12, // Nordland
        "30": 410, // Viken
        "34": 97, // Innlandet
        "38": 63, // Vestfold og Telemark
        "42": 67, // Agder
        "46": 147, // Vestland
        "50": 70, // Trøndelag
        "54": 28, // Troms og Finnmark
    },
    {
        "03": 398, // Oslo
        "11": 176, // Rogaland
        "15": 25, // Møre og Romsdal
        "18": 13, // Nordland
        "30": 445, // Viken
        "34": 105, // Innlandet
        "38": 65, // Vestfold og Telemark
        "42": 75, // Agder
        "46": 153, // Vestland
        "50": 75, // Trøndelag
        "54": 28, // Troms og Finnmark
    },
    {
        "03": 419, // Oslo
        "11": 180, // Rogaland
        "15": 29, // Møre og Romsdal
        "18": 17, // Nordland
        "30": 529, // Viken
        "34": 115, // Innlandet
        "38": 72, // Vestfold og Telemark
        "42": 79, // Agder
        "46": 173, // Vestland
        "50": 97, // Trøndelag
        "54": 32, // Troms og Finnmark
    },
    {
        "03": 448, // Oslo
        "11": 199, // Rogaland
        "15": 32, // Møre og Romsdal
        "18": 17, // Nordland
        "30": 583, // Viken
        "34": 125, // Innlandet
        "38": 81, // Vestfold og Telemark
        "42": 82, // Agder
        "46": 200, // Vestland
        "50": 122, // Trøndelag
        "54": 37, // Troms og Finnmark
    },
    {
        "03": 523, // Oslo
        "11": 219, // Rogaland
        "15": 38, // Møre og Romsdal
        "18": 19, // Nordland
        "30": 615, // Viken
        "34": 148, // Innlandet
        "38": 85, // Vestfold og Telemark
        "42": 91, // Agder
        "46": 214, // Vestland
        "50": 131, // Trøndelag
        "54": 49, // Troms og Finnmark
    },
    {
        "03": 636, // Oslo
        "11": 237, // Rogaland
        "15": 44, // Møre og Romsdal
        "18": 18, // Nordland
        "30": 674, // Viken
        "34": 151, // Innlandet
        "38": 87, // Vestfold og Telemark
        "42": 91, // Agder
        "46": 234, // Vestland
        "50": 144, // Trøndelag
        "54": 55, // Troms og Finnmark
    },
]

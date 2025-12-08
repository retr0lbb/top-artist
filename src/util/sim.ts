export function similarity(a: string, b: string) {
    const matrix = [];

    // Se forem iguais já retorna 100%
    if (a === b) return 1;

    const lenA = a.length;
    const lenB = b.length;

    // Inicializa matriz
    for (let i = 0; i <= lenA; i++) {
        matrix[i] = [i];
    }
    for (let j = 0; j <= lenB; j++) {
        matrix[0][j] = j;
    }

    // Levenshtein
    for (let i = 1; i <= lenA; i++) {
        for (let j = 1; j <= lenB; j++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;

            matrix[i][j] = Math.min(
                matrix[i - 1][j] + 1,     // remoção
                matrix[i][j - 1] + 1,     // inserção
                matrix[i - 1][j - 1] + cost // substituição
            );
        }
    }

    const distance = matrix[lenA][lenB];
    return 1 - distance / Math.max(lenA, lenB); // retorna porcentagem de similaridade
}
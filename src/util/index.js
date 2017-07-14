export function formaterKroner(kroner) {
    if (kroner === undefined || kroner === null) {
        return kroner;
    }
    if (kroner.length > 0 && (kroner[0] === '0' || kroner[0] === ' ')) {
        return kroner;
    }

    const stringUtenWhitespace = (kroner + '').replace(/\s+/g, '');
    const kronerFormatert = parseInt(stringUtenWhitespace, 10).toFixed(0);

    return !isNaN(kronerFormatert) ? kronerFormatert.replace(/\B(?=(\d{3})+(?!\d))/g, ' ') : '';
}
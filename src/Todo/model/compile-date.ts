export const DDMMYYYY = (elem:string):string => {
    return new Date(elem).toLocaleString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }).replace(/(\d{2})\.(\d{2})\.(\d{4})/, '$1.$2.$3')
}
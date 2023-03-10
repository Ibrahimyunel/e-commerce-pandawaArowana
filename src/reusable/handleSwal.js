export const swalConfig = {
    icon: 'warning',
    title: 'Oops...',
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'OK'
}

export function changeSwalConfig(swalConfig, icon, title) {
    return { ...swalConfig, icon: icon, title: title }
}
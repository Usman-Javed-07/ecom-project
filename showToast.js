export function showToast(opertion , id) {
    const toast = document.createElement('div');
    toast.classList.add('toast');

    if(opertion === 'add') {
        toast.textContent = `product with iD ${id} has been added`;
    }
    else {
        toast.textContent = ` product with ID ${id} has been deleted`;
    }
    document.body.appendChild(toast);

    setTimeout(()=> {
        
        toast.remove()

    },2000);
}
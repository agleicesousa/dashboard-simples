const Orders = [
    {
        ProductName: 'Foldable Mini Drone',
        productNumber: '85631',
        paymenStatus: 'Devido',
        shipping: 'Pendente'
    },
    {
        ProductName: 'LARVENDER KF102 Drone',
        productNumber: '36378',
        paymenStatus: 'Reembolsado',
        shipping: 'Recusado'
    },
    {
        ProductName: 'Ruko F11 Pro Drone',
        productNumber: '49347',
        paymenStatus: 'Devido',
        shipping: 'Recusado'
    },
    {
        ProductName: 'Drone with Camera Drone',
        productNumber: '85631',
        paymenStatus: 'Devido',
        shipping: 'Pendente'
    },
    {
        ProductName: 'GPS 4k Drone',
        productNumber: '22821',
        paymenStatus: 'Pago',
        shipping: 'Entregue'
    },
    {
        ProductName: 'DJI Air 2S',
        productNumber: '81475',
        paymenStatus: 'Pago',
        shipping: 'Pendente'
    },
    {
        ProductName: 'Foldable Mini Drone',
        productNumber: '00482',
        paymenStatus: 'Pago',
        shipping: 'Entregue'
    },
];

const table = document.getElementById("tbody");

Orders.forEach(item => {
    const newRow = document.createElement('tr');

    let paymentClass = '';
    if (item.paymenStatus === 'Devido') {
        paymentClass = 'devido';
    } else if (item.paymenStatus === 'Pago') {
        paymentClass = 'pago';
    } else if (item.paymenStatus === 'Reembolsado') {
        paymentClass = 'reembolsado';
    }

    let shippingClass = '';
    if (item.shipping === 'Pendente') {
        shippingClass = 'pendente';
    } else if (item.shipping === 'Recusado') {
        shippingClass = 'recusado';
    } else if (item.shipping === 'Entregue') {
        shippingClass = 'entregue';
    }

    newRow.innerHTML = `
        <td>${item.ProductName}</td>
        <td>${item.productNumber}</td>
        <td class="${paymentClass}">${item.paymenStatus}</td>
        <td class="${shippingClass}">${item.shipping}</td>
        <td class="primary">Detalhes</td>
    `;

    table.appendChild(newRow);
});

const themeToggler = document.querySelector(".theme-toggler");

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
});


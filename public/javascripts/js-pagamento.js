

async function pagar() {
    const teste = document.getElementById('bebida')
    const response = await fetch(`/pagamento?bebida=${teste}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({bebida: teste})
    });

    return response.json();
}

        

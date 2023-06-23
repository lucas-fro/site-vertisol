function formatarTelefone(input) {
    var telefone = input.value;
    
    // Removendo todos os caracteres que não são números
    telefone = telefone.replace(/\D/g, "");
    
    var formattedTelefone;
    
    if (telefone.length === 9) {
        formattedTelefone = telefone.replace(/(\d{5})(\d{4})/, "$1-$2");
    } else if (telefone.length === 11) {
        formattedTelefone = telefone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    } else if (telefone.length === 13) {
        formattedTelefone = telefone.replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, "+$1 ($2) $3-$4");
    } else {
        formattedTelefone = telefone;
    }
    
    input.value = formattedTelefone;
    }
    
    function formatarCnpjCpf(input) {
    var cnpjCpf = input.value;
    
    // Removendo todos os caracteres que não são números
    cnpjCpf = cnpjCpf.replace(/\D/g, "");
    
    var formattedCnpjCpf;
    
    if (cnpjCpf.length === 11) {
        formattedCnpjCpf = cnpjCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    } else if (cnpjCpf.length === 14) {
        formattedCnpjCpf = cnpjCpf.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
    } else {
        formattedCnpjCpf = cnpjCpf;
    }
    
    input.value = formattedCnpjCpf;
    }
      
function clickmenu(){
    const menu = document.getElementById('menu')

    if(menu.style.display == 'block'){
        menu.style.display = 'none'
    } else{
        menu.style.display = 'block'
        menu.style.position = 'absolute'
    }
}

function verificar(){
    let peso = document.getElementById('peso')
    let altura = document.getElementById('altura')
    let idade = document.getElementById('idade')
    let fatorA = document.getElementById('fatorA')
    let genero = document.getElementsByName('genero')
    let exame = document.getElementById('exame')
    let valorexame = document.getElementById('valorexame')
    let res = document.getElementById('res')
    let tmb = ''
    var get = ''

    //se os valores forem igual a 0

    if(peso.value == 0 || altura.value == 0 || idade.value == 0){
        res.innerHTML = '<p> &#9888; falta de informação ! verifique e tente novamente.</p>'
        res.style = 'color:red'
    } else{
        
        //descobrindo TMB

        if(genero[0].checked){
            tmb = 66.5 + (13.75 * peso.value) + (5.003 * altura.value) - (6.755 * idade.value)
        } else{
            tmb = 655.1 + (9.563 * peso.value) + (1.850 * altura.value) - (4.676 * idade.value)
        }

        // descobrindo get

        if(fatorA.value == "sedentario"){
            get = (tmb * 1.2).toFixed(0)
        } 
        else if(fatorA.value == "levementeativo"){
            get = (tmb * 1.375).toFixed(0)
        }
        else if(fatorA.value == "moderadamenteativo"){
            get = (tmb * 1.55).toFixed(0)
        }
        else if(fatorA.value == "muitoativo"){
            get = (tmb * 1.725).toFixed(0)
        }
        else if(fatorA.value == "extremamenteativo"){
            get = (tmb * 1.9).toFixed(0)
        }

        // definindo macros

        let pro = (get * 0.25 / 4).toFixed(1).replace(".",",")
        let car = (get * 0.50 / 4).toFixed(1).replace(".",",")
        let gor = (get * 0.25 / 9).toFixed(1).replace(".",",")

        // valor do exame

        if(valorexame.value == 0){
            res.innerHTML = '<p> &#9888; Coloque o valor do exame para proceguir.</p>'
            res.style = 'color: red;'
        } else{

            res.style = 'color: black'

        // se o tipo de exame for mg/dL

        if(exame.value == 'mg/dL'){
        
            //hipoglicemia
            if(valorexame.value < 70){
                res.innerHTML = `

                    <h1>
                        Gasto energético total: ${get}Kcal/dia 
                    </h1>
                    <ul>
                        <li>
                            <h2>Carboidrato: ${car}g por dia</h2>
                        </li>
                        <li>
                            <h2>Proteina: ${pro}g por dia</h2>
                        </li>
                        <li>
                            <h2>Gordura: ${gor}g por dia </h2>
                        </li>
                    </ul>

                    <h1> Resultado do exame: "hipoglicemia" </h1>

                    <p> 
                        <strong> tratamento: </strong>
                    </p>
                    <p>    
                        Quando a pessoa ainda está consciente, o tratamento imediato é consumir algo que tenha açúcar de absorção rápida, como: 1 copo de suco de laranja ou refrigerante comum; ou 1 colher de sopa de açúcar ou mel; ou 3 a 4 balas ou tabletes de glicose. Depois disso, é importante comer um alimento com carboidrato de absorção lenta (pão, fruta, bolacha) para manter o nível de glicose estável.
                    </p>
                    <p>
                        Se a pessoa estiver confusa, desmaiada ou não conseguir engolir, não se deve dar nada pela boca. Nesses casos: Quem tem diabetes pode usar injeção de glucagon (medicação aplicada sob orientação médica). Se não houver glucagon, deve-se procurar imediatamente um serviço de emergência para receber glicose pela veia.
                    </p>
                        
                `
                    res.style = 'color: black;'

                }

                //normal, porém risco de hipoglicemia

                else if(valorexame.value <= 75){
                    res.innerHTML = `
                    
                    <h1>
                        Gasto energético total: ${get}Kcal/dia 
                    </h1>
                    <ul>
                        <li>
                            <h2>Carboidrato: ${car}g por dia</h2>
                        </li>
                        <li>
                            <h2>Proteina: ${pro}g por dia</h2>
                        </li>
                        <li>
                            <h2>Gordura: ${gor}g por dia </h2>
                        </li>
                    </ul>

                    <h1> Resultado do exame: "Normal", porém com risco de hipoglicemia. </h1>

                    <p> 
                        Resultado do exame normal, porém um pequno risco de  hipoglicemia, isso acontece porque provavelmente você não está consumindo a quantidade exata de carboidratos. Para que este risco seja diminuido e você esteja com a glicose no nivel normal sem riscos consuma a quantidade ideal de carboidratos que está sendo exibida logo acima.
                    </p>

                `
                }

                //normal sem riscos

                else if(valorexame.value < 95){
                    res.innerHTML = `
                
                    <h1>
                        Gasto energético total: ${get}Kcal/dia 
                    </h1>
                    <ul>
                        <li>
                            <h2>Carboidrato: ${car}g por dia</h2>
                        </li>
                        <li>
                            <h2>Proteina: ${pro}g por dia</h2>
                        </li>
                        <li>
                            <h2>Gordura: ${gor}g por dia </h2>
                        </li>
                    </ul>

                    <h1> Resultado do exame: "Normal" </h1>

                    <p>
                        Resultado do exame normal, nenhum risco de hipoglicemia ou pré-diabete encontrado, isso significa que você está alimentando bem. continue com uma boa alimentação e exercicios fisicos diarios para manter o valor do exame normal e assim evitando complicações. O ideal para que esteja livre de riscos de desenvolver hipoglicemia ou pré-diabete, é que o valor do exame estejá entre 75 a 95. Quanto mais nesse meio melhor.
                    </p>

                `
                }

                //normal porém risco de pré-diabete

                else if(valorexame.value < 100){
                    res.innerHTML = `
                    
                    <h1>
                        Gasto energético total: ${get}Kcal/dia 
                    </h1>
                    <ul>
                        <li>
                            <h2>Carboidrato: ${car}g por dia</h2>
                        </li>
                        <li>
                            <h2>Proteina: ${pro}g por dia</h2>
                        </li>
                        <li>
                            <h2>Gordura: ${gor}g por dia </h2>
                        </li>
                    </ul>

                    <h1>
                        Resultado do exame: "Normal", porém com risco de pré-diabete 
                    </h1>

                    <p> 
                        Quando uma pessoa está com risco de pré-diabete, isso não quer diser que a pessoa precisa cortar o açucar muito menos fazer dietas restritivas, na verdade isso quer diser que essa pessoa está com a glicose normal porém com uma grande chamce de desenvolver pré-diabete de acordo com a alimentação. O ideal seria que o valor da glicose esteja abaixo de 95 e acima de 75. Assim a chamce de desenvolver hipoglicemia ou pré-diabete diminui muito.
                    </p>
                    <p> 
                        Se sua alimentação estiver equilibrada entre macronutrientes, isso é, se você consome a quantidade exata de carboidratos, proteinas e gorduras, e mesmo assim você está com risco de desenvolver pré-diabete, faça bons exercicios como: caminhar, correr, praticar musculação. Porque assim o corpo gasta mais glicose diminuindo o indice e saindo fora de qualquer risco.
                    </p>

                `

                }

                //pré-diabete

                else if(valorexame.value < 125){
                    res.innerHTML = `
                
                    <h1>
                        Gasto energético total: ${get}Kcal/dia 
                    </h1>
                    <ul>
                        <li>
                            <h2>Carboidrato: ${car}g por dia</h2>
                        </li>
                        <li>
                            <h2>Proteina: ${pro}g por dia</h2>
                        </li>
                        <li>
                            <h2>Gordura: ${gor}g por dia </h2>
                        </li>
                    </ul>

                    <h1>
                        Resultado do exame: "Pré-diabete" 
                    </h1>

                    <p>
                        <strong>Tratamento:</strong>
                    </p>

                    <p>
                        O tratamento para a pré-diabetes tem como objetivo impedir que a condição evolua para o diabetes tipo 2 e também reduzir os riscos de complicações de saúde. A base do tratamento está na mudança de hábitos de vida. A alimentação deve ser equilibrada, com a redução do consumo de açúcares e carboidratos refinados, como pães brancos, massas e doces. O ideal é dar preferência a carboidratos integrais, frutas, verduras, legumes, proteínas magras e gorduras boas, evitando alimentos ultraprocessados.
                    </p>
                    <p>
                       A prática de atividade física também é fundamental. Recomenda-se pelo menos 150 minutos de exercícios por semana, como caminhadas, corridas leves, natação ou ciclismo, além de exercícios de resistência, como a musculação, algumas vezes na semana.
                    </p>
                    <p>
                        Manter o peso corporal adequado é outro ponto importante, pois a perda de apenas 5 a 10% do peso já ajuda a diminuir bastante o risco de desenvolver diabetes. Além disso, é necessário controlar a pressão arterial, o colesterol, evitar o tabagismo e o consumo excessivo de bebidas alcoólicas.
                    </p>
                    <p>
                        O acompanhamento médico é essencial. Exames regulares de glicemia e hemoglobina glicada ajudam a monitorar a condição, e em alguns casos o médico pode recomendar o uso de medicamentos, como a metformina, especialmente para pessoas com obesidade ou com histórico familiar forte de diabetes.
                    </p>

                `
                }

                // diabete

                else if(valorexame.value > 124){
                    res.innerHTML = `
                
                    <h1>
                        Gasto energético total: ${get}Kcal/dia 
                    </h1>
                    <ul>
                        <li>
                            <h2>Carboidrato: ${car}g por dia</h2>
                        </li>
                        <li>
                            <h2>Proteina: ${pro}g por dia</h2>
                        </li>
                        <li>
                            <h2>Gordura: ${gor}g por dia </h2>
                        </li>
                    </ul>

                    <h1>
                        Resultado do exame: "diabete" 
                    </h1>

                    <p>
                        <strong>Tratamento:</strong>
                    </p>
                        O tratamento da diabetes tem como objetivo controlar os níveis de glicose no sangue e prevenir complicações. Para isso, é necessário adotar uma alimentação saudável, com a redução do consumo de açúcares e carboidratos refinados, dando preferência a alimentos integrais, frutas, verduras, legumes, proteínas magras e gorduras boas. Também é importante manter horários regulares para as refeições, o que ajuda no equilíbrio da glicemia.
                    </p>
                    <p>
                        A prática de atividade física é essencial, sendo recomendado ao menos 150 minutos por semana de exercícios, como caminhadas, ciclismo, natação ou musculação. O exercício melhora a ação da insulina e auxilia no controle do peso corporal, que deve ser mantido dentro de uma faixa saudável, já que até pequenas perdas de peso podem trazer grandes benefícios.
                    </p>
                    <p>
                        O uso de medicamentos também faz parte do tratamento. No diabetes tipo 1, é necessário o uso de insulina diariamente. Já no diabetes tipo 2, o médico pode indicar comprimidos como a metformina e, em alguns casos, também o uso de insulina. O tipo e a dose do medicamento sempre devem ser orientados pelo médico.
                    </p>
                    <p>
                        Outro ponto fundamental é o monitoramento frequente da glicose no sangue, por meio de glicosímetros ou exames laboratoriais, além da hemoglobina glicada, que mostra o controle da glicose nos últimos meses. É igualmente importante cuidar da pressão arterial, do colesterol, evitar o cigarro e o consumo excessivo de álcool. Consultas regulares com profissionais de saúde, como médico, nutricionista e oftalmologista, ajudam a manter o tratamento eficaz e a prevenir complicações a longo prazo.
                    </p>

                `
                }

            }

        else if(exame.value == 'HbA1c'){
        
            //hipoglicemia
            if(valorexame.value < 3){
                res.innerHTML = `

                    <h1>
                        Gasto energético total: ${get}Kcal/dia 
                    </h1>
                    <ul>
                        <li>
                            <h2>Carboidrato: ${car}g por dia</h2>
                        </li>
                        <li>
                            <h2>Proteina: ${pro}g por dia</h2>
                        </li>
                        <li>
                            <h2>Gordura: ${gor}g por dia </h2>
                        </li>
                    </ul>

                    <h1> Resultado do exame: "hipoglicemia" </h1>

                    <p> 
                        <strong> tratamento: </strong>
                    </p>
                    <p>    
                        Quando a pessoa ainda está consciente, o tratamento imediato é consumir algo que tenha açúcar de absorção rápida, como: 1 copo de suco de laranja ou refrigerante comum; ou 1 colher de sopa de açúcar ou mel; ou 3 a 4 balas ou tabletes de glicose. Depois disso, é importante comer um alimento com carboidrato de absorção lenta (pão, fruta, bolacha) para manter o nível de glicose estável.
                    </p>
                    <p>
                        Se a pessoa estiver confusa, desmaiada ou não conseguir engolir, não se deve dar nada pela boca. Nesses casos: Quem tem diabetes pode usar injeção de glucagon (medicação aplicada sob orientação médica). Se não houver glucagon, deve-se procurar imediatamente um serviço de emergência para receber glicose pela veia.
                    </p>
                        
                `
                    res.style = 'color: black;'

                }

                //normal, porém risco de hipoglicemia

                else if(valorexame.value <= 3.5){
                    res.innerHTML = `
                    
                    <h1>
                        Gasto energético total: ${get}Kcal/dia 
                    </h1>
                    <ul>
                        <li>
                            <h2>Carboidrato: ${car}g por dia</h2>
                        </li>
                        <li>
                            <h2>Proteina: ${pro}g por dia</h2>
                        </li>
                        <li>
                            <h2>Gordura: ${gor}g por dia </h2>
                        </li>
                    </ul>

                    <h1> Resultado do exame: "Normal", porém com risco de hipoglicemia. </h1>

                    <p> 
                        Resultado do exame normal, porém um pequno risco de  hipoglicemia, isso acontece porque provavelmente você não está consumindo a quantidade exata de carboidratos. Para que este risco seja diminuido e você esteja com a glicose no nivel normal sem riscos consuma a quantidade ideal de carboidratos que está sendo exibida logo acima.
                    </p>

                `
                }

                //normal sem riscos

                else if(valorexame.value < 5.4){
                    res.innerHTML = `
                
                    <h1>
                        Gasto energético total: ${get}Kcal/dia 
                    </h1>
                    <ul>
                        <li>
                            <h2>Carboidrato: ${car}g por dia</h2>
                        </li>
                        <li>
                            <h2>Proteina: ${pro}g por dia</h2>
                        </li>
                        <li>
                            <h2>Gordura: ${gor}g por dia </h2>
                        </li>
                    </ul>

                    <h1> Resultado do exame: "Normal" </h1>

                    <p>
                        Resultado do exame normal, nenhum risco de hipoglicemia ou pré-diabete encontrado, isso significa que você está alimentando bem. continue com uma boa alimentação e exercicios fisicos diarios para manter o valor do exame normal e assim evitando complicações. O ideal para que esteja livre de riscos de desenvolver hipoglicemia ou pré-diabete, é que o valor do exame estejá entre 75 a 95. Quanto mais nesse meio melhor.
                    </p>

                `
                }

                //normal porém risco de pré-diabete

                else if(valorexame.value <= 5.7){
                    res.innerHTML = `
                    
                    <h1>
                        Gasto energético total: ${get}Kcal/dia 
                    </h1>
                    <ul>
                        <li>
                            <h2>Carboidrato: ${car}g por dia</h2>
                        </li>
                        <li>
                            <h2>Proteina: ${pro}g por dia</h2>
                        </li>
                        <li>
                            <h2>Gordura: ${gor}g por dia </h2>
                        </li>
                    </ul>

                    <h1>
                        Resultado do exame: "Normal", porém com risco de pré-diabete 
                    </h1>

                    <p> 
                        Quando uma pessoa está com risco de pré-diabete, isso não quer diser que a pessoa precisa cortar o açucar muito menos fazer dietas restritivas, na verdade isso quer diser que essa pessoa está com a glicose normal porém com uma grande chamce de desenvolver pré-diabete de acordo com a alimentação. O ideal seria que o valor da glicose esteja abaixo de 95 e acima de 75. Assim a chamce de desenvolver hipoglicemia ou pré-diabete diminui muito.
                    </p>
                    <p> 
                        Se sua alimentação estiver equilibrada entre macronutrientes, isso é, se você consome a quantidade exata de carboidratos, proteinas e gorduras, e mesmo assim você está com risco de desenvolver pré-diabete, faça bons exercicios como: caminhar, correr, praticar musculação. Porque assim o corpo gasta mais glicose diminuindo o indice e saindo fora de qualquer risco.
                    </p>

                `

                }

                //pré-diabete

                else if(valorexame.value <= 6.4){
                    res.innerHTML = `
                
                    <h1>
                        Gasto energético total: ${get}Kcal/dia 
                    </h1>
                    <ul>
                        <li>
                            <h2>Carboidrato: ${car}g por dia</h2>
                        </li>
                        <li>
                            <h2>Proteina: ${pro}g por dia</h2>
                        </li>
                        <li>
                            <h2>Gordura: ${gor}g por dia </h2>
                        </li>
                    </ul>

                    <h1>
                        Resultado do exame: "Pré-diabete" 
                    </h1>

                    <p>
                        <strong>Tratamento:</strong>
                    </p>

                    <p>
                        O tratamento para a pré-diabetes tem como objetivo impedir que a condição evolua para o diabetes tipo 2 e também reduzir os riscos de complicações de saúde. A base do tratamento está na mudança de hábitos de vida. A alimentação deve ser equilibrada, com a redução do consumo de açúcares e carboidratos refinados, como pães brancos, massas e doces. O ideal é dar preferência a carboidratos integrais, frutas, verduras, legumes, proteínas magras e gorduras boas, evitando alimentos ultraprocessados.
                    </p>
                    <p>
                       A prática de atividade física também é fundamental. Recomenda-se pelo menos 150 minutos de exercícios por semana, como caminhadas, corridas leves, natação ou ciclismo, além de exercícios de resistência, como a musculação, algumas vezes na semana.
                    </p>
                    <p>
                        Manter o peso corporal adequado é outro ponto importante, pois a perda de apenas 5 a 10% do peso já ajuda a diminuir bastante o risco de desenvolver diabetes. Além disso, é necessário controlar a pressão arterial, o colesterol, evitar o tabagismo e o consumo excessivo de bebidas alcoólicas.
                    </p>
                    <p>
                        O acompanhamento médico é essencial. Exames regulares de glicemia e hemoglobina glicada ajudam a monitorar a condição, e em alguns casos o médico pode recomendar o uso de medicamentos, como a metformina, especialmente para pessoas com obesidade ou com histórico familiar forte de diabetes.
                    </p>

                `
                }

                // diabete

                else if(valorexame.value > 6.4){
                    res.innerHTML = `
                
                    <h1>
                        Gasto energético total: ${get}Kcal/dia 
                    </h1>
                    <ul>
                        <li>
                            <h2>Carboidrato: ${car}g por dia</h2>
                        </li>
                        <li>
                            <h2>Proteina: ${pro}g por dia</h2>
                        </li>
                        <li>
                            <h2>Gordura: ${gor}g por dia </h2>
                        </li>
                    </ul>

                    <h1>
                        Resultado do exame: "diabete" 
                    </h1>

                    <p>
                        <strong>Tratamento:</strong>
                    </p>
                        O tratamento da diabetes tem como objetivo controlar os níveis de glicose no sangue e prevenir complicações. Para isso, é necessário adotar uma alimentação saudável, com a redução do consumo de açúcares e carboidratos refinados, dando preferência a alimentos integrais, frutas, verduras, legumes, proteínas magras e gorduras boas. Também é importante manter horários regulares para as refeições, o que ajuda no equilíbrio da glicemia.
                    </p>
                    <p>
                        A prática de atividade física é essencial, sendo recomendado ao menos 150 minutos por semana de exercícios, como caminhadas, ciclismo, natação ou musculação. O exercício melhora a ação da insulina e auxilia no controle do peso corporal, que deve ser mantido dentro de uma faixa saudável, já que até pequenas perdas de peso podem trazer grandes benefícios.
                    </p>
                    <p>
                        O uso de medicamentos também faz parte do tratamento. No diabetes tipo 1, é necessário o uso de insulina diariamente. Já no diabetes tipo 2, o médico pode indicar comprimidos como a metformina e, em alguns casos, também o uso de insulina. O tipo e a dose do medicamento sempre devem ser orientados pelo médico.
                    </p>
                    <p>
                        Outro ponto fundamental é o monitoramento frequente da glicose no sangue, por meio de glicosímetros ou exames laboratoriais, além da hemoglobina glicada, que mostra o controle da glicose nos últimos meses. É igualmente importante cuidar da pressão arterial, do colesterol, evitar o cigarro e o consumo excessivo de álcool. Consultas regulares com profissionais de saúde, como médico, nutricionista e oftalmologista, ajudam a manter o tratamento eficaz e a prevenir complicações a longo prazo.
                    </p>

                `
                }

            }

        else if(exame.value == 'TOTG'){
        
            //hipoglicemia
            if(valorexame.value < 80){
                res.innerHTML = `

                    <h1>
                        Gasto energético total: ${get}Kcal/dia 
                    </h1>
                    <ul>
                        <li>
                            <h2>Carboidrato: ${car}g por dia</h2>
                        </li>
                        <li>
                            <h2>Proteina: ${pro}g por dia</h2>
                        </li>
                        <li>
                            <h2>Gordura: ${gor}g por dia </h2>
                        </li>
                    </ul>

                    <h1> Resultado do exame: "hipoglicemia" </h1>

                    <p> 
                        <strong> tratamento: </strong>
                    </p>
                    <p>    
                        Quando a pessoa ainda está consciente, o tratamento imediato é consumir algo que tenha açúcar de absorção rápida, como: 1 copo de suco de laranja ou refrigerante comum; ou 1 colher de sopa de açúcar ou mel; ou 3 a 4 balas ou tabletes de glicose. Depois disso, é importante comer um alimento com carboidrato de absorção lenta (pão, fruta, bolacha) para manter o nível de glicose estável.
                    </p>
                    <p>
                        Se a pessoa estiver confusa, desmaiada ou não conseguir engolir, não se deve dar nada pela boca. Nesses casos: Quem tem diabetes pode usar injeção de glucagon (medicação aplicada sob orientação médica). Se não houver glucagon, deve-se procurar imediatamente um serviço de emergência para receber glicose pela veia.
                    </p>
                        
                `
                    res.style = 'color: black;'

                }

                //normal, porém risco de hipoglicemia

                else if(valorexame.value <= 85){
                    res.innerHTML = `
                    
                    <h1>
                        Gasto energético total: ${get}Kcal/dia 
                    </h1>
                    <ul>
                        <li>
                            <h2>Carboidrato: ${car}g por dia</h2>
                        </li>
                        <li>
                            <h2>Proteina: ${pro}g por dia</h2>
                        </li>
                        <li>
                            <h2>Gordura: ${gor}g por dia </h2>
                        </li>
                    </ul>

                    <h1> Resultado do exame: "Normal", porém com risco de hipoglicemia. </h1>

                    <p> 
                        Resultado do exame normal, porém um pequno risco de  hipoglicemia, isso acontece porque provavelmente você não está consumindo a quantidade exata de carboidratos. Para que este risco seja diminuido e você esteja com a glicose no nivel normal sem riscos consuma a quantidade ideal de carboidratos que está sendo exibida logo acima.
                    </p>

                `
                }

                //normal sem riscos

                else if(valorexame.value < 135){
                    res.innerHTML = `
                
                    <h1>
                        Gasto energético total: ${get}Kcal/dia 
                    </h1>
                    <ul>
                        <li>
                            <h2>Carboidrato: ${car}g por dia</h2>
                        </li>
                        <li>
                            <h2>Proteina: ${pro}g por dia</h2>
                        </li>
                        <li>
                            <h2>Gordura: ${gor}g por dia </h2>
                        </li>
                    </ul>

                    <h1> Resultado do exame: "Normal" </h1>

                    <p>
                        Resultado do exame normal, nenhum risco de hipoglicemia ou pré-diabete encontrado, isso significa que você está alimentando bem. continue com uma boa alimentação e exercicios fisicos diarios para manter o valor do exame normal e assim evitando complicações. O ideal para que esteja livre de riscos de desenvolver hipoglicemia ou pré-diabete, é que o valor do exame estejá entre 75 a 95. Quanto mais nesse meio melhor.
                    </p>

                `
                }

                //normal porém risco de pré-diabete

                else if(valorexame.value <= 140){
                    res.innerHTML = `
                    
                    <h1>
                        Gasto energético total: ${get}Kcal/dia 
                    </h1>
                    <ul>
                        <li>
                            <h2>Carboidrato: ${car}g por dia</h2>
                        </li>
                        <li>
                            <h2>Proteina: ${pro}g por dia</h2>
                        </li>
                        <li>
                            <h2>Gordura: ${gor}g por dia </h2>
                        </li>
                    </ul>

                    <h1>
                        Resultado do exame: "Normal", porém com risco de pré-diabete 
                    </h1>

                    <p> 
                        Quando uma pessoa está com risco de pré-diabete, isso não quer diser que a pessoa precisa cortar o açucar muito menos fazer dietas restritivas, na verdade isso quer diser que essa pessoa está com a glicose normal porém com uma grande chamce de desenvolver pré-diabete de acordo com a alimentação. O ideal seria que o valor da glicose esteja abaixo de 95 e acima de 75. Assim a chamce de desenvolver hipoglicemia ou pré-diabete diminui muito.
                    </p>
                    <p> 
                        Se sua alimentação estiver equilibrada entre macronutrientes, isso é, se você consome a quantidade exata de carboidratos, proteinas e gorduras, e mesmo assim você está com risco de desenvolver pré-diabete, faça bons exercicios como: caminhar, correr, praticar musculação. Porque assim o corpo gasta mais glicose diminuindo o indice e saindo fora de qualquer risco.
                    </p>

                `

                }

                //pré-diabete

                else if(valorexame.value < 200){
                    res.innerHTML = `
                
                    <h1>
                        Gasto energético total: ${get}Kcal/dia 
                    </h1>
                    <ul>
                        <li>
                            <h2>Carboidrato: ${car}g por dia</h2>
                        </li>
                        <li>
                            <h2>Proteina: ${pro}g por dia</h2>
                        </li>
                        <li>
                            <h2>Gordura: ${gor}g por dia </h2>
                        </li>
                    </ul>

                    <h1>
                        Resultado do exame: "Pré-diabete" 
                    </h1>

                    <p>
                        <strong>Tratamento:</strong>
                    </p>

                    <p>
                        O tratamento para a pré-diabetes tem como objetivo impedir que a condição evolua para o diabetes tipo 2 e também reduzir os riscos de complicações de saúde. A base do tratamento está na mudança de hábitos de vida. A alimentação deve ser equilibrada, com a redução do consumo de açúcares e carboidratos refinados, como pães brancos, massas e doces. O ideal é dar preferência a carboidratos integrais, frutas, verduras, legumes, proteínas magras e gorduras boas, evitando alimentos ultraprocessados.
                    </p>
                    <p>
                       A prática de atividade física também é fundamental. Recomenda-se pelo menos 150 minutos de exercícios por semana, como caminhadas, corridas leves, natação ou ciclismo, além de exercícios de resistência, como a musculação, algumas vezes na semana.
                    </p>
                    <p>
                        Manter o peso corporal adequado é outro ponto importante, pois a perda de apenas 5 a 10% do peso já ajuda a diminuir bastante o risco de desenvolver diabetes. Além disso, é necessário controlar a pressão arterial, o colesterol, evitar o tabagismo e o consumo excessivo de bebidas alcoólicas.
                    </p>
                    <p>
                        O acompanhamento médico é essencial. Exames regulares de glicemia e hemoglobina glicada ajudam a monitorar a condição, e em alguns casos o médico pode recomendar o uso de medicamentos, como a metformina, especialmente para pessoas com obesidade ou com histórico familiar forte de diabetes.
                    </p>

                `
                }

                // diabete

                else if(valorexame.value > 200){
                    res.innerHTML = `
                
                    <h1>
                        Gasto energético total: ${get}Kcal/dia 
                    </h1>
                    <ul>
                        <li>
                            <h2>Carboidrato: ${car}g por dia</h2>
                        </li>
                        <li>
                            <h2>Proteina: ${pro}g por dia</h2>
                        </li>
                        <li>
                            <h2>Gordura: ${gor}g por dia </h2>
                        </li>
                    </ul>

                    <h1>
                        Resultado do exame: "diabete" 
                    </h1>

                    <p>
                        <strong>Tratamento:</strong>
                    </p>
                        O tratamento da diabetes tem como objetivo controlar os níveis de glicose no sangue e prevenir complicações. Para isso, é necessário adotar uma alimentação saudável, com a redução do consumo de açúcares e carboidratos refinados, dando preferência a alimentos integrais, frutas, verduras, legumes, proteínas magras e gorduras boas. Também é importante manter horários regulares para as refeições, o que ajuda no equilíbrio da glicemia.
                    </p>
                    <p>
                        A prática de atividade física é essencial, sendo recomendado ao menos 150 minutos por semana de exercícios, como caminhadas, ciclismo, natação ou musculação. O exercício melhora a ação da insulina e auxilia no controle do peso corporal, que deve ser mantido dentro de uma faixa saudável, já que até pequenas perdas de peso podem trazer grandes benefícios.
                    </p>
                    <p>
                        O uso de medicamentos também faz parte do tratamento. No diabetes tipo 1, é necessário o uso de insulina diariamente. Já no diabetes tipo 2, o médico pode indicar comprimidos como a metformina e, em alguns casos, também o uso de insulina. O tipo e a dose do medicamento sempre devem ser orientados pelo médico.
                    </p>
                    <p>
                        Outro ponto fundamental é o monitoramento frequente da glicose no sangue, por meio de glicosímetros ou exames laboratoriais, além da hemoglobina glicada, que mostra o controle da glicose nos últimos meses. É igualmente importante cuidar da pressão arterial, do colesterol, evitar o cigarro e o consumo excessivo de álcool. Consultas regulares com profissionais de saúde, como médico, nutricionista e oftalmologista, ajudam a manter o tratamento eficaz e a prevenir complicações a longo prazo.
                    </p>

                `
                }


        }   
        
    }

}

}
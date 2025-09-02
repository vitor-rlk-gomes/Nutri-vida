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
    
    var peso = document.getElementById('peso')
    var altura = document.getElementById('altura')
    var idade = document.getElementById('idade')
    var fatorA = document.getElementById('fatorA')
    var genero = document.getElementsByName('genero')
    var res = document.getElementById('res')
    var IMC = document.getElementById('IMC')
    var get =''

    if(peso.value == 0 || altura.value == 0 || idade.value == 0){
        res.innerHTML = '<p> &#9888; Falta de informação ! Verifique e tente novamente </p>'
        res.style = 'color: red;'
    }
    else {

        res.style = 'color: black;'

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
                
        // IMC igual a 0

        if(IMC.value == 0){
            var descobrir = document.getElementById('descobrir')

            var b = document.createElement('p')
            
            b.textContent = 'Descobrir IMC'

            descobrir.appendChild(b)

            b.style = 'text-decoration: underline; color: blue; cursor: pointer;'

            b.onclick = function(){
                
            var indice = ( peso.value / (altura.value / 100)**2 ).toFixed(2).replace(".",",")

            descobrir.innerHTML = `<p> seu IMC é ${indice} </p>`
            

            }

            res.innerHTML =''
            
            

        } 

            // Abaixo do peso

        else if(IMC.value < 18.5){

        get = Number(get) + 300

        let pro = (get * 0.25 / 4).toFixed(1).replace(".",",")
        let car = (get * 0.60 / 4).toFixed(1).replace(".",",")
        let gor = (get * 0.20 / 9).toFixed(1).replace(".",",")

            res.innerHTML = `

            <h1> Diagnóstico: "Abaixo do peso" </h1>

            <p>
                Você está abaixo do peso ideal, isso acontece devido a um deficit calorico não planejado (consumo de calorias menor doque o gasto), para resolver isso basta fazer um superávit calórico
            </p>         
            <p>
                Um superávit calórico ocorre quando uma pessoa consome mais calorias do que gasta, resultando em ganho de peso. Para que o ganho de peso seje controlado o ideal seria um superávit calórico de 300 Kcal/dia. 
            </p>
            <p>
                 para que seu peso normalize consuma a quantidade de nutrientes mostrados a seguir:
            </p>

            <h1> Gasto energético total: ${get} </h1>

            <ul>
                <li> <h2>Carboidrato: ${car}</h2> </li>
                <li> <h2>Proteina: ${pro}</h2> </li>
                <li> <h2>Gordura: ${gor}</h2> </li>
            </ul>

            `
        }

        //normal

        else if(IMC.value <= 24.9){

        var pro = (get * 0.25 / 4).toFixed(1).replace(".",",")
        var car = (get * 0.50 / 4).toFixed(1).replace(".",",")
        var gor = (get * 0.20 / 9).toFixed(1).replace(".",",")

            res.innerHTML = `
            
            <h1> Diagnóstico: "Normal" </h1>

            <p>
                Você está com o peso normal, parabéns. Para manter o peso como está consuma a quantidade de nutrientes mostrados abaixo, e não se esqueça de praticar exercicios fisicos.

            <h1> Gasto energético total: ${get} </h1>

            <ul>
                <li> <h2>Carboidrato: ${car}</h2> </li>
                <li> <h2>Proteina: ${pro}</h2> </li>
                <li> <h2>Gordura: ${gor}</h2> </li>
            </ul>
            
            `
        }

            // sobrepeso

        else if(IMC.value <= 29.9){

        get = Number(get) - 300

        let pro = (get * 0.30 / 4).toFixed(1).replace(".",",")
        let car = (get * 0.50 / 4).toFixed(1).replace(".",",")
        let gor = (get * 0.20 / 9).toFixed(1).replace(".",",")

        var PercaMes = (300 * 30 / 7700).toFixed(1).replace(".",",")

        var perda = ( peso.value -  24.9 * (altura.value / 100 )**2 ).toFixed(1).replace(".",",")

        res.innerHTML = `
        
        <h1> Diagnóstico: "Sobrepeso" </h1>

        <p>
            você está com sobrepeso isso pode acontecer porque você consome mais calorias doque gasta, ou porque você não pratica exercícios fisicos o suficiente para que o corpo gaste as energias armazenadas.
        </p>
        <p>
            Para resolver esse mini-poblema você pode diminuir o consumo de calorias ou praticar mais exercicios fisicos, mais expecificamente 1h ou meia hora por dia.
        </p>
        <p> 
            Abaixo está as informações sobre sua alimentação. Do gasto energético total foram reduzidas 300 Kcal para que você entre em deficit calorico, assim o corpo gasta a energia armazenada fazendo com que você perca peso. Se quiser um protocolo alimentar ou até uma dieta, entre em contato com um Nutricionista.
        </p>

        <h1> Gasto energético total: ${get} </h1>

        <ul>
            <li> <h2>Carboidrato: ${car}</h2> </li>
            <li> <h2>Proteina: ${pro}</h2> </li>
            <li> <h2>Gordura: ${gor}</h2> </li>
        </ul>

        <p>
            Para que seu peso esteja normal seu IMC deve estar abaixo de 24,9, No seu caso você precisa perder ${perda}KG para seu peso voltar ao normal.
        </p>
        
        `
        }

        // obesidade I

        else if(IMC.value <= 34.9){

        var perda = ( peso.value -  24.9 * (altura.value / 100 )**2 ).toFixed(1).replace(".",",")

            res.innerHTML = `
            
            <h1> Diagnóstico: "Obesidade grau I" </h1>
            
            <p>
                Com base no seu IMC (Índice de Massa Corporal), você se encontra na classificação de obesidade grau I. Essa condição significa que há um excesso de peso que já pode trazer riscos para a sua saúde a médio e longo prazo, como maior chance de desenvolver hipertensão, diabetes tipo 2, problemas cardíacos, dores nas articulações e dificuldades respiratórias. A boa notícia é que, nesse estágio, a obesidade pode ser revertida com mudanças no estilo de vida. Algumas orientações importantes são:
            </p>

            <ul>
                <li>Alimentação equilibrada.</li>

                <li>Controle das porções.</li>

                <li>Atividade física regular.</li>

                <li>Hidratação.</li>

                <li>Sono e descanso.</li>

                <li>Acompanhamento profissional.</li>
            </ul>

            <p>
                Para que seu peso diminua e você não esteja mais com obesidade grau I, você deve fazer um deficit calorico (consumir menas calorias doque gasta). Abaixo está totas as calorias e a quantidade de macronutrientes que você precisa. 
            <p>

            `
            
                // com deficit

        let deficit = document.createElement('p')

        deficit.textContent = 'fazer o deficit antes de mostrar as informações.'

        deficit.style = 'cursor: pointer; color:blue; text-decoration: underline; '

        res.appendChild(deficit)

        deficit.onclick = function(){

            deficit.innerHTML = ''
            normal.innerHTML = ''

        get = get - 400

        pro = (get * 0.30 / 4).toFixed(1).replace(".",",")
        car = (get * 0.45 / 4).toFixed(1).replace(".",",")
        gor = (get * 0.20 / 9).toFixed(1).replace(".",",")

            res.innerHTML += `
            
        <h1> Gasto energético total: ${get} </h1>

        <ul>
            <li> <h2>Carboidrato: ${car}</h2> </li>
            <li> <h2>Proteina: ${pro}</h2> </li>
            <li> <h2>Gordura: ${gor}</h2> </li>
        </ul>

        <p>
            Para que seu peso esteja normal seu IMC deve estar abaixo de 24,9, No seu caso você precisa perder ${perda}KG para seu peso voltar ao normal. Foi feito um deficit de 400 Kcal do seu gasto energético total.
        </p>
            
            `
        }

            // normal

        let normal = document.createElement('p')

        normal.textContent = 'Mostrar sem deficit.'

        normal.style = 'cursor: pointer; color:blue; text-decoration: underline; '

        res.appendChild(normal)

        normal.onclick = function(){

            normal.innerHTML = ''
            deficit.innerHTML = ''

        pro = (get * 0.30 / 4).toFixed(1).replace(".",",")
        car = (get * 0.45 / 4).toFixed(1).replace(".",",")
        gor = (get * 0.20 / 9).toFixed(1).replace(".",",")

            res.innerHTML += `
            
            <h1> Gasto energético total: ${get} </h1>

            <ul>
                <li> <h2>Carboidrato: ${car}</h2> </li>
                <li> <h2>Proteina: ${pro}</h2> </li>
                <li> <h2>Gordura: ${gor}</h2> </li>
            </ul>

            <p>
                Para que seu peso esteja normal seu IMC deve estar abaixo de 24,9. No seu caso você precisa perder ${perda}KG para seu peso voltar ao normal.
            </p>
            
            `
        }

        }

        // obeso II

        else if(IMC.value <= 39.9){

        var perda = ( peso.value -  24.9 * (altura.value / 100 )**2 ).toFixed(1).replace(".",",")

        res.innerHTML = `
        
        <h1> Diagnóstico: "Obesidade grau II" </h1>
        
        <p>
            Com base no seu IMC (Índice de Massa Corporal), você se encontra na classificação de obesidade grau II. Esse estágio é considerado mais sério, pois aumenta de forma significativa o risco de desenvolver doenças como diabetes tipo 2, hipertensão, problemas cardiovasculares, apneia do sono, dores nas articulações e até algumas formas de câncer. Apesar disso, ainda é totalmente possível reverter ou reduzir os impactos da obesidade com mudanças consistentes nos hábitos de vida. Algumas ações que podem ajudar:
        </p>
        <ul>
            <li>Alimentação saudável e estruturada.</li>

            <li>Evitar excessos.</li>

            <li>Exercícios físicos adaptados.</li>

            <li>Acompanhamento médico e nutricional.</li>

            <li>Sono e saúde mental.</li>
        </ul>

        <p>
            Mesmo sendo um grau mais avançado, cada passo conta. O mais importante é começar e manter a constância. Mudanças graduais, mas firmes, vão trazer não só emagrecimento, mas também mais disposição, autoestima e saúde.
        </p>
        <p>
            Logo abaixo está as informações nutricionais que você precisa.
        </p>

        `

        let deficit = document.createElement('p')

        deficit.textContent = 'fazer o deficit antes de mostrar as informações.'

        deficit.style = 'cursor: pointer; color:blue; text-decoration: underline; '

        res.appendChild(deficit)

        deficit.onclick = function(){

            deficit.innerHTML = ''
            normal.innerHTML = ''

        get = get - 500

        pro = (get * 0.30 / 4).toFixed(1).replace(".",",")
        car = (get * 0.45 / 4).toFixed(1).replace(".",",")
        gor = (get * 0.20 / 9).toFixed(1).replace(".",",")

            res.innerHTML += `
            
        <h1> Gasto energético total: ${get} </h1>

        <ul>
            <li> <h2>Carboidrato: ${car}</h2> </li>
            <li> <h2>Proteina: ${pro}</h2> </li>
            <li> <h2>Gordura: ${gor}</h2> </li>
        </ul>

        <p>
            Para que seu peso esteja normal seu IMC deve estar abaixo de 24,9, No seu caso você precisa perder ${perda}KG para seu peso voltar ao normal. Foi feito um deficit de 500 Kcal do seu gasto energético total.
        </p>
            
            `
        }

        let normal = document.createElement('p')

        normal.textContent = 'Mostrar sem deficit.'

        normal.style = 'cursor: pointer; color:blue; text-decoration: underline; '

        res.appendChild(normal)

        normal.onclick = function(){

            normal.innerHTML = ''
            deficit.innerHTML = ''

        pro = (get * 0.30 / 4).toFixed(1).replace(".",",")
        car = (get * 0.45 / 4).toFixed(1).replace(".",",")
        gor = (get * 0.20 / 9).toFixed(1).replace(".",",")

            res.innerHTML += `
            
            <h1> Gasto energético total: ${get} </h1>

            <ul>
                <li> <h2>Carboidrato: ${car}</h2> </li>
                <li> <h2>Proteina: ${pro}</h2> </li>
                <li> <h2>Gordura: ${gor}</h2> </li>
            </ul>

            <p>
                Para que seu peso esteja normal seu IMC deve estar abaixo de 24,9. No seu caso você precisa perder ${perda}KG para seu peso voltar ao normal.
            </p>
            
            `
        }
        
        }

        // obesoIII

        else if(IMC.value > 40){

        var perda = ( peso.value -  24.9 * (altura.value / 100 )**2 ).toFixed(1).replace(".",",")

        res.innerHTML = `
            
        <h1> Diagnóstico: "Obesidade grau III" </h1>
            
        <p>
            Com base no seu IMC (Índice de Massa Corporal), você se encontra na classificação de obesidade grau III, também chamada de obesidade mórbida. Esse é o estágio mais grave, pois está fortemente associado a sérios riscos de saúde, como diabetes tipo 2, hipertensão, doenças cardiovasculares, apneia do sono, problemas nas articulações, dificuldades respiratórias e maior risco de complicações em diversos órgãos. Apesar da gravidade, ainda é possível agir para recuperar a saúde e melhorar a qualidade de vida. O tratamento deve ser feito com acompanhamento profissional, pois exige mais cuidado e monitoramento. Algumas medidas importantes:
        </p>
        <ul>
            <li>Mudança alimentar supervisionada</li>

            <li>Atividade física adaptada</li>

            <li>Acompanhamento médico regular</li>

            <li>Cirurgia bariátrica</li>

            <li>Cuidado com o sono e saúde mental</li>
        <ul>
        <p>
            Mesmo sendo o estágio mais avançado, nunca é tarde para mudar. Cada pequeno passo — seja melhorar a alimentação, caminhar um pouco mais ou buscar ajuda profissional — já representa progresso. O importante é não enfrentar isso sozinho e procurar acompanhamento adequado para tornar o processo mais seguro e eficaz.
        </p>
        <p>
            Abaixo estão as informações nutricionais que você precisa saber.
        </p>

        `

        
        let deficit = document.createElement('p')

        deficit.textContent = 'fazer o deficit antes de mostrar as informações.'

        deficit.style = 'cursor: pointer; color:blue; text-decoration: underline; '

        res.appendChild(deficit)

        deficit.onclick = function(){

            deficit.innerHTML = ''
            normal.innerHTML = ''

        get = get - 600

        pro = (get * 0.30 / 4).toFixed(1).replace(".",",")
        car = (get * 0.45 / 4).toFixed(1).replace(".",",")
        gor = (get * 0.20 / 9).toFixed(1).replace(".",",")

            res.innerHTML += `
            
        <h1> Gasto energético total: ${get} </h1>

        <ul>
            <li> <h2>Carboidrato: ${car}</h2> </li>
            <li> <h2>Proteina: ${pro}</h2> </li>
            <li> <h2>Gordura: ${gor}</h2> </li>
        </ul>

        <p>
            Para que seu peso esteja normal seu IMC deve estar abaixo de 24,9, No seu caso você precisa perder ${perda}KG para seu peso voltar ao normal. Foi feito um deficit de 500 Kcal do seu gasto energético total.
        </p>
            
            `
        }

        let normal = document.createElement('p')

        normal.textContent = 'Mostrar sem deficit.'

        normal.style = 'cursor: pointer; color:blue; text-decoration: underline; '

        res.appendChild(normal)

        normal.onclick = function(){

            normal.innerHTML = ''
            deficit.innerHTML = ''

        pro = (get * 0.30 / 4).toFixed(1).replace(".",",")
        car = (get * 0.45 / 4).toFixed(1).replace(".",",")
        gor = (get * 0.20 / 9).toFixed(1).replace(".",",")

            res.innerHTML += `
            
            <h1> Gasto energético total: ${get} </h1>

            <ul>
                <li> <h2>Carboidrato: ${car}</h2> </li>
                <li> <h2>Proteina: ${pro}</h2> </li>
                <li> <h2>Gordura: ${gor}</h2> </li>
            </ul>

            <p>
                Para que seu peso esteja normal seu IMC deve estar abaixo de 24,9. No seu caso você precisa perder ${perda}KG para seu peso voltar ao normal.
            </p>
            
            `
        }

        }
        

    }
    
}

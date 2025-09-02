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
    let res = document.getElementById('res')
    let Sistólica = document.getElementById('Sistólica')
    let Diastólica = document.getElementById('Diastólica')

    if(peso.value == 0 || altura.value == 0 || idade.value == 0){
        res.innerHTML = '<p> &#9888; Falta de informação ! Verifique e tente novamente </p>'
        res.style = 'color: red;'
    }
    else {

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
        let gor = (get * 0.20 / 9).toFixed(1).replace(".",",")

        // Se não ouver valor

        if(Sistólica.value == 0 || Diastólica.value == 0){
            res.innerHTML = '<p> &#9888; Coloque o valor da pressão para proceguir. </p>'
            res.style = 'color: red;'
        }

        // Se o valor da "Sistólica" for menor que o da "Diastólica"

        else if(Number(Sistólica.value) <= Number(Diastólica.value)){
            res.innerHTML = '<p>&#9888; Valor inválido! verifique e tente novamente.</p> '
            res.style = 'color: red;'
        }

        else{

            // pressão baixa

            res.style = 'color: black;'
            
            if(Sistólica.value <= 90 || Diastólica.value <= 60){
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

            <h1>Resultado do diagnóstico: "Pressão baixa"</h1>

            <p>
                Pessão baixa ou Hipotensão é quando os valores a pressão arterial estão abaixo de 90/60. Os sintomas podem variar entre: Tontura, fraqueza, fadiga, visão turva, náusea e, <strong>em casos mais graves, desmaio</strong>.
            </p>
            <p>
                A pressão baixa nem sempre é um problema, mas quando causa sintomas ou interfere na qualidade de vida, é importante investigar. Uma queda repentina na pressão arterial pode ser perigosa e indicar condições como sepse, infarto, insuficiência renal ou AVC. 
            </p>
            <P>
               Para normalizar sua pressão arterial descubra o motivo dela ter baixado e resova-o. (por exemplo: ficar sem comer por muito tempo, <strong>hipoglicemia</strong>, falta de energia no corpo pressão abaixa. Coma algo com carboidrato.)  
            </p>
            `
        }

        // pressão normal

        else if(Sistólica.value <= 120 || Diastólica.value <= 80){
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

            <h1>Resultado do diagnóstico: "Pressão normal"</h1>

            <p>
                Resultados do exame não preocupantes, a pressão arterial normal indica que tudo está indo bem, continue fazendo oque vc faz e para evitar que a pressão suba beba bastante água e consuma a quantidade de macronutrientes mostradas acima, faça também exercicios fisicos ou caminhadas constantes.
            </p>
            
            `
        }

        // pressão no limite "limitofe"

        else if(Sistólica.value < 130 || Diastólica.value <= 80){
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

            <h1>Resultado do diagnóstico: "Limítrofe"</h1>

            <p>
                pressão normal porém alta (no limite de uma pressão saúdavel), isso pode indicar que alguma coisa está errada. Se acaso a pressão estaje almentando procure o motivo da pressão ter subido para relsolver e consequentemente baixar a pressão. As causas podem ser variadas, caso você não descubra a causa é inportante seguir as orientações a seguir
            </p>
            
            <ol>
                <li>
                    Beba bastante água. Um dos motivos da pressão almentar é a desidratação. Se esse for o caso vai ajudar a baixa-la
                </li>
                <li>
                    Controle a respiração. Sente em um local calmo e comece a respirar devagar e profundamente: Inspire pelo nariz por 4 segundos, segure por 2 segundos, expire pela boca por 6 segundos, repita por 5 a 10 min. isso ajuda a reduzir a ativação do sistema nervoso e diminui a pressão.
                </li>
                <li>
                    Descanse. Descansar em um local calmo com pouco barulho e pouca luz diminui a ansiedade e o estresse. Inportante pois a ansiedade e o estresse almentão a pressão.
                </li>
                
            </ol>

            <p> 
                Se mesmo fazendo isso, depois de 30min sua pressão não baixar ou se você sentir desconforto como: Dor no peito, falta de ar, tontura forte, desmaio, formigamento, confusão mental ou visão turva. Procure um médico imediatamete.
            </p>
        
            `
        }

        // pressão alta estágio 1

        else if(Sistólica.value < 140 || Diastólica.value < 90){
        
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

            <h1>Resultado do diagnóstico: "pressão alta (Hipertensão estágio 1)"</h1>

            <p>
                <strong style="color:red;">&#9888; ALERTA:</strong> Pressão arterial alta. Pressão alta pode resultar em riscos de AVC, infartos e varios outros tipos de desastres. para evitar que isso ocorra, tente deminiur a pressão. Para isso descubra a principal causa,(exemplo: <strong>estresse/ansiedade;</strong> controle a respiração, beba água e descance um pouco em um lugar calmo). Caso você sinta desconforto como: dores no peito, falta de ar, visão turva entre outros. Procure imediatamente um médico profissional.
            </p>
            <p>
                &#9888; Não faça automedicação sem saber a causa e muito menos sem a aprovação do médico. Procure um posto de saúde ou um PA mais proximo.
            </p>
            `
        }

        // pressão alta estagio 2

         else if(Sistólica.value < 160 || Diastólica.value < 100){
        
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

            <h1>Resultado do diagnóstico: "pressão alta (Hipertensão estágio 2)"</h1>

            <P>
               <strong style="color:red;">&#9888; ALERTA:</strong> Risco de AVC ou infarto evidente. Proucure abaixar a pressão resolvendo o poblema que fez com que ela aumente. 
            </p>
            <p>
                Caso você não saiba a causa do almento da pressão siga esses passos.
            </p>
            <ol>
                <li>
                    Beba bastante água. A pressão pode almentar pela desidratação, bebendo água e se hidratando fará com que ela diminua um pouco.
                </li>
                <li>
                    Controle a respiração. Uma respiração ofegante almenta o trabalho do coração e do sistema nervoso isso pode fazer com que a pressão almente, controlar a respiração fará com que a pressão diminua um pouco. Respire devager e profundamente, ispire pelo nariz por 4 segundos, segure por 2 segundos, expire pela boca por 6 segundos. 
                </li>
                <li>
                    Descanse. Trabalhos e exercicios pesados almentão o trabalho do coração, fazer isso com a pressão já alta pode ser prejudicial. Ao invés disso descanse em um lugar calmo.
                </li>
            </ol>
            <p>
                Isso pode ajudar a pressão a diminuir um pouco, mas é sempre importante procurar ajuda médica com profissionais qualificados. Se isso não fez a pressão baixar, procure um centro de saúde ou farmacia mais proxima. 
            </p>
            
            `
        }

        // pressão alta estágio 3

        else if(Sistólica.value <= 180 || Diastólica.value <= 120){
        
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

            <h1>Resultado do diagnóstico: "pressão alta (Hipertensão estágio 3)"</h1>

            <p>
                <strong style="color:red;">&#9888; ALERTA:</strong> Risco de Insuficiência cardíaca, Arritmias, AVC e até infarto. A esse nivel é necessario procurar um atendimento médico o quanto antes. Usar metodos como: (Controlar respiração, beber água, entre outros), nesse caso pode não ser eficaz. A melhor escolha é procurar um atendimento profissional.
            </p>
            `
        }

        // crise hipertenciva 

        else if(Sistólica.value > 180 || Diastólica.value > 120){
        
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

            <h1 style = "color: red;">
                &#9888; ALERTA: "Crise hipertensiva"
            </h1>
           <P>
                <strong>Procure um hospital mais proximo imediatamente.</strong> Chance de AVC ou infarto evidentes. Mantenha a respiração controlada para evitar que a pressão suba ainda mais. <strong>Se estiver sozinho ligue para a emergencia agora mesmo.</strong> 
            </p>
            `

        }

        }

    }
    
}
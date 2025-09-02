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

        if(genero[0].checked){
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

    <h1>Treino ABCD Masculino</h1>
 
    <p>
      <strong>A – Peito e tríceps</strong>
    </p>

      <ul>
        <li>Supino reto com barra – 4x8-10</li>

        <li>Supino inclinado com halteres – 3x10-12</li>

        <li>Crucifixo no banco reto – 3x12</li>

        <li>Tríceps testa – 3x10-12</li>

        <li>Tríceps corda na polia – 3x12-15</li>
      </ul>
    
    <p>
      <strong>B – Costas e bíceps</strong>
    </p>

      <ul>
        <li>Puxada frontal (aberta) – 4x8-10</li>

        <li>Remada curvada com barra – 3x8-10</li>

        <li>Remada baixa (cabo) – 3x10-12</li>

        <li>Rosca direta – 3x10-12</li>

        <li>Rosca alternada – 3x12</li>
      </ul>
    
    <p>
      <strong>C – Pernas</strong>
    </p>

      <ul>
        <li>Agachamento livre – 4x8-10</li>

        <li>Leg press – 3x10-12</li>

        <li>Cadeira extensora – 3x12-15</li>

        <li>Mesa flexora – 3x12</li>

        <li>Panturrilha em pé – 4x15-20</li>
      </ul>

    <p>
      <strong>D – Ombros e abdômen</strong>
    </p>

      <ul>
        <li>Desenvolvimento com halteres – 4x8-10</li>

        <li>Elevação lateral – 3x12</li>

        <li>Elevação frontal – 3x12</li>

        <li>Encolhimento de ombros – 3x12-15</li>

        <li>Abdominal infra + prancha – 3 séries cada</li>
      </ul>

            `
        }
        else if(genero[1].checked){
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


    <h1>Treino ABCD Feminino</h1>

    <p>
      <strong>A – Pernas (quadríceps e glúteos)</strong>
    </p>


      <ul>
        <li>Agachamento livre – 4x8-10</li>

        <li>Afundo (passada) – 3x10-12 (cada perna)</li>

        <li>Cadeira extensora – 3x12-15</li>

        <li>Avanço no Smith – 3x12</li>

        <li>Panturrilha em pé – 4x15-20</li>
      </ul>

    <p>
      <strong>B – Posteriores e glúteos</strong>
    </p>

      <ul>
        <li>Levantamento terra romeno – 4x8-10</li>

        <li>Mesa flexora – 3x12</li>

        <li>Cadeira abdutora – 3x12-15</li>

        <li>Glúteo 4 apoios no cabo – 3x12 cada perna</li>

        <li>Elevação pélvica (hip thrust) – 4x10-12</li>
      </ul>

    <p>
      <strong>C – Costas e bíceps</strong>
    </p>

      <ul>
        <li>Puxada frontal (aberta) – 4x8-10</li>

        <li>Remada baixa (cabo) – 3x10-12</li>

        <li>Remada unilateral – 3x12</li>

        <li>Rosca direta – 3x10-12</li>

        <li>Rosca martelo – 3x12</li>
      </ul>

    <p>
      <strong>D – Peito, ombros, tríceps e abdômen</strong>
    </p>

      <ul>
        <li>Supino reto com barra – 4x8-10</li>

        <li>Desenvolvimento com halteres – 3x10-12</li>

        <li>Elevação lateral – 3x12</li>

        <li>Tríceps corda – 3x12-15</li>

        <li>Abdominal oblíquo + prancha – 3 séries cada</li>
      </ul>

            `
        }

    }

}
function hideAll()
{
    document.getElementById("DNARNA").hidden = true
    document.getElementById("DEFAULT").hidden = true
    document.getElementById("TABLE").hidden = true
}


function TABLEMode()
{
    hideAll()
    document.getElementById("TABLE").hidden = false
}


function DNAMode()
{
    hideAll()
    document.getElementById("DNARNA").hidden = false
}



function drawAcid(inp, isRNA)
{
    let box = document.getElementById("drawing")
    while (box.hasChildNodes()){ box.removeChild(box.firstChild) }
    let prots = document.getElementById("proteins")
    while (prots.hasChildNodes()){ prots.removeChild(prots.firstChild) }
    let item
    let width
    let line
    let direction = "left"

    for (let i = 0; i < inp.length; i++)
    {
        switch(i % 12)
        {
            case 0: width  = 240; direction = "left"; break;
            case 1: width  = 200; direction = "left"; break;
            case 2: width  = 100; direction = "left"; break;
            case 3: width  = 100; direction = "right"; break;
            case 4: width  = 200; direction = "right"; break;
            case 5: width  = 240; direction = "right"; break;
            case 6: width  = 240; direction = "right"; break;
            case 7: width  = 200; direction = "right"; break;
            case 8: width  = 100; direction = "right"; break;
            case 9: width  = 100; direction = "left"; break;
            case 10: width = 200; direction = "left"; break;
            case 11: width = 240; direction = "left"; break;
        }

        switch(inp[i])
        {
            case 'A': item = ["#e8524b", "A"]; break;
            case 'T': item = ["#ffcf4f", "T"]; break;
            case 'U': item = ["#f680e7", "U"]; break;
            case 'C': item = ["#6397f5", "C"]; break;
            case 'G': item = ["#58b374", "G"]; break;
        }

        if (isRNA == 1)
        {
            if (direction == "right")
            {
                line = document.createElement("center")
                line.innerHTML = "<div class=\"ball-line\" style=\"width: " + width + "px\"> <div class=\"ball\" style=\"background-color: #a592de; border-color: #a592de;\"> </div> <div class=\"connector\"></div> <div class=\"ball\" style=\"background-color: " + item[0] + ";\">" + item[1] + "</div> </div>"
                box.appendChild(line)
            }
            else
            {
                line = document.createElement("center")
                line.innerHTML = "<div class=\"ball-line\" style=\"width: " + width + "px;\"> <div class=\"ball\" style=\"background-color: " + item[0] + ";\">" + item[1] + "</div> <div class=\"connector\"></div> <div class=\"ball\" style=\"background-color: #a592de; border-color: #a592de\"> </div> </div>"
                box.appendChild(line)
            }
        }
        else
        {
            if (direction == "right")
            {
                line = document.createElement("center")
                line.innerHTML = "<div class=\"ball-line\" style=\"width: " + width + "px\"> <div class=\"ball\" style=\"background-color: white\"> </div> <div class=\"connector\"></div> <div class=\"ball\" style=\"background-color: " + item[0] + ";\">" + item[1] + "</div> </div>"
                box.appendChild(line)
            }
            else
            {
                line = document.createElement("center")
                line.innerHTML = "<div class=\"ball-line\" style=\"width: " + width + "px;\"> <div class=\"ball\" style=\"background-color: " + item[0] + ";\">" + item[1] + "</div> <div class=\"connector\"></div> <div class=\"ball\" style=\"background-color: white\"> </div> </div>"
                box.appendChild(line)
            }
        }
    }
}



function drawProt(inp)
{
    let box = document.getElementById("drawing")
    while (box.hasChildNodes()){ box.removeChild(box.firstChild) }
    let prots = document.getElementById("proteins")
    while (prots.hasChildNodes()){ prots.removeChild(prots.firstChild) }
    let line
    let color
    for (let i = 0; i < inp.length; i++)
        {

            switch(inp[i])
            {
            case 'Fenilalanina': color = "#ffcf4f"; break;
            case 'Leucina': color = "#ffcf4f"; break;
            case 'Serina': color = "#58b374"; break;
            case 'Tirosina': color = "#58b374"; break;
            case 'Parada': color = "#a592de"; break;
            case 'Cisteína': color = "#58b374"; break;
            case 'Triptofano': color = "#ffcf4f"; break;
            case 'Prolina': color = "#ffcf4f"; break;
            case 'Histidina': color = "#6397f5"; break;
            case 'Glutamina': color = "#58b374"; break;
            case 'Arginina': color = "#6397f5"; break;
            case 'Isoleucina': color = "#ffcf4f"; break;
            case 'Asparagina': color = "#58b374"; break;
            case 'Metionina': color = "#ffcf4f"; break;
            case 'Treonina': color = "#58b374"; break;
            case 'Lisina': color = "#6397f5"; break;
            case 'Valina': color = "#ffcf4f"; break;
            case 'Alanina': color = "#ffcf4f"; break;
            case 'Ácido Aspártico': color = "#e8524b"; break;
            case 'Ácido Glutâmico': color = "#e8524b"; break;
            case 'Glicina': color = "#ffcf4f"; break;

            }

            line = document.createElement("center")
            line.innerHTML = "<div class=\"amino-text\" style=\"width:300px; font-size: 32px; background-color: " + color + "\">" + inp[i] + "</div>"
            box.appendChild(line)
    }
}



function valid(reason)
{
    if (reason == 0)
    {
        document.getElementById("converter-output").textContent = "QUANTIDADE INVÁLIDA DE BASES"
    }
    else if (reason == 1)
    {
        document.getElementById("converter-output").textContent = "VALOR INCORRETO PARA BASES"
    }
    else if (reason == 2)
    {
        document.getElementById("converter-output").textContent = ""
    }
}



function checkValidity(text)
{
    text = text.replace(/\s/g,'')
    let size = text.length
    
    if (size % 3 != 0)
    {
        valid(0)
        return 0
    }
    else
    {
        text = text.toUpperCase()
        return text
    }
}



function convertToDNA()
{
    let textBox = document.getElementById("converter-input").value
    let check = checkValidity(textBox)
    let result = ''
    if (check != 0)
    {
        let size = check.length
        
        for (let i = 0; i < size; i++)
        {
            switch(check[i])
            {
                case 'U': result += 'A'; break;
                case 'A': result += 'T'; break;
                case 'C': result += 'G'; break;
                case 'G': result += 'C'; break;
                default: size = 0;
            }
        }
        if (size == 0)
        {
            valid(1)
        }
        else
        {
            document.getElementById("converter-input").value = result
            valid(2)
            drawAcid(result, 0)
        }
    }
}



function convertToRNA()
{
    let textBox = document.getElementById("converter-input").value
    let check = checkValidity(textBox)
    let result = ''
    if (check != 0)
    {
        let size = check.length
        
        for (let i = 0; i < size; i++)
        {
            switch(check[i])
            {
                case 'T': result += 'A'; break;
                case 'A': result += 'U'; break;
                case 'C': result += 'G'; break;
                case 'G': result += 'C'; break;
                default: size = 0;
            }
        }
        if (size == 0)
        {
            valid(1)
        }
        else
        {
            document.getElementById("converter-input").value = result
            valid(2)
            drawAcid(result, 1)
        }
    }
}



function convertToPROT()
{
    let textBox = document.getElementById("converter-input").value
    let check = checkValidity(textBox)
    let result = []
    let convertable = 1

    for (let i = 0; i < check.length; i++)
    {
        if (check[i] == 'T') convertable = 0
    }

    if (check != 0 && convertable == 1)
    {
        for (let i = 0; i < check.length; i+=3)
        {
            triad = check[i] + check[i+1] + check[i+2]
            prot = ''
            switch(triad)
            {
                case "UUU": prot = 'Fenilalanina'; break;
                case "UUC": prot = 'Fenilalanina'; break;
                case "UUA": prot = 'Leucina'; break;
                case "UUG": prot = 'Leucina'; break;
                case "UCU": prot = 'Serina'; break;
                case "UCC": prot = 'Serina'; break;
                case "UCA": prot = 'Serina'; break;
                case "UCG": prot = 'Serina'; break;
                case "UAU": prot = 'Tirosina'; break;
                case "UAC": prot = 'Tirosina'; break;
                case "UAA": prot = 'Parada'; break;
                case "UAG": prot = 'Parada'; break;
                case "UGU": prot = 'Cisteína'; break;
                case "UGC": prot = 'Cisteína'; break;
                case "UGA": prot = 'Parada'; break;
                case "UGG": prot = 'Triptofano'; break;
                case "CUU": prot = 'Leucina'; break;
                case "CUC": prot = 'Leucina'; break;
                case "CUA": prot = 'Leucina'; break;
                case "CUG": prot = 'Leucina'; break;
                case "CCU": prot = 'Prolina'; break;
                case "CCC": prot = 'Prolina'; break;
                case "CCA": prot = 'Prolina'; break;
                case "CCG": prot = 'Prolina'; break;
                case "CAU": prot = 'Histidina'; break;
                case "CAC": prot = 'Histidina'; break;
                case "CAA": prot = 'Glutamina'; break;
                case "CAG": prot = 'Glutamina'; break;
                case "CGU": prot = 'Arginina'; break;
                case "CGC": prot = 'Arginina'; break;
                case "CGA": prot = 'Arginina'; break;
                case "CGG": prot = 'Arginina'; break;
                case "AUU": prot = 'Isoleucina'; break;
                case "AUC": prot = 'Isoleucina'; break;
                case "AUA": prot = 'Isoleucina'; break;
                case "AUG": prot = 'Metionina'; break;
                case "ACU": prot = 'Treonina'; break;
                case "ACC": prot = 'Treonina'; break;
                case "ACA": prot = 'Treonina'; break;
                case "ACG": prot = 'Treonina'; break;
                case "AAU": prot = 'Asparagina'; break;
                case "AAC": prot = 'Asparagina'; break;
                case "AAA": prot = 'Lisina'; break;
                case "AAG": prot = 'Lisina'; break;
                case "AGU": prot = 'Serina'; break;
                case "AGC": prot = 'Serina'; break;
                case "AGA": prot = 'Arginina'; break;
                case "AGG": prot = 'Arginina'; break;
                case "GUU": prot = 'Valina'; break;
                case "GUC": prot = 'Valina'; break;
                case "GUA": prot = 'Valina'; break;
                case "GUG": prot = 'Valina'; break;
                case "GCU": prot = 'Alanina'; break;
                case "GCC": prot = 'Alanina'; break;
                case "GCA": prot = 'Alanina'; break;
                case "GCG": prot = 'Alanina'; break;
                case "GAU": prot = 'Ácido Aspártico'; break;
                case "GAC": prot = 'Ácido Aspártico'; break;
                case "GAA": prot = 'Ácido Glutâmico'; break;
                case "GAG": prot = 'Ácido Glutâmico'; break;
                case "GGU": prot = 'Glicina'; break;
                case "GGC": prot = 'Glicina'; break;
                case "GGA": prot = 'Glicina'; break;
                case "GGG": prot = 'Glicina'; break;
            }
            result.push(prot)
        }
        drawProt(result)
        valid(2)
    }
    else
    {
        if (convertable == 0) valid(1)
        else if (check == 0) valid(0)
    }
}



function showBases()
{
    document.getElementById("AMINOS").hidden = true
    document.getElementById("BASES").hidden = false
}



function showAmino()
{
    document.getElementById("BASES").hidden = true
    document.getElementById("AMINOS").hidden = false
}